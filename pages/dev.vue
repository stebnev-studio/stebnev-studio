<template>
  <main class="main">
    <SectionsOffer to="google.com">
      <template #offerTitle>
        Разрабатываем 
        удобные <br/>
        и стильные сайты
      </template>
      <template #offerDescription>
        Проектируем, разрабатываем и запускаем. Сайты под ключ!
      </template>
      <template #offerButton>
        подробнее
      </template>
    </SectionsOffer>
    <SectionsAboutService class="section-about-service" :ticker="false" :stebnev="false" :info="aboutInfo" />
    <SectionsServices class="section-services" :isSubtitle="false" :isTitle="true" :isDescription="true">
      <template #ServicesDescription >
        Стоимость каждого проекта рассчитывается индивидуально
      </template>
      <template #ServicesList>
        <BlocksServiceItem />
        <BlocksServiceItem />
        <BlocksServiceItem />
        <BlocksServiceItem />
        <BlocksServiceItem />
        <BlocksServiceItem />
        <BlocksServiceItem />
      </template>
    </SectionsServices>

    <SectionsCasesSlider class="section-cases-slider">

    </SectionsCasesSlider>

    <BlocksDoubleTicker class="ticker" />
    <SectionsNumbers class="section-about-numbers" :numbers="numbers" :title="numbersTitle"/>
    <SectionsStages class="section-stages" />
    <BlocksDoubleTicker class="ticker" />
    <SectionsFAQ class="section-faq" :questions="questions" />
  </main>
</template>

<script lang="ts" setup>

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
  
</script>

<style lang="scss" scoped>
  .main {
      background-color: $black;
      min-height: 100vh;
      background-color: white;

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
        background-color: $black;
        color: $white;
        @include aprop("padding-top", 300px, 200px, 200px, 140px);
      }
  }
</style>