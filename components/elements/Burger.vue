<template>
  <div class="burger" @click="openMenu" :class="{open: isOpen.isOpenMenu}">
      <span></span>
      <span></span>
      <span></span>
  </div>
</template>

<script setup>
import { useStateGlobal } from '~/composables/stateGlobal';
  const isOpen = useStateGlobal();

  function openMenu() {
    isOpen.toggleMenu();
  }
</script>

<style lang="scss" scoped>
  .burger {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 19px;
    overflow: hidden;
    cursor: pointer;

    & span {
      display: block;
      width: 100%;
      height: 1px;
      background-color: white;
      transition: transform 0.25s;
    }


    &.open {
      width: 16px;
      height: 16px;
      aspect-ratio: 1;

      span {
        position: absolute;
      }
    }
    &.open span:nth-child(2) {
      width: 0;
      height: 0;
    }
    &.open span:first-child {

      transform-origin: left;
      transform: rotate(45deg);
      width: 200%;
    }
    &.open span:last-child {
      transform-origin: right;
      transform: rotate(-45deg);
      right: 0;
      width: 200%;
    }
  }



</style>~/composables/stateGlobalGlobal