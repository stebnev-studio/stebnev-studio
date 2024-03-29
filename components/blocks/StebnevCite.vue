<template>
  <div class="stebnev-cite">
    <div class="stebnev-cite__description text-med">
      {{ text }}
    </div>
    <div class="stebnev-cite__content">
      <div class="stebnev-cite__photo">
        <NuxtImg class="stebnev-cite__img" :src="img" />
      </div>
      <div class="stebnev-cite__bio">
        <span class="stebnev-cite__name t3">
          {{ fio }}
        </span>
        <span class="stebnev-cite__owner">
          {{ stebnev }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { stebnev, fio, text, img } = defineProps({
  stebnev: String,
  fio: String,
  text: String,
  img: String || undefined
})
</script>

<style lang="scss" scoped>
  .stebnev-cite {
    display: flex;
    flex-direction: column;
    @include aprop('row-gap', 50px, 40px, 40px, 32px);

    &__content {
      display: flex;
      align-items: center;
      @include aprop('column-gap', 40px, 24px, 24px, 24px);
    }

    &__owner {
      color: $gray;
      margin-top: 8px;
    }

    &__img {
      @include aprop('width', 100px, 80px, 80px, 55px);
    }

    &__bio {
      display: flex;
      flex-direction: column;
    }


  }
</style>