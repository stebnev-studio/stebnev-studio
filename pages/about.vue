<template>
  <main class="main">
      <SectionsOffer class="section-offer">
        <template #StebnevStudio></template>
      </SectionsOffer>
      <SectionsAboutService  class="section-about-service" :info="aboutInfo" :ticker="true" :stebnev="true" />
      <SectionsAboutAbout class="section-about-about" />
      <SectionsNumbers class="section-about-numbers" :numbers="numbers" :title="numbersTitle" />
      <SectionsGoodResults class="section-good-results" />
      <SectionsPrinciples class="section-principles" />
  </main>
</template>

<script setup>

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
    background-color: $black;
    min-height: 100vh;
    background-color: white;
  }

  .section-about-service {
    @include aprop("padding-top", 300px, 200px, 200px, 140px);
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