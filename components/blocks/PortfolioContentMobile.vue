<template>
  <Swiper 
    class="portfolio-content portfolio-content-mobile"
    space-between="20">
      <SwiperSlide v-for="(item, idx) in cases">
        <ElementsPortfolioContentItem class="portfolio-content__item" :key="idx" :info="item" />
      </SwiperSlide>
  </Swiper>
</template>

<script lang="ts" setup>
  const cases = reactive([
    {
      title: "website.com",
      link: "LINK WORK1",
      desc: "Work / 2019",
      img: "/img/case1.jpg"
    },
    {
      title: "website.com",
      link: "LINK WORK1",
      desc: "Work / 2019",
      img: "/img/case2.png"
    },
    {
      title: "website.com",
      link: "LINK WORK1",
      desc: "Work / 2019",
      img: "/img/case3.png"
    },
    {
      title: "website.com",
      link: "LINK WORK1",
      desc: "Work / 2019",
      img: "/img/case4.png"
    },
    {
      title: "website.com",
      link: "LINK WORK1",
      desc: "Work / 2019",
      img: "/img/case5.png"
    },
    {
      title: "website.com",
      link: "LINK WORK1",
      desc: "Work / 2019",
      img: "/img/case6.png"
    },
    {
      title: "website.com",
      link: "LINK WORK1",
      desc: "Work / 2019",
      img: "/img/case7.png"
    },
    {
      title: "website.com",
      link: "LINK WORK1",
      desc: "Work / 2019",
      img: "/img/case8.png"
    },

  ]);
</script>

<style lang="scss" scoped>
  .portfolio-content {
    display: flex;
    flex-direction: column;
    grid-column: 12 span;
    overflow-x: visible !important;

    @include tablet {
      row-gap: 80px;
    }

    @include mobile {
      grid-column: 3 span;
    }
  }
</style>