<template>
  <Title>Контакты | Stebnev-Studio</Title>
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

const data = page.value;
// console.log(data);

onMounted(async () => {
  if (process.client) {
    await nextTick();
    state.setIsHeaderActive(true);
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
