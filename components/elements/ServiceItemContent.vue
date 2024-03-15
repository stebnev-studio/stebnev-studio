<template>
  <div class="service-content">
    <p class="text-med">
      Запуск рекламы от 5 рабочих дней
    </p>
    <div class="service-content__text ts">
      <p>
        Запуск рекламы от 5 рабочих дней. Подбираем инструменты для максимального охвата ЦА. Отслеживаем эффективность, оптимизируем бюджет.
      </p>
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
    transition: $transitionTime;

    &__link {
      @include aprop("margin-top", 32px, 28px, 32px, 20px);
    }

    &__text {
      max-height: 0px;
      overflow: hidden;
      transition: $transitionTime;
    }

    &__text p {
      max-height: 100%;
      @include aprop("margin-top", 40px, 40px, 32px, 32px);

    }
  }

  .service-item:hover .service-content__text{
    max-height: 200px;
  }

</style>