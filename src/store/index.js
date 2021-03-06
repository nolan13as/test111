import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toast: {},
    downloadTrigger: null,
    info: null,
    onlyMarkers: false,
    markerSize: 2,
    outputWidth: 1600,
    clearListImages: [],
  },
  mutations: {
    addToast(state, toast) {
      Vue.set(state, 'toast', toast);
    },
    setDownloadTrigger(state) { state.downloadTrigger = Math.random(); },
    setInfo(state, info) { state.info = info; },
    toggleOnlyMarkers(state) {
      Vue.set(state, 'onlyMarkers', !state.onlyMarkers);
    },
    setMarkerSize(state, markerSize) { state.markerSize = markerSize; },
    clear_images(state, clearListImages) {
      Vue.set(state, 'clearListImages', clearListImages);
    },
  },
  actions: {
  },
  modules: {
  },
});
