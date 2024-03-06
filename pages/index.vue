<template>
  <main class="main">
      <SectionsOffer class="section-offer" />
      <SectionsServices class="section-services" />
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