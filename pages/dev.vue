<template>
  <main class="main" :class="{ bgBlack: isBlack || isMobile }">
    <LazySectionsOffer
      :to="data.acf.offer.button.link"
      :video="data.acf.offer.video"
      :poster="data.acf.offer.poster"
      :title="data.acf.offer.title"
      :description="data.acf.offer.description"
    >
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

    <LazySectionsServices
      class="section-services"
      :is-subtitle="false"
      :is-title="true"
      :is-description="true"
      :words="data.acf.ticker.words"
      :title="data.acf.accordeon.title"
      :description="data.acf.accordeon.description"
    >
      <template #ServicesDescription>
        {{ data.acf.accordeon.description }}
      </template>
      <template #ServicesList>
        <LazyBlocksServiceItem
          v-for="(item, idx) in data.acf.accordeon.list"
          :key="idx"
          :item="item"
        />
      </template>
    </LazySectionsServices>

    <LazySectionsCasesSlider
      class="section-cases-slider"
      :class="{ bgWhite: isMobile }"
      :cases="data.acf.cases"
    />

    <LazyBlocksDoubleTicker
      class="ticker"
      :doubleticker="data.acf.doubleticker"
    />
    <LazySectionsNumbers
      class="section-about-numbers"
      :numbers="data.acf.numbers.repeater"
      :title="data.acf.numbers.title"
    />
    <LazySectionsStages class="section-stages" :stages="data.acf.stages" />
    <LazyBlocksDoubleTicker
      class="ticker"
      :doubleticker="data.acf.doubleticker_copy"
    />
    <LazySectionsFAQ class="section-faq" :faq="data.acf.faq" />
    <LazySectionsBrief class="section-brief" />
  </main>
</template>

<script lang="ts" setup>
import { useStateGlobal } from "~/composables/stateGlobal";
const { $ScrollTrigger } = useNuxtApp();
const state = useStateGlobal();
let { isBlack } = storeToRefs(state);
state.setIsBlack(true);
const isMobile = useMediaQuery("(min-width: 340px) and (max-width: 767.5px)");

const { page, fetchPage } = usePage("dev");
await fetchPage();

const data = page.value[0];
// console.log(data);

const { $router } = useNuxtApp();

onMounted(async () => {
  await state.setIsBlack(true);
  await nextTick();
  state.setIsBlack(true);

  if (document.querySelector(".offer")) {
    const offer = $ScrollTrigger.create({
      trigger: ".offer",
      start: "top bottom",
      end: "bottom bottom",
      onEnterBack() {
        state.setIsBlack(false);
        state.setIsHeaderActive(true);
        // console.log("enterBack");
      },
      onLeave() {
        state.setIsBlack(true);

        state.setIsHeaderActive(false);
        // console.log("Leave");
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

  if (document.querySelector(".cases")) {
    const cases = $ScrollTrigger.create({
      trigger: ".cases",
      start: "top center",
      end: "bottom center",
      onEnter() {
        state.setIsBlack(false);
      },
      onEnterBack() {
        state.setIsBlack(false);
      },
      onLeaveBack() {
        state.setIsBlack(true);
      },
      onLeave() {
        state.setIsBlack(true);
      },
    });
  }

  $ScrollTrigger.refresh();

  $router.afterEach(() => {
    $ScrollTrigger.refresh();
  });
});

onUnmounted(() => {
  if (process.client) {
    $ScrollTrigger.getAll().forEach((st) => st.kill());
  }
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

  .section-cases-slider {
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
