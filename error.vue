<template>
  <Header
    class="header"
    :header="header.acf.header"
    :links="footer.acf.footer.repeater"
  />
  <main class="main error bgBlack">
    <h2 class="t2 error__title">{{ statusMessages }}</h2>
    <div class="error__ticker error-ticker">
      <div class="error-ticker__wrapper">
        <div class="error-ticker__line">
          <span class="error__code first" v-for="(item, idx) in 7">
            {{ statusError }}
          </span>
        </div>
        <div class="error-ticker__line">
          <span class="error__code second" v-for="(item, idx) in 7">
            {{ statusError }}
          </span>
        </div>
      </div>
    </div>
    <ElementsLinkAdditional class="error__gohome" to="/" @click="handleError">
      Вернуться на главную
    </ElementsLinkAdditional>
  </main>
  <Footer class="footer" :footer="footer.acf.footer"></Footer>
</template>

<script lang="ts" setup>
import { useStateGlobal } from "~/composables/stateGlobal";

const { error } = defineProps({
  error: Object as () => NuxtError,
});

const { header, fetchPage: fetchHeader } = usePage("header");
const { footer, fetchPage: fetchFooter } = usePage("footer");
await fetchHeader();
await fetchFooter();

const statusError = error?.statusCode;
let statusMessages = error?.statusMessage;
statusMessages = statusError == 404 ? "Страница не найдена :(" : statusMessages;

const handleError = () => clearError({ redirect: "/" });

onMounted(async () => {
  await nextTick();
  state.setIsHeaderActive(true);
  state.setIsBlack(true);
  console.log(error);
});

const state = useStateGlobal();
</script>

<style lang="scss" scoped>
.error {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;

  &__title {
    margin-bottom: 50px;
  }
  &__gohome {
    margin-top: 50px;
  }

  &__code {
    color: $white;
    @include ffs(260px, 200px, 150px, 130px);
    font-weight: 800;
    line-height: 110%;
  }

  .first.error__code {
    &:nth-child(2n) {
      color: $black;
      text-shadow:
        -1px -1px 0 $white,
        1px -1px 0 $white,
        -1px 1px 0 $white,
        1px 1px 0 $white;
    }
  }

  .second.error__code {
    &:nth-child(2n) {
      color: $black;
      text-shadow:
        -1px -1px 0 $white,
        1px -1px 0 $white,
        -1px 1px 0 $white,
        1px 1px 0 $white;
    }
  }

  @include mobile {
    position: relative;
    min-height: 85vh;
  }
}

.error-ticker {
  display: flex;
  width: 100%;
  overflow: hidden;

  &__wrapper {
    display: flex;
    width: max-content;
    animation: ticker 20s linear infinite;
    column-gap: 100px;
  }

  &__line {
    display: flex;
    width: max-content;
    column-gap: 100px;

    span {
      max-width: max-content;
    }
  }
}

.footer {
  position: absolute;
  width: 100%;
  bottom: 0;
}

@keyframes ticker {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-50% - 40px));
  }
}
</style>
