<template>
  <button class="btn-text-big" type="submit" :disabled="isDisabled">
    Отправить 
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 16H23M23 16L17.6897 11M23 16L17.6897 21" stroke="#FAFAFA"/>
    </svg>
  </button>
</template>

<script lang="ts" setup>
  import { useIsFormDirty, useIsFormValid } from "vee-validate";
  import { computed } from "vue";
  
  const isDirty = useIsFormDirty();
  const isValid = useIsFormValid();
  
  const isDisabled = computed(() => {
    return !isDirty.value || !isValid.value;
  });
</script>

<style>

</style>