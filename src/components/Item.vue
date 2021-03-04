<template>
  <div>
    <v-image
      :config="data.config"
      ref="image"
      @click="enableTransformer($event, 'click')"
      @touchstart="enableTransformer($event, 'touch')"
      @touchend="resetTouchTimer"
      @contextmenu="setCtx"
      @dragend="resetTouchTimer" />
    <v-transformer
      ref="transformer"
      :config="transformerConfig" />
  </div>
</template>

<script>
export default {
  props: ['data', 'activeItemId'],
  data() {
    return {
      transformerConfig: {
        resizeEnabled: this.data.type === 'item',
        rotateEnabled: false,
        centeredScaling: true,
        enabledAnchors: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
        boundBoxFunc(ov, nv) {
          if (nv.width < 5 || nv.height < 5) {
            return ov;
          }
          return nv;
        },
      },
      touchTimer: null,
    };
  },
  computed: {
  },
  watch: {
    activeItemId(id) {
      if (id !== this.data.id) {
        this.$refs.transformer.getNode().nodes([]);
      }
    },
  },
  methods: {
    enableTransformer(e, touchType) {
      if (touchType === 'touch') {
        this.touchTimer = setTimeout(() => {
          this.setCtx(e);
        }, 1000);
      }
      const image = this.$refs.image.getNode();
      this.$refs.transformer.getNode().nodes([image]);
      this.$emit('newTransform', this.data.id);
    },
    setCtx(e) {
      e.evt.preventDefault();
      e.evt.stopPropagation();
      const stage = e.currentTarget.getStage().content;
      const top = e.evt.clientY - stage.offsetTop;
      const left = e.evt.clientX - stage.offsetLeft;
      this.$emit('set-context-menu-event', { coords: { top, left }, id: this.data.id });
    },
    resetTouchTimer() {
      clearTimeout(this.touchTimer);
    },
  },
};
</script>
