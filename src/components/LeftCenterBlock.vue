<template>
  <div class="row align-content-center left-center-block" ref="workingArea">
    <div class="col d-flex justify-content-center">
      <context-menu
        :contextMenuEvent="contextMenuEvent"
        @reset="contextMenuEvent = null"
        @moveItem="moveItem" />
      <v-stage
        :config="stageConfig"
        @drop.native.prevent="droppedItem"
        @dragover.native.prevent
        @dragenter.native.prevent
        ref="stage">
        <v-layer ref="layer">
          <v-rect
            :config="bgConfig"
            v-if="!bgImg"
            @click="activeItemId = null"
            @touchstart="onTouchBg" />
          <v-image
            :config="bgImgConfig"
            v-else
            @click="activeItemId = null"
            @touchstart="onTouchBg" />
          <item
            v-for="img in images"
            :key="img.id"
            :data="img"
            @newTransform="activeItemId = $event"
            :activeItemId="activeItemId"
            @set-context-menu-event="contextMenuEvent = $event" />
        </v-layer>
      </v-stage>
      <output-file
        :image="outputImage"
        @reset="outputImage = null"
        :items="outputItems" />
    </div>
  </div>
</template>

<script>
import Item from './Item.vue';
import ContextMenu from './ContextMenu.vue';
import OutputFile from './OutputFile.vue';
import info from '../assets/info_t.svg';

export default {
  props: ['bgImg'],
  components: { Item, ContextMenu, OutputFile },
  data() {
    return {
      stageConfig: {
        width: 0,
        height: 0,
        visible: false,
        type: 'stage',
      },
      bgConfig: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        fill: '#efefef',
        type: 'bgRect',
      },
      bgImgConfig: {},
      activeItemId: null,
      contextMenuEvent: null,
      outputImage: null,
      outputItems: [],
    };
  },
  computed: {
    images() { return this.$store.state.clearListImages; },
    downloadTrigger() { return this.$store.state.downloadTrigger; },
    onlyMarkers() { return this.$store.state.onlyMarkers; },
    markerSize() { return this.$store.state.markerSize; },
    outputWidth() { return this.$store.state.outputWidth; },
    bgSize() {
      const { width, height } = this.bgImg ? this.bgImgConfig : this.bgConfig;
      return { width, height };
    },
  },
  watch: {
    bgImg(bgImg) {
      const winRatio = this.$refs.workingArea.offsetWidth / this.$refs.workingArea.offsetHeight;
      const imRatio = bgImg.width / bgImg.height;
      let width;
      let height;
      if (winRatio > imRatio) {
        height = this.$refs.workingArea.offsetHeight * 0.9;
        width = height * imRatio;
      } else {
        width = this.$refs.workingArea.offsetWidth;
        height = width * imRatio;
      }
      Object.assign(this.stageConfig, { width, height });
      Object.assign(this.bgConfig, { width, height });
      this.bgImgConfig = { width, height, image: bgImg };
      this.resizeMarkers();
    },
    downloadTrigger() { this.download(); },
    markerSize() {
      this.resizeMarkers();
    },
  },
  mounted() {
    const width = this.$refs.workingArea.offsetWidth * 0.8;
    const height = this.$refs.workingArea.offsetHeight;
    this.stageConfig.width = width;
    this.stageConfig.height = height;
    this.bgConfig.width = width;
    this.bgConfig.height = height;
    this.stageConfig.visible = true;
    window.addEventListener('keypress', (e) => {
      if (e.key === 'Delete' && this.activeItemId) this.removeItem();
    });
  },
  methods: {
    droppedItem(e) {
      const {
        src,
        offsetX,
        offsetY,
        id,
        finalId,
      } = JSON.parse(e.dataTransfer.getData('text/plain'));
      const image = new Image();
      image.onload = (ev) => {
        const img = ev.target;
        const bgRatio = this.bgSize.width / this.bgSize.height;
        const imRatio = img.width / img.height;
        let width;
        let height;
        if (this.onlyMarkers) {
          width = this.bgSize.width * (this.markerSize / 100);
          height = this.bgSize.width * (this.markerSize / 100);
        } else if (bgRatio > imRatio) {
          height = this.bgSize.height * 0.2;
          width = height * imRatio;
        } else {
          width = this.bgSize.width * 0.2;
          height = width / imRatio;
        }
        const layerX = 'layerX' in e ? e.layerX : e.offsetX;
        const layerY = 'layerY' in e ? e.layerY : e.offsetY;
        this.images.push({
          config: {
            image: ev.target,
            width,
            height,
            draggable: true,
            x: layerX - width * offsetX,
            y: layerY - height * offsetY,
            id,
          },
          id,
          type: this.onlyMarkers ? 'marker' : 'item',
          finalId,
        });
      };
      image.crossOrigin = 'Anonymous';
      image.src = this.onlyMarkers ? info : src;
    },
    moveItem(d) {
      if (d.action === 'remove') {
        this.removeItem();
        return;
      }
      const index = this.images.findIndex((i) => i.id === d.id);
      const newIndex = d.action === 'moveBack' ? index - 1 : index + 1;
      if (newIndex < 0 || newIndex >= this.images.length) return;
      this.images.splice(newIndex, 0, this.images.splice(index, 1)[0]);
    },
    removeItem() {
      if (!this.activeItemId) return;
      const index = this.images.findIndex((im) => im.id === this.activeItemId);
      this.images.splice(index, 1);
    },
    download() {
      this.activeItemId = null;
      this.outputItems = this.$refs.layer.getNode()
        .getChildren().filter((c) => c.getClassName() === 'Image' && c.id())
        .map((c) => {
          const image = this.images.find((im) => im.id === c.id());
          const halfMarker = image.type === 'item' ? this.markerSize / 2 : 0;
          const width = image.type === 'item' ? c.width() * c.scaleX() : 0;
          return {
            x: ((c.x() + width) / this.stageConfig.width) * 100 - halfMarker,
            y: ((c.y()) / this.stageConfig.height) * 100 - halfMarker,
            id: c.id(),
            height: (this.bgSize.width / this.bgSize.height) * this.markerSize,
            finalId: image.finalId,
          };
        });
      this.images.forEach((im, i) => {
        if (im.type === 'marker') this.$set(this.images[i].config, 'visible', false);
      });
      setTimeout(() => {
        const params = {
          pixelRatio: this.outputWidth / this.stageConfig.width,
          mimeType: 'image/jpeg',
        };
        const dataURL = this.$refs.stage.getNode().toDataURL(params);
        this.outputImage = dataURL;
        this.images.forEach((im, i) => {
          if (im.type === 'marker') this.$set(this.images[i].config, 'visible', true);
        });
      }, 0);
    },
    resizeMarkers() {
      this.images.forEach((im, i) => {
        if (im.type === 'marker') {
          this.$set(this.images[i], 'config', Object.assign(im.config, {
            width: this.bgSize.width * (this.markerSize / 100),
            height: this.bgSize.width * (this.markerSize / 100),
          }));
        }
      });
    },
    onTouchBg() {
      this.activeItemId = null;
      this.contextMenuEvent = 'forceHide';
    },
  },
};
</script>

<style lang="scss" scoped>
.left-center-block {
  flex-grow: 8;
}
</style>
