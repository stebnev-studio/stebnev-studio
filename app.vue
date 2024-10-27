<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-in-out; // Задержка и плавность анимации
}

.page-enter-from {
  opacity: 0;
  filter: blur(2em); // Начальное состояние размытия
}

.page-enter-to {
  opacity: 1;
  filter: blur(0); // Конечное состояние — без размытия
}

.page-leave-from {
  opacity: 1;
  filter: blur(0); // Начальное состояние — без размытия
}

.page-leave-to {
  opacity: 0;
  filter: blur(1em); // Конечное состояние — размытие
}
</style>
