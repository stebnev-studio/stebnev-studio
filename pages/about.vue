<template>
  <main class="main" :class="{bgBlack: isBlack || isMobile }">
      <LazySectionsOffer class="section-offer">
        <template #StebnevStudio></template>
      </LazySectionsOffer>
      <LazySectionsAboutService  class="section-about-service" :info="aboutInfo" :ticker="true" :stebnev="true" />
      <LazySectionsAboutAbout class="section-about-about" />
      <LazySectionsNumbers class="section-about-numbers" :numbers="numbers" :title="numbersTitle" />
      <LazySectionsGoodResults class="section-good-results" />
      <LazySectionsPrinciples class="section-principles" />
      <LazySectionsBrief class="section-brief" />
  </main>
</template>

<script setup>
  import { useStateGlobal } from '~/composables/stateGlobal';
  const state = useStateGlobal();
  let { isBlack } = storeToRefs(state);

  const isMobile = useMediaQuery('(min-width: 340px) and (max-width: 767.5px)');
  // О Услуге
  const aboutInfo = reactive({
    title: 'STEBNEV+STUDIO — это веб студия полного цикла',
    description: 'Наши специалисты обладают большим опытом работы и высокой квалификацией. Мы гарантируем быстрое решение поставленных задач и выполнение работ в полном объёме, поэтому наши клиенты остаются довольны сотрудничеством.'
  })

  // Цифры
  const numbers = reactive([
  {
    number: "500+",
    title: "Успешных кейсов",
    description: "Создание и доработка сайтов, продвижение и реклама в интернете."
  },
  {
    number: "2013",
    title: "Год основания компании",
    description: "Более 10 лет помогаем вашему бизнесу развиваться на просторах сети интернета"
  },
  {
    number: "40+",
    title: "отраслей бизнеса клиентов",
    description: "Более 10 лет помогаем вашему бизнесу развиваться на просторах сети интернета"
  },
  {
    number: "5",
    title: "Иностранных компаний",
    description: "Нам доверяют не только клиенты из России"
  },
  {
    number: "24",
    title: "Города наших клиентов",
    description: "Работаем с клиентами по всей России"
  }
  ])

  const numbersTitle = ref('Эти цифры говорят о нашем <br> опыте');

</script>

<style lang="scss" scoped>
  .main {
    min-height: 100vh;
  }

  .section-about-service {
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
    transition: 0.3s
  }
  .section-about-about {
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
  }
  .section-about-numbers {
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
  }
  .section-good-results {
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
  }
  .section-principles {
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
  }

</style>