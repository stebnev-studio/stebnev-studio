<template>
  <label class="label" :for="forID">
    <slot />
    <div class="label__warning text-med" v-if="warn">
      Введите номер телефона, без него мы не сможем с вами связаться
    </div>
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
    &__warning {
      color: $red;
      @include aprop('margin-top', 16px, 16px, 16px, 12px);
    }

    &__textarea {
      width: 100%;
    }
  }
</style>