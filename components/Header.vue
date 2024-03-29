<template>
  <header class="header">
    <div class="header__visible" :class="{ active: isHeaderActive }">
      <NuxtLink class="header__logo logo" to="/">
        <ElementsLogoSVG />
      </NuxtLink>
      <ElementsBurger />
    </div>
    <div class="header__content" :class="{ open: isOpenMenu }">
      <div class="wrapper">
        <BlocksHeaderContent class="container" :header="header" />
        <div class="header__footer">
          <div class="header__title ts">/ Меню</div>
          <BlocksFooterLinks :links="links" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useStateGlobal } from "~/composables/stateGlobal";

defineProps({
  header: Object,
  links: Object
})

onMounted(() => {
  state.setIsHeaderActive(true);
  state.setIsBlack(false);
});

const state = useStateGlobal();
let { isOpenMenu, isHeaderActive } = storeToRefs(state);
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  justify-content: space-between;

  &__visible {
    position: fixed;
    left: 0;
    top: 0;
    mix-blend-mode: difference;
    transform: translateY(-100%);

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @include aprop("padding", 41px, 32px, 32px, 16px);
    z-index: 9999;
    height: max-content;
    transition: 0.25s;
  }
  &__visible.active {
    transform: translateY(0) !important;
  }

  &__content {
    position: fixed;
    top: 0px;
    left: 0;
    z-index: 9998;

    width: 100%;
    height: 100dvh;

    background: $black;
    transform: translateY(-100%);
    transition: transform 0.25s;

    & > .wrapper {
      position: relative;
      height: 100%;
    }

    &.open {
      transform: translateY(0);
    }
  }

  &__footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px;

    @include mobile {
      display: flex;
      flex-direction: column;
      justify-content: center;
      row-gap: 40px;

      & > div,
      & > ul {
        display: flex;
        justify-content: center;
      }
    }
  }

  &__title {
    color: $gray;
    width: 100%;
  }
}

.logo {
  display: flex;
  width: 95px;
  height: 34px;
}
</style>
