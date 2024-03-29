<template>
  <main class="main" :class="{ bgBlack: isBlack }">
    <LazySectionsOffer
      class="section-offer"
      :to="data.acf.offer_button_link"
      :video="data.acf.offer.offer_video"
      :poster="data.acf.offer.offer_video_poster"
    >
      <template #offerTitle>
        {{ data.acf.offer.offer_title }}
      </template>
      <template #offerDescription>
        {{ data.acf.offer.offer_description }}
      </template>
      <template #offerButton>
        {{ data.acf.offer.offer_button_text }}
      </template>
    </LazySectionsOffer>

    <LazySectionsServices
      class="section-services"
      :isTitle="data.acf.services.title.length != 0"
      :title="data.acf.services.title"
      :words="data.acf.services.ticker"
    >
      <template #ServicesList>
        <BlocksServiceItem
          v-for="(item, idx) in data.acf.services.repeater"
          :key="idx"
          :item="item"
        />
      </template>
    </LazySectionsServices>

    <LazySectionsPortfolio
      class="section-portfolio"
      :portfolio="data.acf.cases"
    />
    <LazySectionsAbout class="section-about" :about="data.acf.about" />
    <LazySectionsBrief class="section-brief" />
  </main>
</template>

<script setup>
import { useStateGlobal } from "~/composables/stateGlobal";

const state = useStateGlobal();
const { isBlack } = storeToRefs(state);
const { $ScrollTrigger } = useNuxtApp();

const { data: page } = await useAsyncData("page", async () => {
  const [data, navigation] = await Promise.all([
    $fetch("https://stebnev-studio.ru/api/wp-json/wp/v2/pages?slug=index"),
  ]);

  return { data, navigation };
});
const data = page.value.data[0];
console.log(data);

onMounted(async () => {
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

  if (document.querySelector(".portfolio")) {
    const portfolio = $ScrollTrigger.create({
      trigger: ".portfolio",
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
  $ScrollTrigger.killAll();
  $ScrollTrigger.refresh();
});
</script>

<style lang="scss" scoped>
.main {
  min-height: 300vh;
}

.section-portfolio {
  @include aprop("padding-top", 304px, 209px, 200px, 140px);
  @include aprop("padding-bottom", 321px, 191px, 200px, 117px);
}
</style>
