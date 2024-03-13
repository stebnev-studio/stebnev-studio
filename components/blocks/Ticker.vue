<template>
  <div class="ticker">
    <div class="ticker__wrapper">
      <div class="ticker__line">
      <span v-for="(item, idx) in words" :idx="idx" :class="{tickerBig: idx % 2 == 0, tickerSmall: idx % 2 != 0}">
        {{ item }}
      </span>
    </div>
    <div class="ticker__line">
      <span v-for="(item, idx) in words" :idx="idx" :class="{tickerBig: idx % 2 == 0, tickerSmall: idx % 2 != 0}">
        {{ item }}
      </span>
    </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const { words } = defineProps({
    words : {
      type: Array<String>,
      required: true,
      default: ['JAVA script.', 'BRANDING.', 'DEVELOPMENT.', 'UI/UX DESIGN', 'CSS.']
    }
  });
</script>

<style scoped lang="scss">
  .ticker {
    display: flex;
    width: 100%;
    overflow-x: hidden;

    &__wrapper {
      display: flex;
      width: max-content;
      animation: ticker 20s linear infinite;
      column-gap: 80px;
    }

    &__line {
      display: flex;
      width: max-content;
      column-gap: 80px;

      span {
        max-width: max-content;
      }
    }
  }

  .about__ticker-slow > .ticker__wrapper{
      animation-duration: 15s;
      animation-direction: reverse;
  }

  @keyframes ticker {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-50% - 40px));
    }
  }
</style>