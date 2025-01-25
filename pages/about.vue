<template>
  <Title>О нас | Stebnev-Studio</Title>
  <main class="main" :class="{ bgBlack: isBlack || isMobile }">
    <LazySectionsOffer
      v-if="data.acf.offer"
      class="section-offer"
      :video="data.acf.offer.offer_video"
      :poster="data.acf.offer.offer_poster"
      :title_stebnev="data.acf.offer.offer_title"
      :subtitle="data.acf.offer.offer_description"
    >
      <template #StebnevStudio />
    </LazySectionsOffer>
    <LazySectionsAboutService
      v-if="data.acf.about_service"
      class="section-about-service"
      :info="{
        title: data.acf.about_service.title,
        description: data.acf.about_service.description,
      }"
      :ticker="{ enabled: true, words: data.acf.about_service.ticker.words }"
      :stebnev="true"
      :cite="data.acf.about_service.cite"
    />
    <LazySectionsAboutAbout
      v-if="data.acf.about"
      class="section-about-about"
      :about="data.acf.about"
    />
    <LazySectionsNumbers
      v-if="data.acf.numbers"
      class="section-about-numbers"
      :numbers="data.acf.numbers.repeater"
      :title="data.acf.numbers.title"
    />
    <LazySectionsGoodResults
      v-if="data.acf.numbers.good_results"
      class="section-good-results"
      :title="data.acf.numbers.good_results.title"
      :description="data.acf.numbers.good_results.description"
    />
    <LazySectionsPrinciples
      v-if="data.acf.principles"
      class="section-principles"
      :first="data.acf.principles.first"
      :second="data.acf.principles.second"
      :three="data.acf.principles.three"
      :four="data.acf.principles.four"
    />
    <LazySectionsBrief class="section-brief" />
  </main>
</template>

<script setup>
import { useStateGlobal } from "~/composables/stateGlobal";
const state = useStateGlobal();
const { $ScrollTrigger } = useNuxtApp();
const { $router } = useNuxtApp();
let { isBlack } = storeToRefs(state);

const isMobile = useMediaQuery("(min-width: 340px) and (max-width: 767.5px)");

const { page, fetchPage } = usePage("about");
await fetchPage();

const data = page.value;

onMounted(async () => {
  if (process.client) {
    await state.setIsBlack(false);
    await nextTick();
    state.setIsBlack(false);

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
}

.section-about-service {
  @include aprop("padding-top", 300px, 200px, 200px, 140px);
  transition: 0.3s;
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

.section-principles {
  @include aprop("padding-top", 300px, 200px, 200px, 140px);
}
</style>
