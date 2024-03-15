<template>
  <main class="main" :class="{bgBlack: isBlack}">

      <LazySectionsOffer class="section-offer" to="google.com">
        <template #offerTitle>Разрабатываем продвигаем & поддерживаем сайты
        </template>
        <template #offerDescription>
          С 2008 года разрабатываем сайты в лучших традициях цифровых технологий
        </template>
        <template #offerButton>
          подробнее
        </template>
      </LazySectionsOffer>

      <LazySectionsServices class="section-services" :isTitle="false">
        <template #ServicesList>
          <BlocksServiceItem />
          <BlocksServiceItem />
          <BlocksServiceItem />
        </template>
      </LazySectionsServices>

      <LazySectionsPortfolio class="section-portfolio"/>
      <LazySectionsAbout class="section-about" />
      <LazySectionsBrief class="section-brief" />
  </main>
</template>

<script setup lang="ts">
  import { useStateGlobal } from '~/composables/stateGlobal';
  const state = useStateGlobal();
  const { isBlack } = storeToRefs(state);

</script>

<style lang="scss" scoped>
  .main {
    min-height: 300vh;
  }

  .section-portfolio {
    @include aprop('padding-top', 304px, 209px, 200px, 140px);
    @include aprop('padding-bottom', 321px, 191px, 200px, 117px);
  }
</style>