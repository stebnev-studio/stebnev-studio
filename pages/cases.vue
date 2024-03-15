<template>
  <main class="main" :class="{bgBlack: isBlack || isMobile}">
    <LazySectionsCasesOffer class="section-cases-offer"></LazySectionsCasesOffer>
    <LazySectionsCasesPortfolio class="section-cases-portfolio" />
    <LazySectionsBrief class="section-brief" />
  </main>
</template>

<script setup lang="ts">
  import { useStateGlobal } from '~/composables/stateGlobal';
  const state = useStateGlobal();
  let { isBlack } = storeToRefs(state);
  const isMobile = useMediaQuery('(min-width: 340px) and (max-width: 767.5px)');
</script>

<style lang="scss" scoped>
  .main {
    min-height: 300vh;

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