<template>
  <div class="principles-item principles-item-first" v-if="order == 1">
    <span class="principles-item-first__subtitle ts">
      / Принципы
    </span>
    <div class="principles-item-first__numbers principles-number">
      <svg width="211" height="141" viewBox="0 0 211 141" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M48.2545 121C39.1085 121 30.9786 118.621 23.8651 113.862C16.7515 108.991 11.1623 102.08 7.09735 93.1292C3.03245 84.0655 1 73.1891 1 60.5C1 47.8109 3.03245 36.9911 7.09735 28.0407C11.1623 18.9771 16.7515 12.066 23.8651 7.30758C30.9786 2.43586 39.1085 0 48.2545 0C57.4005 0 65.5303 2.43586 72.6439 7.30758C79.7575 12.066 85.3467 18.9771 89.4116 28.0407C93.5894 36.9911 95.6783 47.8109 95.6783 60.5C95.6783 73.1891 93.5894 84.0655 89.4116 93.1292C85.3467 102.08 79.7575 108.991 72.6439 113.862C65.5303 118.621 57.4005 121 48.2545 121ZM48.2545 109.784C55.2551 109.784 61.3525 107.914 66.5465 104.176C71.7406 100.324 75.8055 94.772 78.7412 87.5211C81.677 80.1568 83.1449 71.1498 83.1449 60.5C83.1449 49.8502 81.677 40.8998 78.7412 33.6489C75.8055 26.2846 71.7406 20.7331 66.5465 16.9944C61.3525 13.1423 55.2551 11.2163 48.2545 11.2163C41.4796 11.2163 35.4388 13.1423 30.1318 16.9944C24.8248 20.7331 20.7035 26.2846 17.7677 33.6489C14.832 40.8998 13.3641 49.8502 13.3641 60.5C13.3641 71.1498 14.832 80.1568 17.7677 87.5211C20.7035 94.772 24.8248 100.324 30.1318 104.176C35.4388 107.914 41.4796 109.784 48.2545 109.784Z" fill="#A9A9A9"/>
        <path d="M133.805 119.98V6.11798L139.225 11.8961H105.859V1.01966H146V119.98H133.805Z" fill="#A9A9A9"/>
        <path d="M163.75 141L180.25 93.8999H183.5L167 141H163.75Z" fill="#5A5A5A"/>
        <path d="M180.33 126.8V124.2L198.88 101H202.88L184.48 124.2L182.53 123.6H210.68V126.8H180.33ZM200.08 136V126.8L200.18 123.6V115.5H203.68V136H200.08Z" fill="#5A5A5A"/>
      </svg>
    </div>
    <div class="principles-item-first__img big-img">
      <NuxtImg src="/img_right.png" format="webp" height="596"/>
    </div>
    <div class="principles-item-first__img-small img-small">
      <NuxtImg format="webp" src="/hands.png" />
    </div>
    <p class="principles-item-first__description-small text-med">Работаем в тандеме с клиентом. Советуем, рекомендуем только лучшее</p>
    <p class="principles-item-first__description text-med">
      Персональный и понятный менеджмент на русском языке
    </p>
  </div>
  <div class="principles-item principles-item-second" v-if="order == 2">
    <span class="principles-item-second__subtitle ts">
      / Принципы
    </span>
    <div class="principles-item-second__img big-img">
      <NuxtImg src="/img_right2.png" format="webp" height="596"/>
    </div>
    <div class="principles-item-second__numbers principles-number">
      <svg width="259" height="144" viewBox="0 0 259 144" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_403_669)">
        <path d="M211.75 144L228.25 96.8999H231.5L215 144H211.75Z" fill="#5A5A5A"/>
        <path d="M228.33 129.8V127.2L246.88 104H250.88L232.48 127.2L230.53 126.6H258.68V129.8H228.33ZM248.08 139V129.8L248.18 126.6V118.5H251.68V139H248.08Z" fill="#5A5A5A"/>
        <path d="M47.2297 121C38.0885 121 29.9629 118.621 22.8531 113.862C15.7432 108.991 10.1569 102.08 6.09415 93.1292C2.03138 84.0655 0 73.1891 0 60.5C0 47.8109 2.03138 36.9911 6.09415 28.0407C10.1569 18.9771 15.7432 12.066 22.8531 7.30758C29.9629 2.43586 38.0885 0 47.2297 0C56.3709 0 64.4964 2.43586 71.6063 7.30758C78.7161 12.066 84.3024 18.9771 88.3652 28.0407C92.5408 36.9911 94.6286 47.8109 94.6286 60.5C94.6286 73.1891 92.5408 84.0655 88.3652 93.1292C84.3024 102.08 78.7161 108.991 71.6063 113.862C64.4964 118.621 56.3709 121 47.2297 121ZM47.2297 109.784C54.2267 109.784 60.3208 107.914 65.5121 104.176C70.7035 100.324 74.7662 94.772 77.7004 87.5211C80.6347 80.1568 82.1018 71.1498 82.1018 60.5C82.1018 49.8502 80.6347 40.8998 77.7004 33.6489C74.7662 26.2846 70.7035 20.7331 65.5121 16.9944C60.3208 13.1423 54.2267 11.2163 47.2297 11.2163C40.4584 11.2163 34.4207 13.1423 29.1165 16.9944C23.8123 20.7331 19.6931 26.2846 16.7589 33.6489C13.8247 40.8998 12.3576 49.8502 12.3576 60.5C12.3576 71.1498 13.8247 80.1568 16.7589 87.5211C19.6931 94.772 23.8123 100.324 29.1165 104.176C34.4207 107.914 40.4584 109.784 47.2297 109.784Z" fill="#A9A9A9"/>
        <path d="M109.883 119.98V111.313L159.144 62.8792C163.658 58.4607 167.043 54.6086 169.301 51.323C171.558 47.9242 173.081 44.7519 173.871 41.8062C174.661 38.8605 175.056 36.0847 175.056 33.4789C175.056 26.5679 172.686 21.1297 167.946 17.1643C163.319 13.199 156.435 11.2163 147.294 11.2163C140.297 11.2163 134.09 12.2926 128.673 14.4452C123.369 16.5978 118.798 19.9401 114.961 24.4719L106.328 16.9944C110.955 11.5562 116.88 7.36423 124.102 4.41854C131.325 1.47285 139.394 0 148.31 0C156.322 0 163.263 1.3029 169.131 3.90871C175 6.40122 179.514 10.0833 182.674 14.9551C185.947 19.8268 187.583 25.5482 187.583 32.1194C187.583 35.9714 187.019 39.7669 185.89 43.5056C184.874 47.2444 182.956 51.2097 180.135 55.4017C177.426 59.4803 173.42 64.1255 168.116 69.3371L122.917 113.862L119.532 109.104H193V119.98H109.883Z" fill="#A9A9A9"/>
        </g>
        <defs>
        <clipPath id="clip0_403_669">
        <rect width="259" height="144" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </div>
    <p class="principles-item-second__description text-med">
      Внимательно относимся к соблюдению юридических и финансовых аспектов
    </p>
    <p class="principles-item-second__description-small text-med">Фиксированные стоимость и сроки обслуживания, без дополнительных затрат</p>
    <div class="principles-item-second__img-small img-small">
      <NuxtImg format="webp" src="/dude1.png" />
    </div>
  </div>
  <div class="principles-item principles-item-third" v-if="order == 3">
    <span class="principles-item-third__subtitle ts">
      / Принципы
    </span>
    <p class="principles-item-third__description-small text-med">Добросовестно подходим к работе. Прямо говорим обо всех нюансах работы и ожидаем того же от наших клиентов </p>
    <div class="principles-item-third__img big-img">
      <NuxtImg src="/people4.png" format="webp" height="596"/>
    </div>
    <div class="principles-item-third__numbers principles-number">
      <svg width="256" height="144" viewBox="0 0 256 144" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_403_682)">
        <path d="M47.43 121.04C38.25 121.04 30.09 118.66 22.95 113.9C15.81 109.027 10.2 102.113 6.12 93.16C2.04 84.0933 0 73.2133 0 60.52C0 47.8267 2.04 37.0033 6.12 28.05C10.2 18.9833 15.81 12.07 22.95 7.31C30.09 2.43667 38.25 0 47.43 0C56.61 0 64.77 2.43667 71.91 7.31C79.05 12.07 84.66 18.9833 88.74 28.05C92.9333 37.0033 95.03 47.8267 95.03 60.52C95.03 73.2133 92.9333 84.0933 88.74 93.16C84.66 102.113 79.05 109.027 71.91 113.9C64.77 118.66 56.61 121.04 47.43 121.04ZM47.43 109.82C54.4567 109.82 60.5767 107.95 65.79 104.21C71.0033 100.357 75.0833 94.8033 78.03 87.55C80.9767 80.1833 82.45 71.1733 82.45 60.52C82.45 49.8667 80.9767 40.9133 78.03 33.66C75.0833 26.2933 71.0033 20.74 65.79 17C60.5767 13.1467 54.4567 11.22 47.43 11.22C40.63 11.22 34.5667 13.1467 29.24 17C23.9133 20.74 19.7767 26.2933 16.83 33.66C13.8833 40.9133 12.41 49.8667 12.41 60.52C12.41 71.1733 13.8833 80.1833 16.83 87.55C19.7767 94.8033 23.9133 100.357 29.24 104.21C34.5667 107.95 40.63 109.82 47.43 109.82Z" fill="#A9A9A9"/>
        <path d="M146.428 121.04C137.815 121.04 129.655 119.68 121.948 116.96C114.355 114.127 108.235 110.387 103.588 105.74L109.538 96.05C113.392 100.017 118.548 103.303 125.008 105.91C131.582 108.517 138.722 109.82 146.428 109.82C156.288 109.82 163.825 107.667 169.038 103.36C174.365 99.0533 177.028 93.2733 177.028 86.02C177.028 78.7667 174.422 72.9867 169.208 68.68C164.108 64.3733 156.005 62.22 144.898 62.22H136.398V53.21L173.118 7.14L174.818 11.9H108.518V1.02H185.018V9.69L148.298 55.76L142.348 51.85H146.938C161.218 51.85 171.872 55.0233 178.898 61.37C186.038 67.7167 189.608 75.8767 189.608 85.85C189.608 92.5367 188.022 98.5433 184.848 103.87C181.675 109.197 176.858 113.39 170.398 116.45C164.052 119.51 156.062 121.04 146.428 121.04Z" fill="#A9A9A9"/>
        <path d="M208.75 144L225.25 96.9004H228.5L212 144H208.75Z" fill="#5A5A5A"/>
        <path d="M225.33 129.8V127.2L243.88 104H247.88L229.48 127.2L227.53 126.6H255.68V129.8H225.33ZM245.08 139V129.8L245.18 126.6V118.5H248.68V139H245.08Z" fill="#5A5A5A"/>
        </g>
        <defs>
        <clipPath id="clip0_403_682">
        <rect width="256" height="144" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </div>
    <div class="principles-item-third__img-small img-small">
      <NuxtImg format="webp" src="/people3.png" />
    </div>
    <p class="principles-item-third__description text-med">
      Ценим честность и равенство в деловых отношениях
    </p>
  </div>
  <div class="principles-item principles-item-four" v-if="order == 4">
    <span class="principles-item-four__subtitle ts">
      / Принципы
    </span>
    <div class="principles-item-four__img big-img">
      <NuxtImg src="/big-hand.png" format="webp" height="596"/>
    </div>
    <div class="principles-item-four__numbers principles-number">
      <svg width="280" height="144" viewBox="0 0 280 144" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M232.75 144L249.25 96.9004H252.5L236 144H232.75Z" fill="#5A5A5A"/>
        <path d="M249.33 129.8V127.2L267.88 104H271.88L253.48 127.2L251.53 126.6H279.68V129.8H249.33ZM269.08 139V129.8L269.18 126.6V118.5H272.68V139H269.08Z" fill="#5A5A5A"/>
        <path d="M47.43 121.04C38.25 121.04 30.09 118.66 22.95 113.9C15.81 109.027 10.2 102.113 6.12 93.16C2.04 84.0933 0 73.2133 0 60.52C0 47.8267 2.04 37.0033 6.12 28.05C10.2 18.9833 15.81 12.07 22.95 7.31C30.09 2.43667 38.25 0 47.43 0C56.61 0 64.77 2.43667 71.91 7.31C79.05 12.07 84.66 18.9833 88.74 28.05C92.9333 37.0033 95.03 47.8267 95.03 60.52C95.03 73.2133 92.9333 84.0933 88.74 93.16C84.66 102.113 79.05 109.027 71.91 113.9C64.77 118.66 56.61 121.04 47.43 121.04ZM47.43 109.82C54.4567 109.82 60.5767 107.95 65.79 104.21C71.0033 100.357 75.0833 94.8033 78.03 87.55C80.9767 80.1833 82.45 71.1733 82.45 60.52C82.45 49.8667 80.9767 40.9133 78.03 33.66C75.0833 26.2933 71.0033 20.74 65.79 17C60.5767 13.1467 54.4567 11.22 47.43 11.22C40.63 11.22 34.5667 13.1467 29.24 17C23.9133 20.74 19.7767 26.2933 16.83 33.66C13.8833 40.9133 12.41 49.8667 12.41 60.52C12.41 71.1733 13.8833 80.1833 16.83 87.55C19.7767 94.8033 23.9133 100.357 29.24 104.21C34.5667 107.95 40.63 109.82 47.43 109.82Z" fill="#A9A9A9"/>
        <path d="M110.519 88.74V79.9L173.589 1.02H187.189L124.629 79.9L117.999 77.86H213.709V88.74H110.519ZM177.669 120.02V88.74L178.009 77.86V50.32H189.909V120.02H177.669Z" fill="#A9A9A9"/>
      </svg>
    </div>
    <p class="principles-item-four__description text-med">
      К каждому заказу относимся как к собственному продукту и со всей заботой подходим к исполнению и ведению проектов
    </p>
    <p class="principles-item-four__description-small text-med">Информируем обо всех этапах работы, предостерегаем от возможных ошибок</p>
    <div class="principles-item-four__img-small img-small">
      <NuxtImg format="webp" src="/people5.png" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  const { order } = defineProps({
    order: Number
  })
