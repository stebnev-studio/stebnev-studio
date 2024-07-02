<template>
  <main class="main" :class="{ bgBlack: isBlack }">
    <SectionsOffer
      class="section-offer"
      :to="data.acf.offer.button.link"
      :video="data.acf.offer.offer_video"
      :poster="data.acf.offer.offer_video_poster"
      :title="data.acf.offer.offer_title"
      :description="data.acf.offer.offer_description"
    >
      <template #offerButton>
        {{ data.acf.offer.button.text }}
      </template>
    </SectionsOffer>

    <SectionsServices
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
          :idx="idx"
        />
      </template>
    </SectionsServices>

    <SectionsPortfolio class="section-portfolio" :portfolio="data.acf.cases" />
    <SectionsAbout class="section-about" :about="data.acf.about" />
    <SectionsBrief class="section-brief" />
  </main>
</template>

<script setup>
import { useStateGlobal } from "~/composables/stateGlobal";

const { data: page } = await useAsyncData("page", async () => {
  const [data, navigation] = await Promise.all([
    $fetch("https://api.stebnev-studio.ru/main/wp-json/wp/v2/pages?slug=index"),
  ]);

  return { data, navigation };
});
const data = page.value.data[0];
// console.log(data);

const state = useStateGlobal();
const { isBlack } = storeToRefs(state);
const { $ScrollTrigger } = useNuxtApp();
const { $router } = useNuxtApp();

onMounted(async () => {
  if (process.client) {
    await nextTick();
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
  min-height: 300vh;
}

.section-portfolio {
  @include aprop("padding-top", 304px, 209px, 200px, 140px);
  @include aprop("padding-bottom", 321px, 191px, 200px, 117px);
}
</style>
