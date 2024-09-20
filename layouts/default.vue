<template>
  <div id="app" class="app">
    <Header
      v-if="header"
      class="app__header"
      :header="header[0].acf.header"
      :links="footer[0].acf.footer.repeater"
    />
    <slot />
    <LazyFooter
      v-if="footer"
      class="app__footer"
      :footer="footer[0].acf.footer"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick } from "vue";
import { useStateGlobal } from "~/composables/stateGlobal";

const state = useStateGlobal();
const { pageState: header, fetchPage: fetchHeader } = usePage("header");
const { pageState: footer, fetchPage: fetchFooter } = usePage("footer");
await fetchHeader();
await fetchFooter();

onMounted(async () => {
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
