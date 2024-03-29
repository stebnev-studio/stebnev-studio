<template>
  <main class="main" :class="{bgBlack: isBlack, bgWhite: isMobile }">
    <LazySectionsCasesOffer class="section-cases-offer" :offer="data.acf.offer"></LazySectionsCasesOffer>
    <LazySectionsCasesPortfolio class="section-cases-portfolio" :cases="data.acf.cases.repeater"/>
    <LazySectionsBrief class="section-brief" />
  </main>
</template>

<script setup lang="ts">
import { useStateGlobal } from '~/composables/stateGlobal';
const state = useStateGlobal();
let { isBlack } = storeToRefs(state);
const isMobile = useMediaQuery('(min-width: 340px) and (max-width: 767.5px)');
const { $ScrollTrigger } = useNuxtApp();

const { data: page } = await useAsyncData("page", async () => {
  const [data] = await Promise.all([
    $fetch("https://stebnev-studio.ru/api/wp-json/wp/v2/pages?slug=cases"),
  ]);

  return { data };
});
const data = page.value.data[0];
console.log(data);

onMounted(async () => {
  await state.setIsBlack(false);
  await nextTick();
  await $ScrollTrigger.refresh();
  
  if (document.querySelector('.cases-offer')) {

    const caseOffer = $ScrollTrigger.create({
      trigger: '.cases-offer',
      start: "top center",
      end: "bottom center",
      onEnterBack() {
        state.setIsHeaderActive(true);
        state.setIsBlack(false);
      },
      onLeave() {
        state.setIsHeaderActive(false);
        state.setIsBlack(true);
      }
    })

  }

  if (document.querySelector('.portfolio')) {


    const portfolio = $ScrollTrigger.create({
      trigger: '.portfolio',
      start: "top center",
      end: "bottom center",
      onEnter() {
        state.setIsBlack(false);
      },
      onEnterBack() {
        state.setIsBlack(false);
      }
      ,
      onLeaveBack() {
        state.setIsBlack(true);
      },
      onLeave() {
        state.setIsBlack(true);
      }
    })


  }

  if (document.querySelector('.brief')) {

    const brief = $ScrollTrigger.create({
      trigger: '.brief',
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
        if (path == '/contact') {
          state.setIsHeaderActive(true);
        } else {
          state.setIsHeaderActive(false);
        }
      }
    })

  }

})

onUnmounted(async () => {
  await nextTick();
  await $ScrollTrigger.killAll();
  await $ScrollTrigger.refresh();
})
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