<template>
  <NuxtLink :to="props.to" class="btn-text-big link-add">
    <slot/>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 16H23M23 16L17.6897 11M23 16L17.6897 21" stroke="#FAFAFA"/>
    </svg>
  </NuxtLink>
</template>

<script lang="ts" setup>
  const props = defineProps({
    to: {
      type: String
    }
  })
</script>

<style lang="scss" scoped>
  .link-add {
    display: flex;
    align-items: center;
    column-gap: 8px;
    color: $white;

    &.black {
      color: $black;

      svg * {
        fill: $black;
        stroke: $black;
      }
    }

  }
</style>