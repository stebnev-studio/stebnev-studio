<template>
  <div class="principles">
      <div class="principles__wrapper wrapper">
        <div class="principles__container container">
          <div class="principles__frame frame-spacing-first" >
            <BlocksPrinciplesItem class="principles__frame-item" :order="1" />
          </div>
          <div class="principles__frame frame-spacing frame-spacing-second">
            <BlocksPrinciplesItem class="principles__frame-item" :order="2" />
          </div>
          <div class="principles__frame frame-spacing frame-spacing-third">
            <BlocksPrinciplesItem class="principles__frame-item" :order="3" />
          </div>
          <div class="principles__frame frame frame-spacing-last">
            <BlocksPrinciplesItem class="principles__frame-item" :order="4" />
          </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
  const isMobile = useMediaQuery("(min-width: 340px) and (max-width: 767.5px)");
  const { $gsap } = useNuxtApp();
  
  if(process.client) {
      onMounted(() => {
        if(isMobile) {
          $gsap.timeline({
            scrollTrigger: {
              trigger: ".principles__container",
              start: 'top top',
              end: "bottom+=400% top",
              pin: true,
              scrub: true
            }
          })
          .to('.frame-spacing-first', {
            opacity: 0
          })
          .from('.frame-spacing-second *', {
            opacity: 0
          })
          .to('.frame-spacing-second *', {
            opacity: 1
          })
          .to('.frame-spacing-second *', {
            opacity: 0
          })
          .from('.frame-spacing-third *', {
            opacity: 0
          })
          .to('.frame-spacing-third *', {
            opacity: 1
          })
          .to('.frame-spacing-third *', {
            opacity: 0
          })
          .from('.frame-spacing-last *', {
            opacity: 0
          })
          .to('.frame-spacing-last *', {
            opacity: 1
          })          
        }
    })
  }

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
