<template>
  <ul class="links">
    <li class="links__item" v-for="(link) in links">
      <NuxtLink class="links__link text-med" :to="link.link">{{ link.title }}</NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
  const links = reactive([
    {
      title: "Dp",
      link: "https://google.com"
    },
    {
      title: "Vk",
      link: "https://vk.com"
    },
    {
      title: "Dp",
      link: "https://diprofile.com"
    },
  ]);
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