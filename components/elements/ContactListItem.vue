<template>
  <li class="contact-item">
    <i class="contact-item__icon" v-if="figure == 'square'">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8.5" y="8.5" width="15" height="15" stroke="#FAFAFA"/>
      </svg>
    </i>
    <i class="contact__icon" v-if="figure == 'circle'">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="8.5" stroke="#FAFAFA"/>
      </svg>
    </i>
    <i class="contact__icon" v-if="figure == 'triangle'">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.47372 23.5L16 7L25.5263 23.5H6.47372Z" stroke="#FAFAFA"/>
      </svg>
    </i>
    <NuxtLink class="contact-item__link t3" :to="`mailto:`+to">
      {{ text }}
    </NuxtLink>
  </li>
</template>

<script lang="ts" setup>
  const {figure , text, to} = defineProps({
    figure: String,
    text: String,
    to: String
  })
</script>

<style lang="scss" scoped>
.contact-item {
  display: flex;
  align-items: center;
  @include aprop('column-gap', 40px, 20px, 20px, 12px);
  &__icon {
      display: flex;
      flex-direction: column;
      justify-content: center;
  }

  &__link {
    color: $white;
  }
}
</style>
