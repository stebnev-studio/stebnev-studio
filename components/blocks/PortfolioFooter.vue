<template>
  <div class="portfolio-footer">
    <div
      class="portfolio-footer__description text-med"
      v-html="footer?.description"
    />
    <ElementsLinkAdditional
      class="black portfolio-footer__link"
      :to="footer?.button_link"
    >
      {{ footer?.button_text }}
    </ElementsLinkAdditional>
  </div>
</template>

<script lang="ts" setup>
const { footer } = defineProps({
  footer: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped>
.portfolio-footer {
  display: grid;

  &__link {
    @include aprop("margin-top", 60px, 40px, 40px, 32px);
  }
}
</style>
