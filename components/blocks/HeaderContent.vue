<template>
  <div class="header-content">
    <nav class="header-content__navigation menu">
      <div
        class="menu-item-wrapper menu-text"
        v-for="(item, idx) in header.repeater"
        :key="idx"
      >
        <NuxtLink
          class="menu-item menu-text"
          :to="item.link"
          v-if="item.submenu == false"
          >{{ item.title }}</NuxtLink
        >
        <div
          class="menu-item"
          @click="toggleStatus(item.link)"
          :class="{ open: active === item.link }"
          v-else
        >
          <span class="menu-text">{{ item.title }}</span>
          <div class="menu-item__sub submenu">
            <NuxtLink 
            v-for="i in item.submenu"
            :to="i.link" 
            class="text-med"
              >{{ i.link_text }}</NuxtLink
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useStateGlobal } from "~/composables/stateGlobal";
const active = ref(null);
const isOpenMenu = useStateGlobal();

const { header } = defineProps({
  header: Object,
});

onMounted(() => {
  document
    .querySelectorAll([
      ".router-link-active",
      "a.menu-item",
      ".logo",
      ".submenu a",
    ])
    .forEach((e) => {
      e.addEventListener("click", function () {
        isOpenMenu.setMenu(false);
      });
    });
});

function toggleStatus(e) {
  active.value = active.value == e ? null : e;
}
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
    @include aprop("margin-left", 263px, 134px, 134px, 0px);
    @include aprop("row-gap", 16px, 12px, 12px, 12px);
    transition: 0.25s;

    a {
      color: $gray;
    }
  }
  .menu-item {
    display: block;
    cursor: pointer;
    @include aprop("margin-bottom", 60px, 40px, 40px, 32px);
  }

  .menu-item.open {
    margin-bottom: 0;
  }

  .menu-item.open {
    .submenu {
      @include aprop("margin-top", 40px, 40px, 40px, 20px);
      @include aprop("margin-bottom", 60px, 40px, 40px, 32px);
      @include aprop("margin-left", 263px, 134px, 134px, 0px);
      clip-path: none;
      height: auto;
    }
  }
}
</style>
~/composables/stateGlobalGlobal
