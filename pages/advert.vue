<template>
  <main class="main" :class="{bgBlack: isBlack || isMobile }">

    <LazySectionsOffer to="google.com">
      <template #offerTitle>
        Реклама, которая
        приводит
        целевых клиентов
      </template>
      <template #offerDescription>
          Используем самые эффективные рекламные инструменты индивидуально для каждого проекта
      </template>
      <template #offerButton>
        подробнее
      </template>
    </LazySectionsOffer>
    <LazySectionsAboutService class="section-about-service" :ticker="false" :stebnev="false" :info="aboutInfo" />
    <LazySectionsTariffs class="section-tariffs" />
    <LazyBlocksTicker class="ticker" />
    <LazySectionsResultsInfo class="section-results-info" />
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
    title: 'Настройка и оптимизация контекстной и таргетированной рекламы',
    description: 'Мы тщательно проанализируем вашу аудиторию и конкурентов, составим рекламные объявления и покажем ваше предложение целевой аудитории. <br><br> Контекстная и таргетированная реклама приводит клиентов сразу после запуска.'
  })

  // Цифры
  const numbers = reactive([
    {
      number: "100K+",
      title: "Рекламодателей",
      description: "Более 100 000 рекламодателей используют Яндекс Директ для размещения контекстной рекламы."
    },
    {
      number: "90%",
      title: "Кликают на рекламу",
      description: "Реклама позволяет достичь конкретной аудитории, которая уже заинтересована в вашем продукте или услуге."
    },
    {
      number: "50%",
      title: "Доля затрат на контекст",
      description: "Расходы на контекстную рекламу в Яндекс Директе составляют около 50% от общих затрат на маркетинг в Рунете."
    },
 
  ]);

  const numbersTitle = ref('Контекстная и таргетированная <br> реклама сегодня — лидер рынка');
  
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