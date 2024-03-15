<template>
    <div id="app" class="app">
        <Header class="app__header" />
            <slot />
        <Footer class="app__footer" />
    </div>
</template>

<script lang="ts" setup>
  import { useStateGlobal } from '~/composables/stateGlobal';
  const { $gsap } = useNuxtApp();
  onMounted(() => {
    nextTick(() => {
      state.setIsHeaderActive(true);
      state.setIsBlack(false);
    })
  })

  const state = useStateGlobal();
  let { isBlack } = storeToRefs(state);
</script>

<style lang="scss" scoped>
    .app {
        display: flex;
        flex-direction: column;
        transition: 0.3s;

        &__header {
            order: 1
        }

        &__footer {
            order: 3
        }
    }
</style>