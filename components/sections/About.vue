<template>
  <div class="about">
    <div class="about__header">
      <BlocksTicker :words="about?.header_ticker" />
      <BlocksTicker class="about__ticker-slow" :words="about?.header_ticker" />
    </div>

    <BlocksAboutContent
      class="about__content"
      :img="about?.content.image"
      :title="about?.content.title"
      :description="about?.content.description"
      :button="{
        text: about?.content?.button_text,
        link: about?.content?.button_link,
      }"
    />

    <div class="about__footer">
      <BlocksTicker :words="about?.header_ticker" />
      <BlocksTicker class="about__ticker-slow" :words="about?.header_ticker" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { about } = defineProps({
  about: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped>
.about {
  transition: 0.3s;
  // background-color: $black;
  // color: $white;
  overflow-x: hidden;

  &__header {
    @include aprop("padding-top", 280px, 210px, 200px, 163px);
  }

  &__content {
    @include aprop("margin-top", 300px, 200px, 200px, 140px);
    @include aprop("margin-bottom", 300px, 200px, 200px, 140px);
  }
}
</style>
