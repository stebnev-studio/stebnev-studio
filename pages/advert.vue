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
    <LazySectionsResultsInfo class="section-results-info" :results="data.acf.results" />
    <LazySectionsNumbers
      class="section-about-numbers"
      :numbers="data.acf.numbers.repeater"
      :title="data.acf.numbers.title"
    />
    <LazySectionsStages class="section-stages" :stages="data.acf.stages" />
    <LazyBlocksDoubleTicker class="ticker" :doubleticker="data.acf.doubleticker" />
    <LazySectionsFAQ class="section-faq" :faq="data.acf.faq" />
    <LazySectionsBrief class="section-brief" />
  </main>
</template>

<script lang="ts" setup>
import { useStateGlobal } from "~/composables/stateGlobal";

const state = useStateGlobal();
let { isBlack } = storeToRefs(state);
const { $ScrollTrigger } = useNuxtApp();

const isMobile = useMediaQuery("(min-width: 340px) and (max-width: 767.5px)");

const { data: page } = await useAsyncData("page", async () => {
  const [data] = await Promise.all([
    $fetch("https://stebnev-studio.ru/api/wp-json/wp/v2/pages?slug=advert"),
  ]);

  return { data };
});
const data = page.value.data[0];
console.log(data);

const riSwiper = ref();

provide("riSwiper", riSwiper);

onMounted(async () => {
  await state.setIsBlack(true);
  await nextTick();
  await $ScrollTrigger.refresh();

  if (document.querySelector(".offer")) {
    const offer = $ScrollTrigger.create({
      trigger: ".offer",
      start: "top bottom",
      end: "bottom bottom",
      onEnterBack() {
        state.setIsBlack(false);
        state.setIsHeaderActive(true);
        console.log("enterBack");
      },
      onLeave() {
        state.setIsBlack(true);

        state.setIsHeaderActive(false);
        console.log("Leave");
      },
    });
  }

  if (document.querySelector(".brief")) {
    const brief = $ScrollTrigger.create({
      trigger: ".brief",
      start: "top center",
      end: "bottom center",
      onEnter() {
        state.setIsHeaderActive(true);
        state.setIsBlack(true);
      },
      onLeave() {
        state.setIsBlack(true);
        state.setIsHeaderActive(true);
      },
      onLeaveBack() {
        state.setIsHeaderActive(false);
        const route = useRoute();
        const path = route.path;
        if (path == "/contact") {
          state.setIsHeaderActive(true);
        } else {
          state.setIsHeaderActive(false);
        }
      },
    });
  }

  await $ScrollTrigger.create({
    trigger: ".section-results-info",
    start: "top+=10% top",
    end: "bottom+=400% center",
    pin: true,
    pinSpacing: true,
    onUpdate: async (self) => {
      const progress = useToNumber(self.progress.toFixed(2));
      if (progress.value == 0.25) {
        await riSwiper.value.slideNext();
      }
      if (progress.value == 0.5) {
        await riSwiper.value.slideNext();
      }
      if (progress.value == 0.75) {
        await riSwiper.value.slideNext();
      }
      if (progress.value == 1) {
        await riSwiper.value.slideNext();
      }
    },
  });
});

onUnmounted(async () => {
  await $ScrollTrigger.killAll();
  await $ScrollTrigger.refresh();
});
</script>

<style lang="scss" scoped>
.main {
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
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
  }
}
</style>
