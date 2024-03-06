<template>
    <header class="header">
      <div class="header__visible">
        <NuxtLink class="header__logo logo" to="/">
          <ElementsLogoSVG />
        </NuxtLink>
        <ElementsBurger />
      </div>
      <div class="header__content" :class="{open: isOpen}">
        <div class="wrapper">
          <BlocksHeaderContent class="container" />
          <div class="header__footer">
              <div class="header__title ts">/ Меню</div>
              <BlocksFooterLinks />
          </div>
        </div>
      </div>
    </header>
</template>


<script setup>
import {provide } from 'vue';
import LocomotiveScroll from 'locomotive-scroll';
const { $ScrollTrigger, $gsap } = useNuxtApp();
const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
        duration: 1.2,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        normalizeWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -8 * t)), // https://www.desmos.com/calculator/brs54l4xou
    },
});

onMounted(() => {
  addClass();
  $gsap.timeline({
    scrollTrigger: {
      trigger: ".main",
      start: "top top",
      end: "top+=50px top",
      onLeave: removeClass,
      onEnterBack: addClass
    },
  })

  $gsap.timeline({
    scrollTrigger: {
      trigger: ".brief",
      start: "top top",
      onEnter: addClass,
      onLeaveBack: removeClass
    }
  })

  function addClass() {
    document.querySelector(".header__visible").classList.add("active");
  }

  function removeClass() {
    document.querySelector(".header__visible").classList.remove("active");
  }
})

const isOpen = ref(false);
provide('isOpenMenu', isOpen);
console.log(isOpen);
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;

    &__visible {
        position: fixed;
        left: 0;
        top: 0;
        mix-blend-mode: difference;
        transform: translateY(-100%);

        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        @include aprop("padding", 41px, 32px, 32px, 16px);
        z-index: 9999;
        height: max-content;
        transition: 0.25s;
    }
    &__visible.active {
      transform: translateY(0) !important;
    }

    &__content {
      position: fixed;
      top: 0px;
      left: 0;
      z-index: 9998;

      width: 100%;
      height: 100dvh;
      
      background: $black;
      transform: translateY(-100%);
      transition: transform 0.25s;

      & > .wrapper {
        position: relative;
        height: 100%;
      }

      &.open {
        transform: translateY(0);
      }
    }

    &__footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 40px;

      @include mobile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 40px;

        & > div, & > ul {
          display: flex;
          justify-content: center;
        }
      }
    }

    &__title {
      color: $gray;
      width: 100%;
    }
  }

  .logo {
      display: flex;
      width: 95px; 
      height: 34px;
  }
</style>