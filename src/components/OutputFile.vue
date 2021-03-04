<template>
  <div class=" d-none">
    <svg
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      ref="svg"
      :width="width"
      :height="height">
      <g>
        <image :xlink:href="image" width="100%" height="100%" ref="image" />
      </g>
      <a
        :href="`https://yandex.ru?id=${item.finalId}`"
        target="_blank"
        v-for="item in items"
        :key="item.id">
        <info
          :coords="item"
          :width="`${markerSize}%`"
          :height="`${item.height}%`"
          :id="item.finalId" />
      </a>
    </svg>
  </div>
</template>

<script>
import Info from './InfoT.vue';

export default {
  props: ['image', 'items'],
  components: { Info },
  data() {
    return {
      width: null,
      height: null,
    };
  },
  computed: {
    markerSize() { return this.$store.state.markerSize; },
  },
  watch: {
    image(image) {
      if (image) {
        const imageEl = document.createElement('img');
        imageEl.onload = () => {
          this.width = imageEl.width;
          this.height = imageEl.height;
          setTimeout(() => {
            this.updateSvg();
          }, 0);
        };
        imageEl.src = this.image;
      }
    },
  },
  methods: {
    download() {
      const link = document.createElement('a');
      link.download = 'img.svg';
      const svgString = new XMLSerializer().serializeToString(this.$refs.svg);
      const decoded = unescape(encodeURIComponent(svgString));
      link.href = `data:image/svg+xml;base64,${btoa(decoded)}`;
      link.click();
      setTimeout(() => {
        this.$emit('reset');
      }, 0);
    },
    updateSvg() {
      const svgString = new XMLSerializer().serializeToString(this.$refs.svg);
      const decoded = unescape(encodeURIComponent(svgString));
      window.parent.postMessage({
        type: 'updateSvg',
        svgBase64: `data:image/svg+xml;base64,${btoa(decoded)}`,
      }, '*');
    },
  },
};
</script>
