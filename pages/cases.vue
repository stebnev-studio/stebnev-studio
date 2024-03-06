<template>
  <main class="main">
    <SectionsCasesOffer class="section-cases-offer" />
    <SectionsCasesPortfolio class="section-cases-portfolio" />
  </main>
</template>



<style lang="scss" scoped>
  .main {
    background: $white;
    min-height: 300vh;
    background-color: white;

    .section-cases {
      &-offer {
        @include aprop("padding-bottom", 300px, 200px, 200px, 140px);
        @include aprop("padding-top", 300px, 200px, 200px, 140px);
      }
      &-portfolio {
        @include aprop("padding-bottom", 300px, 200px, 200px, 140px);
      }
    }

  }

</style>