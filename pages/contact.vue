<template>
  <main class="main bgBlack">
    <LazySectionsContact
      class="section-contact"
      :contacts="data.acf.contacts"
    />
    <LazySectionsBrief class="section-brief" />
  </main>
</template>

<script lang="ts" setup>
import { useStateGlobal } from "~/composables/stateGlobal";
const state = useStateGlobal();
const { $ScrollTrigger } = useNuxtApp();

const { page, fetchPage } = usePage("contacts");
await fetchPage();

const data = page.value[0];
// console.log(data);
const { $router } = useNuxtApp();

onMounted(async () => {
  if (process.client) {
    await nextTick();
    state.setIsHeaderActive(true);

    $ScrollTrigger.refresh();

    $router.afterEach(() => {
      $ScrollTrigger.refresh();
    });
  }
});

onUnmounted(() => {
  if (process.client) {
    $ScrollTrigger.getAll().forEach((st) => st.kill());
  }
});
</script>

<style scoped lang="scss">
.section-contact {
}
</style>
