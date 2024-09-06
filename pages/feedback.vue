<template>
  <main class="main bgBlack">
    <LazySectionsFeedback :feedback="data.acf.feedback" />
  </main>
</template>

<script lang="ts" setup>
const { $ScrollTrigger } = useNuxtApp();

const { page, fetchPage } = usePage("form");
await fetchPage();

const data = page.value[0];
// console.log(data);

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
