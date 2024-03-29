<template>
  <div id="app" class="app">
    <LazyHeader class="app__header" :header="dataHeader.acf.header" :links="dataFooter.acf.footer.repeater" />
    <slot />
    <LazyFooter class="app__footer" :footer="dataFooter.acf.footer" />
  </div>
</template>

<script lang="ts" setup>
import { useStateGlobal } from "~/composables/stateGlobal";
const { $gsap } = useNuxtApp();
const getPromiseHeader = await $fetch("https://stebnev-studio.ru/api/wp-json/wp/v2/pages?slug=header");
const dataHeader = getPromiseHeader[0];
const getPromiseFooter = await $fetch("https://stebnev-studio.ru/api/wp-json/wp/v2/pages?slug=footer");
const dataFooter = getPromiseFooter[0];
console.log(dataFooter)
onMounted(() => {
  nextTick(() => {
    state.setIsHeaderActive(true);
    state.setIsBlack(false);
  });
});

const state = useStateGlobal();
let { isBlack } = storeToRefs(state);
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  transition: 0.3s;

  &__header {
    order: 1;
  }

  &__footer {
    order: 3;
  }
}
</style>
