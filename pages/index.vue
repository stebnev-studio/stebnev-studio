<template>
  <Title>Главная | Stebnev-Studio</Title>
  <Meta
    name="description"
    content="Stebnev Studio — веб-студия полного цикла с 15-летним опытом. Предлагаем комплексные услуги по созданию, продвижению и сопровождению сайтов для вашего бизнеса."
  />
  <!-- Если всё загружено -->
  <main v-if="isLoaded" class="main" :class="{ bgBlack: isBlack }">
    <SectionsOffer
      class="section-offer offer"
      :to="data.acf.offer.button.link"
      :video="data.acf.offer.offer_video"
      :poster="data.acf.offer.offer_video_poster"
      :title="data.acf.offer.offer_title"
      :description="data.acf.offer.offer_description"
    >
      <template #offerButton>
        {{ data.acf.offer.button.text }}
      </template>
    </SectionsOffer>

    <SectionsServices
      class="section-services"
      :is-title="data.acf.services.title.length != 0"
      :title="data.acf.services.title"
      :words="data.acf.services.ticker"
    >
      <template #ServicesList>
        <BlocksServiceItem
          v-for="(item, idx) in data.acf.services.repeater"
          :key="idx"
          :item="item"
          :idx="idx"
        />
      </template>
    </SectionsServices>

    <SectionsPortfolio
      class="section-portfolio portfolio"
      :portfolio="data.acf.cases"
    />
    <SectionsAbout class="section-about" :about="data.acf.about" />
    <SectionsBrief class="section-brief brief" />
  </main>

  <!-- Иначе показываем загрузку -->
  <div v-else class="main__loader">Загрузка данных...</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { useStateGlobal } from "~/composables/stateGlobal";
import { usePage } from "~/composables/usePage";

// Глобальное состояние
const state = useStateGlobal();
const { isBlack } = storeToRefs(state);

// Работа с API
const { page, fetchPage } = usePage("index");

// Локальные reactive/refs
const isLoaded = ref(false); // Готовность всего контента
const data = ref<any>(null); // Если у вас есть типизация ACF, подставьте её

// Список GSAP-триггеров, чтобы убивать их на onUnmounted
const scrollTriggers: any[] = [];

/**
 * Основная логика инициализации:
 * 1. Загружаем данные (fetchPage).
 * 2. Присваиваем data.value.
 * 3. Рендерим шаблон (await nextTick()).
 * 4. Инициализируем GSAP-триггеры.
 */
const initPage = async () => {
  try {
    // 1. Загружаем данные страницы
    await fetchPage();
    data.value = page.value;

    // 2. Делаем флаг "загружено" (чтобы VDOM создал элементы)
    isLoaded.value = true;

    // 3. Ждём, пока Vue отрендерит DOM-элементы
    await nextTick();

    // 4. Создаем триггеры
    setupScrollTriggers();

    // Обновляем ScrollTrigger (важно при динамическом создании)
    const { $ScrollTrigger } = useNuxtApp();
    $ScrollTrigger.refresh();
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
  }
};

// Cоздаем триггеры
const setupScrollTriggers = () => {
  const { $ScrollTrigger } = useNuxtApp();

  const offerEl = document.querySelector(".offer");
  const portfolioEl = document.querySelector(".portfolio");
  const briefEl = document.querySelector(".brief");

  const createTrigger = (el: Element | null, opts: any) => {
    if (!el) return;
    const trigger = $ScrollTrigger.create({
      trigger: el,
      ...opts,
    });
    scrollTriggers.push(trigger);
  };

  // Offer Trigger
  createTrigger(offerEl, {
    start: "top bottom",
    end: "bottom bottom",
    onEnterBack() {
      state.setIsBlack(false);
      state.setIsHeaderActive(true);
    },
    onLeave() {
      state.setIsBlack(true);
      state.setIsHeaderActive(false);
    },
  });

  // Portfolio Trigger
  createTrigger(portfolioEl, {
    start: "top center",
    end: "bottom center",
    onEnter() {
      state.setIsBlack(false);
    },
    onLeave() {
      state.setIsBlack(true);
    },
    onEnterBack() {
      state.setIsBlack(false);
    },
    onLeaveBack() {
      state.setIsBlack(true);
    },
  });

  // Brief Trigger
  createTrigger(briefEl, {
    start: "top center",
    end: "bottom center",
    onEnter() {
      state.setIsHeaderActive(true);
      state.setIsBlack(true);
    },
    onLeave() {
      state.setIsBlack(true);
      state.setIsHeaderActive(true);
    },
    onLeaveBack() {
      state.setIsHeaderActive(false);
      const route = useRoute();
      if (route.path === "/contact") {
        state.setIsHeaderActive(true);
      } else {
        state.setIsHeaderActive(false);
      }
    },
  });
};

// Вешаем логику на onMounted
onMounted(async () => {
  if (!process.client) return;
  await nextTick();

  /**
   * Если документ уже полностью загружен (user может переходить
   * по роутам внутри SPA, и событие load уже могло произойти),
   * то просто вызываем initPage() сразу.
   * Иначе подписываемся на window.load.
   */
  if (document.readyState === "complete") {
    initPage();
  } else {
    const onWindowLoad = () => {
      initPage();
      window.removeEventListener("load", onWindowLoad);
    };
    window.addEventListener("load", onWindowLoad);
  }
});

// При размонтировании убиваем триггеры
onUnmounted(() => {
  if (!process.client) return;
  scrollTriggers.forEach((st) => st.kill());
  scrollTriggers.length = 0;
});
</script>

<style lang="scss" scoped>
.main {
  min-height: 300vh;

  &__loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 1.5rem;
    color: #fff;
  }
}

.section-portfolio {
  @include aprop("padding-top", 304px, 209px, 200px, 140px);
  @include aprop("padding-bottom", 321px, 191px, 200px, 117px);
}
</style>
