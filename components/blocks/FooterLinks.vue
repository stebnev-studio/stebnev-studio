<template>
  <ul class="links">
    <li class="links__item" v-for="(link) in links">
      <NuxtLink class="links__link text-med" target="_blank" :to="link.link">{{ link.link_text }}</NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
  const { links } = defineProps({
    links: Object
  })
</script>

<style lang="scss" scoped>
 .links {
    display: flex;
    column-gap: 42px;
    width: 100%;
    justify-content: flex-end;

    &__item {
      list-style: none;
    }

    &__link {
      position: relative;
      display: flex;
      color: $gray;

      &::after {
        content: "";
        position: absolute;
        bottom: 4px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: transparent;
        transition: 0.25s;
      }

      &:hover::after {
        bottom: 0;
        background-color: $white;
      }
    }
 }
</style>