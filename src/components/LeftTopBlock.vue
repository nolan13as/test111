<template>
  <div class="container position-relative left-top-block d-flex">
    <div
      class="row align-items-center w-100"
      :class="'gx-0 justify-content-center gx-xl-3'">
        <div class="col-8 col-md-auto mb-2 mb-md-0 order-0">
          <button
            class="btn btn-primary main-btns me-5"
            @click="$refs.file.click()">
            Изменить фон
          </button>
          <input type="file" class=" d-none" ref="file" @change="openFile">
        </div>
        <div class="col-4 mb-2 d-xl-none text-end order-1 order-md-4 col-md-auto ms-md-4 mb-md-0">
          <button
            class="navbar-toggler border-1 border-secondary px-2 end-0 top-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            @click="$emit('openSidebar')">
            <img src="@/assets/toggler.svg" class="toggler-img">
          </button>
        </div>
        <div class="col-6 col-md-auto order-2">
          <div class="form-check form-switch d-inline-block ps-0">
            <input
              class="form-check-input float-end ms-2"
              type="checkbox"
              id="switchOnlyMarkers"
              @change="check_imgaes_exist(onlyMarkers)"
              v-model="onlyMarkers">
            <label class="form-check-label" for="switchOnlyMarkers">
              <span class="d-md-none">Разметка</span>
              <span class="d-none d-md-inline">Только разметка</span>
            </label>
          </div>
        </div>
        <div class="col-6 col-md-auto order-3">
          <div class="row gx-2 justify-content-end ms-md-3">
            <label class="col-auto col-form-label" for="changeMarkerSize">
              <span class="d-md-none">Маркер</span>
              <span class="d-none d-md-inline">Размер маркера</span>
            </label>
            <div class="col-auto">
              <select
                id="changeMarkerSize"
                class="form-select w-auto"
                v-model="markerSize">
                <option :value="1">1</option>
                <option :value="2">2</option>
                <option :value="4">4</option>
                <option :value="8">8</option>
              </select>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      onlyMarkers: false,
      markerSize: 2,
    };
  },
  watch: {
    onlyMarkers(onlyMarkers) {
      this.$store.commit('toggleOnlyMarkers', onlyMarkers);
    },
    markerSize(markerSize) {
      this.$store.commit('setMarkerSize', markerSize);
    },
  },
  computed: {
    images() { return this.$store.state.clearListImages; },
  },
  mounted() {
    // eslint-disable-next-line no-undef
    function updateURL() {
      // eslint-disable-next-line no-restricted-globals
      if (history.pushState) {
        const baseUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
        // eslint-disable-next-line no-restricted-globals
        history.pushState(null, null, baseUrl);
      } else {
        console.warn('History API не поддерживает ваш браузер');
      }
    }
    updateURL();
    // eslint-disable-next-line no-restricted-globals
    const projId = location.search.slice(1).split(',')[0].split(':')[1];
    // eslint-disable-next-line no-restricted-globals
    const roomId = location.search.slice(1).split(',')[1].split(':')[1];
    // eslint-disable-next-line no-restricted-globals
    const type = location.search.slice(1).split(',')[2].split(':')[1];
    // eslint-disable-next-line no-restricted-globals,no-console
    console.log(projId);
    // eslint-disable-next-line no-console
    console.log(roomId);
    // eslint-disable-next-line no-console
    console.log(type);
    axios.get(`/ajax/room_img.php?room_id=${roomId}&type=${type}`).then((response) => {
      // eslint-disable-next-line no-console
      console.log(response);
      this.load_file_auto(response);
      this.$store.commit('setDownloadTrigger');
    });
  },
  methods: {
    check_imgaes_exist(onlyMarkers) {
      if (this.images.length && onlyMarkers) {
        // eslint-disable-next-line no-restricted-globals,no-alert
        const agree = confirm('нажимая ок, Вы удалите все с рабочей области');
        if (agree) {
          this.$store.commit('clear_images', []);
          console.log('agree');
        } else {
          console.log('not agree');
        }
      }
    },
    openFile(e) {
      const { files } = e.target;
      // eslint-disable-next-line no-console
      if (!files.length) return;
      if (!files[0].type.match(/jpeg|gif|bmp|png|jpg/i)) {
        const text = 'Выбранный файл не является изображением';
        this.$store.commit('addToast', { text, type: 'warning' });
        return;
      }
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const file = fileReader.result;
        this.loadImage(file);
      };
      fileReader.readAsDataURL(files[0]);
      e.target.value = null;
    },
    load_file_auto(canvas) {
      const { files } = canvas;
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const file = fileReader.result;
        this.loadImage(file);
      };
      fileReader.readAsDataURL(files[0]);
    },
    loadImage(src) {
      const image = new Image();
      image.onload = (ev) => {
        this.$emit('newBg', ev.target);
        const { width, height } = ev.target;
        if (width > height) {
          const k = width / height;
          if (k > 4) {
            this.markerSize = 1;
          } else if (k > 2) {
            this.markerSize = 2;
          } else {
            this.markerSize = 4;
          }
        } else {
          this.markerSize = 4;
        }
      };
      image.src = src;
    },
  },
};
</script>

<style lang="scss" scoped>
.left-top-block {
  flex-grow: 2;
  .toggler-img {
    width: 2rem;
  }
  @media (min-width: 769px) {
    .navbar-toggler {
      position: absolute;
    }
  }
}
</style>