</script>

<style lang="scss" scoped>
  img {
    transition: 0.3s;
  }

  .principles-item-first {
    display: grid;
    width: 100%;
    height: fit-content;

    grid-template-columns: repeat(12, 1fr);
    column-gap: $gutter;

    @include mobile{
      grid-template-columns: repeat(4, 1fr);
    }

    &__subtitle {
      grid-column: 2 span;
      color: $gray;

      @include tablet{
        grid-column: 3 span;
      }

      @include mobile{
        grid-column: 4 span;
        margin-bottom: 20px;
      }
    }    

    &__numbers {
      grid-column: 4 / span 3;
      display: flex;
      justify-content: center;

      @include laptop{
        svg {
          max-height: 83px;
        }
      }

      @include tablet{
        grid-column: -5 / span 4;
        margin-right: 0;
      }

      @include mobile{
        display: flex;
        flex-direction: column;
        align-self: flex-end;
        grid-column: -3 / 2 span;
        grid-row: 2;
        
        svg {
          max-width: 97px;
          max-height: 67px;
        }
      }
    }

    &__img {
      grid-column: 6 span;
      grid-row: 2 span;

      & img {
        display: block;
        width: 100%;
        object-fit: cover;

        @include laptop{
          max-height: 360px;
        }

        @include tablet{
          max-height: 380px;
          margin-top: 40px;
          margin-bottom: 40px;
        }

        @include mobile{
          max-height: 240px;
        }
        
      }

      @include tablet{
        grid-column: 12 span;
        grid-row: 2 span;
      }

      @include tablet{
        grid-row: 2;
      }

      @include mobile{
        grid-row: 4;
        grid-column: 4 span;
      }
    }

    &__img-small {
      display: flex;
      column-gap: $gutter;
      grid-column: 2 span;
      grid-row: 2 / 2 span;
      height: min-content;
      align-self: flex-end;

      img {
        width: 100%;
      }

      @include laptop{
        grid-column: 4 span;
        grid-row: 3;
        img {
          order: 2;
        }
      }

      @include tablet{
        grid-row: 4;
        grid-column: 6 span;

        img {
          width: 100%;
        }
      }

      @include mobile{
        grid-column: 2 span;
        grid-row: 2;
      }

    }

    &__description {
      grid-column: -5 / 4 span;
      grid-row: 3;
      margin-top: 60px;

      @include laptop{
        grid-column: -6 / 5 span;
        margin-top: 114px;
      }

      @include tablet {
        grid-row: 4;
        grid-column: 6 span;
        margin: 0;
        align-self: flex-end;
        max-width: 212px;
        margin-left: auto;
      }

      @include mobile{
        grid-row: 5;
        margin-top: 40px;
      }
    }

    &__description-small {
      grid-column: 3 / 2 span;
      grid-row: 2;
      align-self: flex-end;

      @include laptop{
        grid-row: 2;
        grid-column: 4 span;
        margin-bottom: 60px;
      }

      @include tablet{
        grid-row: 3;
        grid-column: 11 span;
        margin-bottom: 60px;
      }

      @include mobile{
        grid-row: 3;
        grid-column: 4 span;
        margin-top: 40px;
        margin-bottom: 40px;
      }
    }
  }

  .principles-item-second {
    display: grid;
    width: 100%;
    height: fit-content;

    grid-template-columns: repeat(12, 1fr);
    column-gap: $gutter;

    @include mobile{
      grid-template-columns: repeat(4, 1fr);
    }

    &__subtitle {
      grid-column: 2 span;
      color: $gray;

      @include laptop{
        grid-column: 2 span;
      }
      @include tablet{
        grid-column: 3 span;
      }

      @include mobile{
        grid-column: 2 span;
      }
    }    

    &__numbers {
      display: flex;
      justify-content: flex-end;
      grid-column: 3 span;
      margin-right: $gutter;

      @include laptop{
        grid-column: -5 / 3 span;
        justify-content: flex-start;

        svg {
          max-height: 83px;
        }
      }

      @include tablet{
        grid-column: -5 / 4 span;
        justify-content: flex-end;
        margin-right: 0;
        margin-bottom: 40px;
        svg {
          max-height: 83px;
        }
      }

      @include mobile{
        grid-row: 2;
        grid-column: 2 span;

        svg {
          max-height: 67px;
        }

        align-self: flex-end;
      }
    }

    &__img {

      grid-column: 4 span;
      grid-row: 2 span;

      & img {
        width: 100%;
        object-fit: cover;
        @include laptop{
          max-height: 434px;
        }

        @include tablet{
          max-height: 380px;
        }

        @include mobile{
          max-height: 240px;
        }
      }

      @include laptop{
        grid-column: 5 span;
        grid-row: 3 span;
      }

      @include tablet{
        grid-column: 12 span;
        grid-row: 2;
        margin-bottom: 40px;
      }

      @include mobile{
        grid-column: 4 span;
        grid-row: 4;
      }
    }

    &__img-small {
      position: relative;
      grid-row: 2;
      grid-column: -4 / span 3;
      align-self: flex-end;
      height: inherit;

      & img {
        display: flex;
        width: 100%;
        object-fit: cover;
      }

      @include laptop{
        grid-row: 3 / 2 span;
        grid-column: -5 / span 4;
        align-self: flex-end;
        max-height: 163px;
      }

      @include tablet{
        grid-row: 4;
        grid-column: -6 / 5 span;
      }

      @include mobile{
        grid-row: 2;
        grid-column: 2 span;
      }
    }

    &__description {
      grid-column: 3 span;
      margin-top: 96px;

      @include laptop{
        grid-row: 2;
        grid-column: -5 / 4 span;
        margin-top: 0;
        align-self: flex-end;
      }
      @include tablet{
        grid-row: 4;
        grid-column: 6 span;
        margin-top: 0;
        align-self: flex-end;
      }

      @include mobile{
        grid-row: 5;
        grid-column: 4 span;
        margin-top: 40px;
      }
    }
    &__description-small {
      grid-row: 2;
      grid-column: 2 span;
      align-self: flex-end;

      @include laptop{
        grid-row: 4;
        grid-column: 7 span;
        margin-top: 40px;
      }

      @include tablet{
        grid-column: 10 span;
        grid-row: 3;
        margin-bottom: 60px;
      }

      @include mobile{
        grid-column: 4 span;
        grid-row: 3;
        margin-top: 40px;
        margin-bottom: 40px;
      }
    }
  }
  .principles-item-third {

    display: grid;
    width: 100%;
    height: fit-content;

    grid-template-columns: repeat(12, 1fr);
    column-gap: $gutter;

    @include mobile{
      grid-template-columns: repeat(4, 1fr);
    }

    &__subtitle {
      grid-column: 2 span;
      color: $gray;

      @include laptop{
        grid-column: 2 span;
      }
      @include tablet{
        grid-column: 3 span;
      }

      @include mobile{
        grid-column: 2 span;
      }
    }    

    &__numbers {
      display: flex;
      justify-content: flex-end;
      grid-column: 3 span;
      
      @include laptop{
        grid-column: -4 / 3 span;
        justify-content: flex-start;

        svg {
          max-height: 83px;
        }
      }

      @include tablet{
        grid-column: -5 / 4 span;
        justify-content: flex-end;
        margin-bottom: 40px;

        svg {
          max-height: 83px;
        }
      }

      @include mobile{
        grid-row: 2;
        grid-column: 2 span;

        svg {
          max-height: 67px;
        }

        align-self: flex-end;
      }
    }

    &__img {

      grid-column: 5 span;
      grid-row: 2 span;

      & img {
        width: 100%;
        object-fit: cover;

        @include laptop{
          max-height: 410px;
        }

        @include tablet{
          max-height: 380px;
        }

        @include mobile{
          max-height: 240px;
        }
      }

      @include laptop{
        grid-row: 3 span;
        grid-column: 5 / 5 span;
      }

      @include tablet{
        grid-column: 12 span;
        grid-row: 2;
        margin-bottom: 40px;
      }

      @include mobile{
        grid-column: 4 span;
        grid-row: 4;
      }
    }

    &__img-small {
      grid-column: 2 span;
      grid-row: 2;
      align-self: flex-end;

      & img {
        display: flex;
        width: 100%;
        object-fit: cover;

        @include laptop{
          max-height: 172px;
        }

        @include tablet{
          max-height: 159px;
        }
      }

      @include laptop{
        grid-row: 3 / span 2;
        grid-column: 3 span;
      }

      @include tablet{
        grid-column: 5 span;
        grid-row: 4 ;
      }

      @include mobile{
        grid-row: 2;
        grid-column: 2 span;
      }
    }

    &__description {
      display: flex;
      align-self: flex-end;
      grid-column: -3 / 2 span;
      grid-row: 2;

      @include laptop{
        grid-row: 4;
        grid-column: 5 / 8 span;
        margin-top: 64px;

      }
      @include tablet{
        grid-row: 3;
        grid-column: 12 span;
        margin-bottom: 60px;
      }

      @include mobile{
        grid-row: 5;
        grid-column: 4 span;
        margin-top: 40px;
      }
    }
    &__description-small {
      display: flex;
      grid-column: 2 span;

      @include laptop{
        grid-row: 2;
        grid-column: 3 span;
      }

      @include tablet{
        grid-row: 4;
        grid-column: 6 span;
        align-self: flex-end;
        order: 2;
      }

      @include mobile{
        grid-column: 4 span;
        grid-row: 3;
        margin-top: 40px;
        margin-bottom: 40px;
        align-self: flex-end;
      }
    }
  }
  .principles-item-four {
    display: grid;
    width: 100%;
    height: fit-content;

    grid-template-columns: repeat(12, 1fr);
    column-gap: $gutter;

    @include mobile{
      grid-template-columns: repeat(4, 1fr);
    }

    &__subtitle {
      grid-column: 2 span;
      color: $gray;

      @include laptop{
        grid-column: 2 span;
      }
      @include tablet{
        grid-column: 3 span;
      }

      @include mobile{
        grid-column: 2 span;
      }
    }    

    &__numbers {
      display: flex;
      justify-content: flex-end;
      grid-column: 3 span;
      margin-right: $gutter;

      @include laptop{
        grid-column: -5 / 3 span;
        justify-content: flex-start;

        svg {
          max-height: 83px;
        }
      }

      @include tablet{
        grid-column: -5 / 4 span;
        justify-content: flex-end;
        margin-right: 0;
        margin-bottom: 40px;
        svg {
          max-height: 83px;
        }
      }

      @include mobile{
        grid-row: 2;
        grid-column: 2 span;

        svg {
          max-height: 67px;
        }

        align-self: flex-end;
      }
    }

    &__img {

      grid-column: 4 span;
      grid-row: 2 span;

      & img {
        width: 100%;
        object-fit: cover;
        @include laptop{
          max-height: 434px;
        }

        @include tablet{
          max-height: 380px;
        }

        @include mobile{
          max-height: 240px;
        }
      }

      @include laptop{
        grid-column: 5 span;
        grid-row: 3 span;
      }

      @include tablet{
        grid-column: 12 span;
        grid-row: 2;
        margin-bottom: 40px;
      }

      @include mobile{
        grid-column: 4 span;
        grid-row: 4;
      }
    }

    &__img-small {
      position: relative;
      grid-row: 2;
      grid-column: -4 / span 3;
      align-self: flex-end;
      height: inherit;

      & img {
        display: flex;
        width: 100%;
        object-fit: cover;

        @include tablet{
          max-height: 159px;
        }
      }

      @include laptop{
        grid-row: 3 / 2 span;
        grid-column: -5 / span 4;
        align-self: flex-end;
        max-height: 163px;
      }

      @include tablet{
        grid-row: 4;
        grid-column: -6 / 5 span;
      }

      @include mobile{
        grid-row: 2;
        grid-column: 2 span;
      }
    }

    &__description {
      grid-column: 3 span;
      margin-top: 96px;

      @include laptop{
        grid-row: 2;
        grid-column: -5 / 4 span;
        margin-top: 0;
        align-self: flex-end;
      }
      @include tablet{
        grid-row: 4;
        grid-column: 6 span;
        margin-top: 0;
        align-self: flex-end;
      }

      @include mobile{
        grid-row: 5;
        grid-column: 4 span;
        margin-top: 40px;
      }
    }
    &__description-small {
      grid-row: 2;
      grid-column: 2 span;
      align-self: flex-end;

      @include laptop{
        grid-row: 4;
        grid-column: 7 span;
        margin-top: 40px;
      }

      @include tablet{
        grid-column: 12 span;
        grid-row: 3;
        margin-bottom: 60px;
      }

      @include mobile{
        grid-column: 4 span;
        grid-row: 3;
        margin-top: 40px;
        margin-bottom: 40px;
      }
    }
  }
</style>