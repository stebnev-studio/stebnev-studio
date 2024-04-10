<template>
  <main class="main bgBlack">
    <LazySectionsFeedback :feedback="data.acf.feedback" />
  </main>
</template>

<script lang="ts" setup>
const { $ScrollTrigger } = useNuxtApp();

const { data: page } = await useAsyncData("page", async () => {
  const [data] = await Promise.all([
    $fetch("https://api.stebnev-studio.ru/main/wp-json/wp/v2/pages?slug=form"),
  ]);

  return { data };
});
const data = page.value.data[0];
console.log(data);

const { $router } = useNuxtApp();

onMounted(async () => {
  if (process.client) {
    $ScrollTrigger.refresh();

    $router.afterEach(() => {
      $ScrollTrigger.refresh();
    });
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
