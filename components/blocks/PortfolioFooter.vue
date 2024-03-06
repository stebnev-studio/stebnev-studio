<template>
  <div class="portfolio-footer">
    <div class="portfolio-footer__description text-med">
      С 2013 года разработали и запустили более 500 проектов разных типов и отраслей. <br><br>
      На текущий момент продолжаем сотрудничество с клиентами по продвижению и сопровождению сайтов.
    </div>
    <ElementsLinkAdditional class="black portfolio-footer__link" to="/">
      Смотреть все кейсы
    </ElementsLinkAdditional>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
  .portfolio-footer {
    display: grid;

    &__link {
      @include aprop("margin-top", 60px, 40px, 40px, 32px);
    }
  }
</style>