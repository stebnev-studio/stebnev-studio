<template>
  <main class="main" :class="{bgBlack: isBlack || isMobile}">
    <LazySectionsOffer to="google.com">
      <template #offerTitle>
        Полная поддержка и сопровождение сайтов
      </template>
      <template #offerDescription>
        Обеспечиваем стабильную работу и своевременное обновление контента
      </template>
      <template #offerButton>
        подробнее
      </template>
    </LazySectionsOffer>
    <LazySectionsAboutService class="section-about-service" :ticker="false" :stebnev="false" :info="aboutInfo" />
    <LazySectionsTariffs class="section-tariffs" />
    <LazyBlocksTicker class="ticker" />
    <LazySectionsNumbers class="section-about-numbers" :numbers="numbers" :title="numbersTitle"/>
    <LazySectionsStages class="section-stages" />
    <LazyBlocksDoubleTicker class="ticker" />
    <LazySectionsFAQ class="section-faq" />
    <LazySectionsBrief class="section-brief" />
  </main>
</template>

<script lang="ts" setup>
  import { useStateGlobal } from '~/composables/stateGlobal';
  const state = useStateGlobal();
  let { isBlack } = storeToRefs(state);

  const isMobile = useMediaQuery('(min-width: 340px) and (max-width: 767.5px)');
  // О Услуге
  const aboutInfo = reactive({
    title: 'Комплекс услуг по техническому сопровождению и обслуживанию сайтов',
    description: 'Сайт требует регулярного обновления, грамотного наполнения и решения текущих задач. Мы обеспечим бесперебойную и стабильную работу вашего ресурса.<br/><br/> При необходимости, наши специалисты разместят новую информацию, обновят прайс, разместят актуальные фото — и видеоматериалы.'
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
  
</script>

<style lang="scss" scoped>
  .main {
      background-color: $black;
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