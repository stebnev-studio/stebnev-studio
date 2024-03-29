<template>
  <div class="principles">
    <div class="principles__wrapper wrapper">
      <div class="principles__container container">
        <div class="principles__frame frame-spacing-first">
          <BlocksPrinciplesItem
            class="principles__frame-item"
            :order="1"
            :first_image="first?.first_image"
            :first_description="first?.first_description"
            :second_image="first?.second_image"
            :second_description="first?.second_description"
          />
        </div>
        <div class="principles__frame frame-spacing frame-spacing-second">
          <BlocksPrinciplesItem
            class="principles__frame-item"
            :order="2"
            :first_image="second?.first_image"
            :first_description="second?.first_description"
            :second_image="second?.second_image"
            :second_description="second?.second_description"
          />
        </div>
        <div class="principles__frame frame-spacing frame-spacing-third">
          <BlocksPrinciplesItem
            class="principles__frame-item"
            :order="3"
            :first_image="three?.first_image"
            :first_description="three?.first_description"
            :second_image="three?.second_image"
            :second_description="three?.second_description"
          />
        </div>
        <div class="principles__frame frame frame-spacing-last">
          <BlocksPrinciplesItem
            class="principles__frame-item"
            :order="4"
            :first_image="four?.first_image"
            :first_description="four?.first_description"
            :second_image="four?.second_image"
            :second_description="four?.second_description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

const { first, second, three, four } = defineProps({
  first: {
    type: Object,
  },
  second: {
    type: Object,
  },
  three: {
    type: Object,
  },
  four: {
    type: Object,
  },
});

onMounted(async () => {
  await nextTick();
  const isMobile = await useMediaQuery(
    "(min-width: 340px) and (max-width: 767.5px)"
  );
  if (!isMobile.value) {
    await $gsap
      .timeline({
        scrollTrigger: {
          trigger: ".principles__container",
          start: "top top",
          end: "bottom+=400% top",
          pin: true,
          scrub: true,
        },
      })
      .to(".frame-spacing-first", {
        opacity: 0,
      })
      .from(".frame-spacing-second *", {
        opacity: 0,
      })
      .to(".frame-spacing-second *", {
        opacity: 1,
      })
      .to(".frame-spacing-second *", {
        opacity: 0,
      })
      .from(".frame-spacing-third *", {
        opacity: 0,
      })
      .to(".frame-spacing-third *", {
        opacity: 1,
      })
      .to(".frame-spacing-third *", {
        opacity: 0,
      })
      .from(".frame-spacing-last *", {
        opacity: 0,
      })
      .to(".frame-spacing-last *", {
        opacity: 1,
      });
  }
});
</script>

<style lang="scss" scoped>
.principles {
  // background-color: $black;
  // color: $white;
  min-height: 100vh;

  &__container {
    min-height: 100vh;
    position: relative;
  }

  &__frame {
    position: absolute;
    left: 0;
    top: 0;
    min-height: 100vh;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  &__frame-item {
    height: fit-content;
  }
}
</style>
