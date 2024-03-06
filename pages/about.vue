<template>
  <main class="main">
      <SectionsOffer class="section-offer" />
      <SectionsAboutService  class="section-about-service" />
      <SectionsAboutAbout class="section-about-about" />
      <SectionsNumbers class="section-about-numbers"/>
      <SectionsGoodResults class="section-good-results" />
      <SectionsPrinciples class="section-principles" />
  </main>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  .main {
    background-color: $black;
    min-height: 100vh;
    background-color: white;
  }

  .section-about-service {
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
  }
  .section-about-about {
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
  }
  .section-about-numbers {
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
  }
  .section-good-results {
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
  }

</style>