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
  },
  mutations: {
    addToast(state, toast) {
      Vue.set(state, 'toast', toast);
    },
    setDownloadTrigger(state) { state.downloadTrigger = Math.random(); },
    setInfo(state, info) { state.info = info; },
    toggleOnlyMarkers(state, onlyMarkers) { state.onlyMarkers = onlyMarkers; },
    setMarkerSize(state, markerSize) { state.markerSize = markerSize; },
  },
  actions: {
  },
  modules: {
  },
});
