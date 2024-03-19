<template>
  <main class="main" :class="{ bgBlack: isBlack }">

    <LazySectionsOffer class="section-offer" to="google.com">
      <template #offerTitle>Разрабатываем продвигаем & поддерживаем сайты
      </template>
      <template #offerDescription>
        С 2008 года разрабатываем сайты в лучших традициях цифровых технологий
      </template>
      <template #offerButton>
        подробнее
      </template>
    </LazySectionsOffer>

    <LazySectionsServices class="section-services" :isTitle="false">
      <template #ServicesList>
        <BlocksServiceItem />
        <BlocksServiceItem />
        <BlocksServiceItem />
      </template>
    </LazySectionsServices>

    <LazySectionsPortfolio class="section-portfolio" />
    <LazySectionsAbout class="section-about" />
    <LazySectionsBrief class="section-brief" />
  </main>
</template>

<script setup lang="ts">

import { useStateGlobal } from '~/composables/stateGlobal';

const state = useStateGlobal();
const { isBlack } = storeToRefs(state);
const { $ScrollTrigger } = useNuxtApp();

onMounted(async () => {
  await nextTick();
  await $ScrollTrigger.refresh();
  if (document.querySelector('.offer')) {
    const offer = $ScrollTrigger.create({
      trigger: '.offer',
      start: "top bottom",
      end: "bottom bottom",
      onEnterBack() {
        state.setIsBlack(false);
        state.setIsHeaderActive(true);
        console.log('enterBack');
      },
      onLeave() {
        state.setIsBlack(true);

        state.setIsHeaderActive(false);
        console.log('Leave');

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
  $ScrollTrigger.killAll();
  $ScrollTrigger.refresh();
})

</script>

<style lang="scss" scoped>
.main {
  min-height: 300vh;
}

.section-portfolio {
  @include aprop('padding-top', 304px, 209px, 200px, 140px);
  @include aprop('padding-bottom', 321px, 191px, 200px, 117px);
}
</style>