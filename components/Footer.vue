<template>
  <footer class="footer">
    <div class="wrapper footer__wrapper">
      <div class="container footer__container">
        <div class="footer__ars ts">
          {{ footer.copyright }}
        </div>
        <div class="footer__logo">
          <NuxtImg src="/footer_logo.svg" alt="logo" />
        </div>
        <BlocksFooterLinks class="footer__links" :links="footer.repeater" />
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const { footer } = defineProps({
  footer: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped>
.footer {
  background-color: $black;

  &__ars {
    color: $gray;
    width: 100%;
    @include mobile {
      order: 2;
      text-align: center;
      margin-top: 24px;
      margin-bottom: 40px;
    }
  }

  &__logo {
    @include mobile {
      order: 1;
    }
  }

  &__links {
    @include mobile {
      order: 3;
      justify-content: center;
    }
  }

  &__wrapper {
    @include mobile {
      padding: 0px 20px;
    }
  }

  &__container {
    display: flex;
    max-width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 60px 0px;

    @include mobile {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px 0px;
    }

    & > div,
    & > ul {
      max-width: 400px;

      @include laptop {
        max-width: 220px;
      }

      @include tablet {
        max-width: 220px;
      }
    }
  }
}
</style>
