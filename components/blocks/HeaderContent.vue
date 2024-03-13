<template>
  <div class="header-content">
    <nav class="header-content__navigation menu">
      <div class="menu-item" @click="active = 'service'" :class="{open: active === 'service'}">
        <span class="menu-text">Услуги</span>
        <div class="menu-item__sub submenu">
          <NuxtLink to="/advert" class="text-med" >Контекстная реклама</NuxtLink>
          <NuxtLink to="/dev" class="text-med" >Проектирование и разработка сайта</NuxtLink>
          <NuxtLink to="/support" class="text-med" >Техническая поддержка сайтов</NuxtLink>
        </div>
      </div>
      <!-- <div class="menu-item menu-text" @click="active = 'portfolio'" :class="{open: active === 'portfolio'}">
        <span class="menu-text">Портфолио</span>
        <div class="menu-item__sub submenu">
          <NuxtLink class="text-med" to="">Контекстная реклама</NuxtLink>
          <NuxtLink class="text-med" to="">Проектирование и разработка сайта</NuxtLink>
          <NuxtLink class="text-med" to="">Техническая поддержка сайтов</NuxtLink>
        </div>
      </div> -->
      <NuxtLink class="menu-item menu-text" to="/cases">Портфолио</NuxtLink>
      <NuxtLink class="menu-item menu-text" to="/contact">Контакты</NuxtLink>
    </nav>
  </div>
</template>

<script setup>
  import { inject } from "vue";
  import { useStateMenu } from "~/composables/state";
  const active = ref('service');
  const isOpenMenu = useStateMenu();

  onMounted(() => {
    document.querySelectorAll(['.router-link-active', 'a.menu-item', '.logo', '.submenu a']).forEach(e => {
      e.addEventListener("click", function(){
        isOpenMenu.set(false);
      })
    })
  })
</script>

<style scoped lang="scss">
  .header-content {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;

    &__navigation {
      display: flex;
      flex-direction: column;
    }

    .menu-text {
      color: $white;
    }
    .submenu {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      clip-path: inset(0% 0% 0% 100%);
      height: 0;
      margin-top: 0;
      margin-bottom: 0;
      @include aprop('margin-left', 263px, 134px, 134px, 0px);
      @include aprop('row-gap', 16px, 12px, 12px, 12px);
      transition: 0.25s;

      a {
        color: $gray;
      }
    }
    .menu-item {
      cursor: pointer;
      @include aprop('margin-bottom', 60px, 40px, 40px, 32px);
    }

    .menu-item.open {
      margin-bottom: 0;
    }

    .menu-item.open {
      .submenu {
        @include aprop('margin-top', 40px, 40px, 40px, 20px);
        @include aprop('margin-bottom', 60px, 40px, 40px, 32px);
        @include aprop('margin-left', 263px, 134px, 134px, 0px);
        clip-path: none;
        height: auto;
      }
    }
  }
</style>