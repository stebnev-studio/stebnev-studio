<template>
  <main class="main" :class="{ bgBlack: isBlack || isMobile }">
    <LazySectionsOffer
      class="section-offer"
      :video="data.acf.offer.offer_video"
      :poster="data.acf.offer.offer_poster"
      :title_stebnev="data.acf.offer.offer_title"
      :subtitle="data.acf.offer.offer_description"
    >
      <template #StebnevStudio></template>
    </LazySectionsOffer>
    <LazySectionsAboutService
      class="section-about-service"
      :info="{
        title: data?.acf.about_service.title,
        description: data?.acf.about_service.description,
      }"
      :ticker="{ enabled: true, words: data.acf.about_service.ticker.words }"
      :stebnev="true"
      :cite="data?.acf.about_service.cite"
    />
    <LazySectionsAboutAbout class="section-about-about" :about="data.acf.about" />
    <LazySectionsNumbers
      class="section-about-numbers"
      :numbers="data.acf.numbers.repeater"
      :title="data.acf.numbers.title"
    />
    <LazySectionsGoodResults class="section-good-results" :title="data.acf.numbers.good_results.title" :description="data.acf.numbers.good_results.description" />
    <LazySectionsPrinciples class="section-principles" :first="data.acf.principles.first" :second="data.acf.principles.second" :three="data.acf.principles.three" :four="data.acf.principles.four" />
    <LazySectionsBrief class="section-brief" />
  </main>
</template>

<script setup>
import { useStateGlobal } from "~/composables/stateGlobal";
const state = useStateGlobal();
const { $ScrollTrigger } = useNuxtApp();
let { isBlack } = storeToRefs(state);

const isMobile = useMediaQuery("(min-width: 340px) and (max-width: 767.5px)");

const { data: page } = await useAsyncData("page", async () => {
  const [data] = await Promise.all([
    $fetch("https://stebnev-studio.ru/api/wp-json/wp/v2/pages?slug=about"),
  ]);

  return { data };
});
const data = page.value.data[0];
console.log(data);

onMounted(async () => {
  await state.setIsBlack(false);
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
});

onUnmounted(async () => {
  await nextTick();
  await $ScrollTrigger.killAll();
  await $ScrollTrigger.refresh();
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
