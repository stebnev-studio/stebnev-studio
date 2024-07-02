<template>
  <div id="app" class="app">
    <LazyHeader
      v-if="dataHeader"
      class="app__header"
      :header="dataHeader?.acf.header"
      :links="dataFooter?.acf.footer.repeater"
    />
    <slot />
    <LazyFooter v-if="dataFooter" class="app__footer" :footer="dataFooter?.acf.footer" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick } from "vue";
import { useStateGlobal } from "~/composables/stateGlobal";
const { $gsap } = useNuxtApp();

const dataHeader = ref(null);
const dataFooter = ref(null);
const state = useStateGlobal();
let { isBlack } = storeToRefs(state);

const fetchHeaderAndFooter = async () => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    const getPromiseHeader = await $fetch("https://api.stebnev-studio.ru/main/wp-json/wp/v2/pages?slug=header", {
      method: 'GET',
      mode: 'cors',
      headers
    });
    dataHeader.value = getPromiseHeader[0];

    const getPromiseFooter = await $fetch("https://api.stebnev-studio.ru/main/wp-json/wp/v2/pages?slug=footer", {
      method: 'GET',
      mode: 'cors',
      headers
    });
    dataFooter.value = getPromiseFooter[0];

    console.log(dataHeader.value);
    console.log(dataFooter.value);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};

onMounted(async () => {
  await fetchHeaderAndFooter();
  await nextTick();
  state.setIsHeaderActive(true);
  state.setIsBlack(false);
});
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  transition: $transitionTime;

  &__header {
    order: 1;
  }

  &__footer {
    order: 3;
  }
}
</style>
