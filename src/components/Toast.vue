<template>
  <div aria-live="polite" aria-atomic="true">
    <div class="toast-container position-absolute">
      <div
        class="toast qwe"
        :class="`bg-${t.message.type}`"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        v-for="t in toasts"
        :key="t.id"
        :ref="t.id">
        <div class="toast-body d-flex">
          {{ t.message.text }}
          <button
            type="button"
            class="btn-close ms-auto"
            data-bs-dismiss="toast"
            aria-label="Close"></button>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'bootstrap';

export default {
  data() {
    return {
      toasts: [],
    };
  },
  computed: {
    message() { return this.$store.state.toast; },
  },
  watch: {
    message(message) {
      if (message.text) this.addToast(message);
    },
  },
  beforeDestroy() {
    this.toasts.forEach((t) => {
      this.$refs[t.id][0].removeEventListener('hidden.bs.toast', () => {});
    });
  },
  methods: {
    addToast(message) {
      const id = Math.random();
      this.toasts.push({
        message,
        id,
      });
      this.$nextTick(() => {
        const toast = new Toast(this.$refs[id][0], { delay: 5000 });
        toast.show();
        this.$refs[id][0].addEventListener('hidden.bs.toast', () => {
          const index = this.toasts.findIndex((t) => t.id === id);
          this.toasts.splice(index, 1);
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.toast-container {
  right: 20px;
  top: 20px;
}
</style>
