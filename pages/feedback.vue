<template>
  <Title>Обратная связь | Stebnev-Studio</Title>
  <main class="main bgBlack">
    <LazySectionsFeedback :feedback="data.acf.feedback" />
  </main>
</template>

<script lang="ts" setup>
const { $ScrollTrigger } = useNuxtApp();

const { page, fetchPage } = usePage("form");
await fetchPage();

const data = page.value;
// console.log(data);

const { $router } = useNuxtApp();

onMounted(async () => {
  if (process.client) {
  }
});

onUnmounted(async () => {
  if (process.client) {
    $ScrollTrigger.getAll().forEach((st) => st.kill());
  }
});
</script>

<style lang="scss" scoped>
.main {
}
</style>
