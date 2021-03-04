<template>
  <div class="dropdown">
    <button
      class="dropdown-toggle border-0 position-absolute overflow-hidden"
      :style="coords"
      ref="toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false">
    </button>
  <ul
    class="dropdown-menu"
    ref="menu"
    role="menu">
    <li>
      <a
        class="dropdown-item"
        href="#"
        v-for="(item, i) in items"
        :key="i"
        @click.prevent="handleClick(item)">
        {{ item.name }}
      </a>
    </li>
    <li><hr class="dropdown-divider"></li>
    <li>
      <a
        class="dropdown-item text-danger"
        href="#"
        @click.prevent="handleClick({ action: 'remove' })">
        Удалить
      </a>
    </li>
  </ul>
  </div>
</template>

<script>
import { Dropdown } from 'bootstrap';

export default {
  props: ['contextMenuEvent'],
  data() {
    return {
      dropdown: null,
      coords: {
        top: 0,
        left: 0,
      },
      itemId: null,
    };
  },
  computed: {
    items() {
      return [
        {
          name: 'Переместить назад',
          action: 'moveBack',
        },
        {
          name: 'Переместить вперед',
          action: 'moveForward',
        },
      ];
    },
  },
  watch: {
    contextMenuEvent(e) {
      if (e === 'forceHide') {
        this.dropdown.hide();
      } else if (e) {
        this.coords.top = `${e.coords.top}px`;
        this.coords.left = `${e.coords.left}px`;
        this.itemId = e.id;
        this.dropdown.hide();
        this.dropdown.show();
        setTimeout(() => {
          this.$emit('reset');
        }, 0);
      }
    },
  },
  mounted() {
    this.dropdown = new Dropdown(this.$refs.toggle);
  },
  methods: {
    handleClick(item) {
      this.$emit('moveItem', { id: this.itemId, action: item.action });
      setTimeout(() => {
        this.dropdown.hide();
      }, 0);
    },
  },
};
</script>

<style lang="scss">
.dropdown-toggle {
  width: 0;
  height: 0;
  &::after {
    display: none;
  }
}
</style>
