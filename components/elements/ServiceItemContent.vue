<template>
  <div class="service-content">
    <p class="text-med">
      {{ header }}
    </p>
    <div class="service-content__text ts">
      <p>
        {{ description }}
      </p>
    </div>
    <ElementsLinkAdditional class="service-content__link" :to="link">
      {{ button }}
    </ElementsLinkAdditional>
  </div>
</template>

<script lang="ts" setup>
const { header, description, button, link } = defineProps({
  header: {
    type: String,
  },
  description: {
    type: String,
  },
  button: {
    type: String,
  },
  link: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.service-content {
  display: flex;
  flex-direction: column;
  transition: $transitionTime;

  &__link {
    @include aprop("margin-top", 32px, 28px, 32px, 20px);
  }

  &__text {
    max-height: 0px;
    overflow: hidden;
    transition: $transitionTime;
  }

  &__text p {
    max-height: 100%;
    @include aprop("margin-top", 40px, 40px, 32px, 32px);
  }
}

.service-item:hover .service-content__text {
  max-height: 200px;
}
</style>
