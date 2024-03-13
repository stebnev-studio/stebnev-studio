<template>
  <main class="main">
      <SectionsOffer class="section-offer" to="google.com">
        <template #offerTitle>
          Разрабатываем
          продвигаем &
          поддерживаем сайты
        </template>
        <template #offerDescription>
          С 2008 года разрабатываем сайты в лучших традициях цифровых технологий
        </template>
        <template #offerButton>
          подробнее
        </template>
      </SectionsOffer>

      <SectionsServices class="section-services" :isTitle="false">
        <template #ServicesList>
          <BlocksServiceItem />
          <BlocksServiceItem />
          <BlocksServiceItem />
        </template>
      </SectionsServices>

      <SectionsPortfolio class="section-portfolio" />
      <SectionsAbout class="section-about" />
  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .main {
    background: red;
    min-height: 300vh;
    background-color: white;
  }

  .section-portfolio {
    @include aprop('padding-top', 304px, 209px, 200px, 140px);
    @include aprop('padding-bottom', 321px, 191px, 200px, 117px);
  }
</style>