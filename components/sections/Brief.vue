<template>
  <div class="brief">
    <div class="brief__content">
      <div class="brief-big brief__text" v-if="!isMobileAndTabletandLaptop">БРИФ</div>
      <div class="brief-small brief__text" v-else>БРИФ</div>
      <NuxtLink class="brief__link btn-text-big" to="/feedback">
        Обсудить проект
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 6H14.5M14.5 6L9.18966 1M14.5 6L9.18966 11" stroke="#FAFAFA"/>
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useMediaQuery } from "@vueuse/core";
  import { useStateGlobal } from '~/composables/stateGlobal';
  const isMobileAndTabletandLaptop = useMediaQuery("(min-width: 340px) and (max-width: 1023.5px)");


  const state = useStateGlobal();
  const { isBlack } = storeToRefs(state);

</script>

<style lang="scss" scoped>
  .brief {
    transition: 0.3s;
    // background-color: $black;
    // color: $white;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;

    &__text {
      color: $white;
    }

    &__link {
      display: flex;
      column-gap: 17px;
      align-items: center;
      justify-content: center;
      margin-top: 8px;
      color: $white;
    }
  }
</style>