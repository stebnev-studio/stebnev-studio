<template>
  <main class="main" :class="{ bgBlack: isBlack || isMobile }">
    <LazySectionsOffer to="google.com">
      <template #offerTitle>
        Разрабатываем
        удобные
        и стильные сайты
      </template>
      <template #offerDescription>
        Проектируем, разрабатываем и запускаем. Сайты под ключ!
      </template>
      <template #offerButton>
        подробнее
      </template>
    </LazySectionsOffer>
    <LazySectionsAboutService class="section-about-service" :ticker="false" :stebnev="false" :info="aboutInfo" />
    <LazySectionsServices class="section-services" :isSubtitle="false" :isTitle="true" :isDescription="true">
      <template #ServicesDescription>
        Стоимость каждого проекта рассчитывается индивидуально
      </template>
      <template #ServicesList>
        <LazyBlocksServiceItem />
        <LazyBlocksServiceItem />
        <LazyBlocksServiceItem />
        <LazyBlocksServiceItem />
        <LazyBlocksServiceItem />
        <LazyBlocksServiceItem />
        <LazyBlocksServiceItem />
      </template>
    </LazySectionsServices>

    <LazySectionsCasesSlider class="section-cases-slider" :class="{ bgWhite: isMobile }">

    </LazySectionsCasesSlider>

    <LazyBlocksDoubleTicker class="ticker" />
    <LazySectionsNumbers class="section-about-numbers" :numbers="numbers" :title="numbersTitle" />
    <LazySectionsStages class="section-stages" />
    <LazyBlocksDoubleTicker class="ticker" />
    <LazySectionsFAQ class="section-faq" :questions="questions" />
    <LazySectionsBrief class="section-brief" />
  </main>
</template>

<script lang="ts" setup>
import { useStateGlobal } from '~/composables/stateGlobal';
const { $ScrollTrigger } = useNuxtApp();
const state = useStateGlobal();
let { isBlack } = storeToRefs(state);
const isMobile = useMediaQuery('(min-width: 340px) and (max-width: 767.5px)');

//ЧаВо
const questions = reactive([
  {
    title: 'Что нельзя рекламировать? 1',
    text: 'Рекламировать товары, копирующие известные бренды, реплики, использовать авторский контент, размещать на изображениях или упоминать в тексте чужие торговые марки, товарные знаки;, публиковать фотографии, нарушающие конфиденциальность личной жизни и данных людей;',
    isActive: false
  },
  {
    title: 'Что нельзя рекламировать? 2',
    text: 'Рекламировать товары, копирующие известные бренды, реплики, использовать авторский контент, размещать на изображениях или упоминать в тексте чужие торговые марки, товарные знаки;, публиковать фотографии, нарушающие конфиденциальность личной жизни и данных людей;',
    isActive: false
  },
  {
    title: 'Что нельзя рекламировать? 3',
    text: 'Рекламировать товары, копирующие известные бренды, реплики, использовать авторский контент, размещать на изображениях или упоминать в тексте чужие торговые марки, товарные знаки;, публиковать фотографии, нарушающие конфиденциальность личной жизни и данных людей;',
    isActive: false
  },
]);

// О Услуге
const aboutInfo = reactive({
  title: 'Проектирование и разработка сайта — основное направление нашей студии',
  description: 'Наличие сайта – обязательное условие для привлечения клиентов из интернета. Сайт рассказывает посетителю о ваших предложениях, тем самым работая на повышение имиджа компании и расширение клиентской базы. <br/><br/>Мы осуществляем полный комплекс работ по созданию сайтов информационного и коммерческого типа. Разрабатываем сайты на самых современных CMS и framework. Нашими клиентами является преимущество торговые и производственные предприятия.'
})

// Цифры
const numbers = reactive([
  {
    number: "60+",
    title: "Клиентов на сопровождении",
    description: "Выстраиваем долгие и доверительные партнёрские отношения."
  },
  {
    number: "24/7",
    title: "мониторинг работы сайта",
    description: "Предоставляем бесперебойную работу сайта. Оперативно реагируем на проблемы."
  },
  {
    number: "780+",
    title: "задач по поддержке в  месяц",
    description: "Всегда на связи и готовы выполнить вашу задачу. Выполняем качественно и в срок."
  },

]);

const numbersTitle = ref('Ответственность и профессиональный подход к проведению работ');

onMounted(async () => {
  await nextTick();
  await $ScrollTrigger.refresh();

  if (document.querySelector('.offer')) {
    const offer = $ScrollTrigger.create({
      trigger: '.offer',
      start: "top bottom",
      end: "bottom bottom",
      onEnterBack() {
        state.setIsBlack(false);
        state.setIsHeaderActive(true);
        console.log('enterBack');
      },
      onLeave() {
        state.setIsBlack(true);

        state.setIsHeaderActive(false);
        console.log('Leave');

      }
    })
  }

  if (document.querySelector('.brief')) {

    const brief = $ScrollTrigger.create({
      trigger: '.brief',
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
        const path = route.path;
        if (path == '/contact') {
          state.setIsHeaderActive(true);
        } else {
          state.setIsHeaderActive(false);
        }
      }
    })

  }

  if (document.querySelector('.cases')) {
    const cases = $ScrollTrigger.create({
      trigger: '.cases',
      start: "top center",
      end: "bottom center",
      onEnter() {
        state.setIsBlack(false);
      },
      onEnterBack() {
        state.setIsBlack(false);
      }
      ,
      onLeaveBack() {
        state.setIsBlack(true);
      },
      onLeave() {
        state.setIsBlack(true);
      }
    })
  }

});

onUnmounted(async () => {
  await nextTick();
  $ScrollTrigger.killAll();
  $ScrollTrigger.refresh();
})

</script>

<style lang="scss" scoped>
.main {
  min-height: 100vh;

  .section-about-service {
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
  }

  .section-tariffs {
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
  }

  .section-about-numbers {
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
  }

  .section-results-info {
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
  }

  .section-faq {
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
    @include aprop("padding-bottom", 300px, 200px, 200px, 140px);
  }

  .section-cases-slider {
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
    @include aprop("padding-bottom", 300px, 200px, 200px, 140px);
  }

  .section-stages {
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
  }

  .ticker {
    // background-color: $black;
    // color: $white;
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
  }
}
</style>