<template>
  <NuxtLayout>
      <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
  }

  .page-enter-from,
  .page-leave-to {
    filter: blur(1em);
  }
</style>
