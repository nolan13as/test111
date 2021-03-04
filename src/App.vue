<template>
  <div id="app" class="py-3 h-100">
    <div class="row h-100 mx-3">
      <div
        class="h-100 d-flex flex-column"
        :class="isMobile ? 'col-12' : 'col-9'">
        <left-top-block
          @newBg="bgImg = $event"
          @openSidebar="sidebarjs.open()" />
        <left-center-block :bgImg="bgImg" />
        <left-bottom-block />
        <toast />
      </div>
      <div
        class="h-100"
        :class="isMobile ? 'mobile-sidebar' : 'col-3'"
        :sidebarjs="isMobile || null">
        <right-block
          :class="isMobile ? 'pt-3' : ''"
          @imageDragstart="isMobile ? sidebarjs.close() : ''" />
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap';
import { polyfill } from 'mobile-drag-drop';
import { SidebarElement } from '../node_modules/sidebarjs/lib/cjs/sidebarjs';
import 'sidebarjs/lib/sidebarjs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftTopBlock from './components/LeftTopBlock.vue';
import LeftCenterBlock from './components/LeftCenterBlock.vue';
import LeftBottomBlock from './components/LeftBottomBlock.vue';
import RightBlock from './components/RightBlock.vue';
import Toast from './components/Toast.vue';

export default {
  name: 'App',
  components: {
    LeftTopBlock,
    LeftCenterBlock,
    LeftBottomBlock,
    RightBlock,
    Toast,
  },
  data() {
    return {
      bgImg: null,
      sidebarjs: null,
      isMobile: window.innerWidth < 1200,
    };
  },
  created() {
    polyfill();
  },
  mounted() {
    this.enableSidebar();
    window.addEventListener('orientationchange', () => {
      this.isMobile = window.innerWidth < 1200;
      this.enableSidebar();
    });
  },
  beforeDestroy() {
    if (this.sidebarjs) this.sidebarjs.destroy();
  },
  methods: {
    enableSidebar() {
      if (this.isMobile) {
        this.sidebarjs = new SidebarElement({
          position: 'right',
          nativeSwipe: false,
        });
      } else if (this.sidebarjs) {
        this.sidebarjs.destroy();
        this.sidebarjs = null;
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html, body {
  height: 100%;
}
.main-btns {
  min-width: 8.5rem;
}
.mobile-sidebar {
  --bs-gutter-x: 0;
}
</style>
