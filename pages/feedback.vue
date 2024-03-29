<template>
  <main class="main bgBlack">
    <LazySectionsFeedback :feedback="data.acf.feedback" />
  </main>
</template>

<script lang="ts" setup>
const { $ScrollTrigger } = useNuxtApp();

const { data: page } = await useAsyncData("page", async () => {
  const [data] = await Promise.all([
    $fetch("https://stebnev-studio.ru/api/wp-json/wp/v2/pages?slug=form"),
  ]);

  return { data };
});
const data = page.value.data[0];
console.log(data);

onMounted(() => {
  nextTick(() => {
    $ScrollTrigger.refresh();
  });
});
</script>

<style lang="scss" scoped>
.main {
}
</style>
