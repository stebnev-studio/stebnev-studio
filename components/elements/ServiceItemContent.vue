<template>
  <div class="service-content">
    <p class="text-med">
      Запуск рекламы от 5 рабочих дней
    </p>
    <div class="service-content__text ts">
      Запуск рекламы от 5 рабочих дней. Подбираем инструменты для максимального охвата ЦА. Отслеживаем эффективность, оптимизируем бюджет.
    </div>
    <ElementsLinkAdditional class="service-content__link" to="/">
      подробнее
    </ElementsLinkAdditional>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
  .service-content {
    display: flex;
    flex-direction: column;
    transition: 0.25s;

    &__link {
      @include aprop("margin-top", 32px, 28px, 32px, 20px);
    }

    &__text {
      height: 0%;
      overflow: hidden;
      transition: 0.25s;
      margin-top: 0;
    }
  }

  .service-item:hover .service-content__text {
    @include aprop("margin-top", 40px, 40px, 32px, 32px);
    height: 100%;
  }
</style>