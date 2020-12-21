<template>
  <div class="container left-bottom-block d-flex">
    <div class="row align-content-center w-100 gx-0">
      <div class="col">
        <div class="row">
          <div class="col text-start text-md-center">
            <button class="btn btn-secondary main-btns">
              Назад
            </button>
          </div>
          <div class="col text-end text-md-center">
            <button
              class="btn btn-primary main-btns"
              @click="$store.commit('setDownloadTrigger')">
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.left-bottom-block {
  flex-grow: 2;
  @media (max-width: 767px) {
    .main-btns {
      min-width: 6rem;
    }
  }
}
</style>
