<template>
  <div class=" h-100 items-block">
    <div class="row justify-content-center mb-2 mt-1">
      <div class="col-6">
        <select class="form-select" v-model="brand">
          <option :value="null">Все бренды</option>
          <option
            v-for="(brand, i) in brands"
            :key="i"
            :value="brand">
            {{ brand }}
          </option>
        </select>
      </div>
    </div>
    <div class="row justify-content-center mb-2">
      <div class="col-6">
        <select class="form-select" v-model="type">
          <option :value="null">Все типы</option>
          <option
            v-for="(type, i) in types"
            :key="i"
            :value="type">
            {{ type }}
          </option>
        </select>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            v-model="search"
            @keydown.enter="goSearch"
            placeholder="поиск...">
          <button
            class="btn btn-outline-secondary px-2"
            type="button"
            @click="goSearch">
            <search-icon style="width: 1rem;" />
          </button>
        </div>
      </div>
    </div>
    <div>
      <div
        class="row justify-content-center"
        v-for="(item, i) in items" :key="i"
        v-show="(!brand || item.brand === brand) && (!type || item.type === type) && !item.hidden">
        <div class="col-6">
          <div class="card mb-3">
            <img
              :src="item.preview_img"
              class="card-img-top"
              alt="Фото"
              @dragstart="dragImg(item, $event)"
              draggable="true" />
            <div class="card-body">
              <small>{{ item.type }}</small>
              <h6 class="card-title">
                {{ item.name }}
              </h6>
              <h6 class="card-subtitle mb-2 text-muted" v-if="item.brand.length">
                {{ item.brand }}
              </h6>
              <h4>{{ `₽ ${item.price}` }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SearchIcon from './SearchIcon.vue';

axios.defaults.baseURL = '/';

export default {
  components: { SearchIcon },
  data() {
    return {
      items: [],
      brand: null,
      type: null,
      search: '',
    };
  },
  computed: {
    brands() {
      const brands = this.items.filter((item) => item.brand.length)
        .map((item) => item.brand);
      return [...new Set(brands)];
    },
    types() {
      const types = this.items.filter((item) => item.type.length)
        .map((item) => item.type);
      return [...new Set(types)];
    },
  },
  created() {
    axios.get(`${window.QUERY_ORIGIN}/ajax/flatfeed.php`).then((r) => {
      this.items = r.data.map((item) => (
        Object.assign(item, { name: item.name.replace(/&quot;/g, '"') })
      ));
      // .slice(0, 5)
    });
  },
  methods: {
    dragImg(item, e) {
      e.dataTransfer.setData(
        'text/plain',
        JSON.stringify({
          offsetX: e.offsetX / e.target.width,
          offsetY: e.offsetY / e.target.height,
          src: item.detail_img,
          id: `${item.id}.${Math.random()}`,
          finalId: item.id,
        }),
      );
      this.$emit('imageDragstart');
      return false;
    },
    goSearch() {
      const regex = this.search.length ? RegExp(this.search, 'i') : null;
      this.items.forEach((item, i) => {
        if (regex && !regex.test(item.name)) {
          this.$set(this.items[i], 'hidden', true);
        } else {
          this.$set(this.items[i], 'hidden', false);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  cursor: copy;
}
// .items {
//   flex-grow: 1;
//   overflow-y: auto;
//   overflow-x: hidden;
// }
.items-block {
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
}
</style>
