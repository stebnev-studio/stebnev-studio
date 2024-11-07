<template>
  <Title>Поддержка | Stebnev-Studio</Title>
  <main class="main" :class="{ bgBlack: isBlack || isMobile }">
    <LazySectionsOffer
      :to="data.acf.offer.button.link"
      :video="data.acf.offer.video"
      :poster="data.acf.offer.poster"
      :title="data.acf.offer.title"
      :description="data.acf.offer.description"
    >
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
    <LazySectionsStages class="section-stages" :stages="data.acf.stages" />
    <LazyBlocksDoubleTicker
      class="ticker"
      :doubleticker="data.acf.doubleticker"
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

const isMobile = useMediaQuery("(min-width: 340px) and (max-width: 767.5px)");

const { page, fetchPage } = usePage("support");
await fetchPage();

const data = page.value[0];

const { $router } = useNuxtApp();

onMounted(async () => {
  if (process.client) {
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

    $ScrollTrigger.refresh();

    $router.afterEach(() => {
      $ScrollTrigger.refresh();
    });
  }
});

onUnmounted(() => {
  if (process.client) {
    $ScrollTrigger.getAll().forEach((st) => st.kill());
  }
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
