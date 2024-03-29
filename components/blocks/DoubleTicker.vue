<template>
  <div class="doubleTicker">
    <BlocksTicker :words="doubleticker.repeater" />
    <BlocksTicker class="about__ticker-slow" :words="doubleticker.repeater"/>
  </div>
</template>

<script lang="ts" setup>
const { doubleticker } = defineProps({
  doubleticker: {
    type: Object
  }
})
</script>

<style>

</style>