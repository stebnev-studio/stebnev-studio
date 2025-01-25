<template>
  <div id="app" class="app">
    <!-- Header -->
    <Header
      v-if="header && header.acf?.header"
      class="app__header"
      :header="header.acf.header"
      :links="footer?.acf?.footer?.repeater"
    />

    <!-- Слот для контента -->
    <slot />

    <!-- Footer -->
    <LazyFooter
      v-if="footer && footer.acf?.footer"
      class="app__footer"
      :footer="footer.acf.footer"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useStateGlobal } from "~/composables/stateGlobal";
import { usePage } from "~/composables/usePage";

// Глобальное состояние
const state = useStateGlobal();

// Подключение страниц для Header и Footer
const { pageState: header, fetchPage: fetchHeader } = usePage("header");
const { pageState: footer, fetchPage: fetchFooter } = usePage("footer");

// Асинхронная загрузка данных
onMounted(async () => {
  try {
    // Параллельная загрузка данных Header и Footer
    await Promise.all([fetchHeader(), fetchFooter()]);

    // Устанавливаем состояние после загрузки
    state.setIsHeaderActive(true);
    state.setIsBlack(false);
  } catch (error) {
    console.error("Ошибка загрузки Header/Footer:", error);
  }
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
