<template>
  <label class="label">
    <slot />
  </label>
</template>

<script lang="ts" setup>
  const { forID, placeholder, warn } = defineProps({
    forID : String,
    placeholder: String,
    warn: {}
  })
</script>

<style lang="scss" scoped>
  .label {

    &:has(.label__warning) input{
      color: $red;
      border-color: $red;
    }
    &__input {
      width: 100%;
    }
  }
</style>