<template>
  <main class="main" :class="{ bgBlack: isBlack || isMobile }">
    <LazySectionsOffer
      :to="data.acf.offer.button.link"
      :video="data.acf.offer.video"
      :poster="data.acf.offer.poster"
    >
      <template #offerTitle>
        {{ data.acf.offer.title }}
      </template>
      <template #offerDescription>
        {{ data.acf.offer.description }}
      </template>
      <template #offerButton>
        {{ data.acf.offer.button.text }}
      </template>
    </LazySectionsOffer>
    <LazySectionsAboutService
      class="section-about-service"
      :ticker="{
        enabled: false,
      }"
      :stebnev="false"
      :info="{
        title: data.acf.about_service.title,
        description: data.acf.about_service.description,
      }"
    />
    <LazySectionsTariffs class="section-tariffs" :tariffs="data.acf.tariffs" />
    <LazyBlocksTicker class="ticker" :words="data.acf.ticker.words" />
    <LazySectionsNumbers
      class="section-about-numbers"
      :numbers="data.acf.numbers.repeater"
      :title="data.acf.numbers.title"
    />
    <LazySectionsStages class="section-stages" :stages="data.acf.stages"/>
    <LazyBlocksDoubleTicker class="ticker" :doubleticker="data.acf.doubleticker" />
    <LazySectionsFAQ class="section-faq" :faq="data.acf.faq" />
    <LazySectionsBrief class="section-brief" />
  </main>
</template>

<script lang="ts" setup>
import { useStateGlobal } from "~/composables/stateGlobal";
const { $ScrollTrigger } = useNuxtApp();
const state = useStateGlobal();
let { isBlack } = storeToRefs(state);

const isMobile = useMediaQuery("(min-width: 340px) and (max-width: 767.5px)");

const { data: page } = await useAsyncData("page", async () => {
  const [data] = await Promise.all([
    $fetch("https://stebnev-studio.ru/api/wp-json/wp/v2/pages?slug=support"),
  ]);

  return { data };
});
const data = page.value.data[0];
console.log(data);

onMounted(() => {
  nextTick(() => {
    $ScrollTrigger.refresh();
  });
});
</script>

<style lang="scss" scoped>
.main {
  background-color: $black;
  min-height: 100vh;

  .section-about-service {
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
  }

  .section-tariffs {
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
  }

  .section-about-numbers {
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
  }
  .section-results-info {
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
  }
  .section-faq {
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
    @include aprop("padding-bottom", 300px, 200px, 200px, 140px);
  }

  .section-stages {
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
  }

  .ticker {
    // background-color: $black;
    // color: $white;
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
  }
}
</style>
