<template>
  <div class="services">
    <div class="services__wrapper wrapper">
      <div class="services__container container">
          <span class="services__subtitle ts" v-if="isSubtitle">/ Услуги </span>
          <h2 class="services__title t2" v-if="isTitle" :class="{mbn: isDescription, row1: isDescription}">
            Типы сайтов которые мы разрабатываем
          </h2>
            <p class="services__description text-med tm-mob" v-if="isDescription">
              <slot name="ServicesDescription"></slot>
            </p>
          <ul class="services__list" :class="{row3: isTitle}">
            <slot name="ServicesList"></slot>  
          </ul>
      </div>
    </div>
    <BlocksTicker class="services__ticker" :words="words" />
  </div>
</template>

<script lang="ts" setup>
  const { isSubtitle , isDescription, isTitle } = defineProps({
    isSubtitle: {
      default: true
    },
    isDescription: {
      default: false
    },
    isTitle: {
      default: true
    }
  });
  const words = reactive(['JAVA script.', 'BRANDING.', 'DEVELOPMENT.', 'UI/UX DESIGN', 'CSS.']);
</script>

<style scoped lang="scss">
  .services {
      transition: 0.3s;
      &__container {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: $gutter;
          @include aprop("padding-top", 300px, 200px, 200px, 140px);
          @include aprop("padding-bottom", 300px, 200px, 200px, 140px);

          @include laptop {

          }
          @include tablet {

          }
          @include mobile {
            grid-template-columns: repeat(4, 1fr);
          }
      }

      &__subtitle {
        grid-row: 1;
        grid-column: 2 span;
        color: $gray;

        @include laptop {
          grid-row: 1;
          margin-bottom: 80px;
        }
        @include tablet {
          grid-row: 1;
          margin-bottom: 60px;
        }
        @include mobile {
          grid-row: 1;
          margin-bottom: 60px;
          grid-template-columns: repeat(4, 1fr);
        }
      }

      &__title {
        grid-column: 7 span;
        @include aprop('margin-bottom', 80px, 60px, 30px, 60px);

        @include laptop {
          grid-row: 1;
          margin-bottom: 80px;
        }
        @include tablet {
          grid-column: 8 span;
          grid-row: 1;
          margin-bottom: 60px;
        }
        @include mobile {
          grid-column: 4 span;
          grid-row: 2;
          margin-bottom: 80px;
          grid-template-columns: repeat(4, 1fr);
        }

        &.mbn {
          margin-bottom: 0;
        }


      }

      &__description {
        grid-column: 5 / 4 span;
        @include aprop('margin-top', 80px, 60px, 31px, 60px);
        @include aprop('margin-bottom', 140px, 60px, 80px, 80px);

        @include laptop{
          grid-column: 5 / 8 span;
        }

        @include tablet{
          grid-column: 3 / 8 span;
        }

        @include mobile{
          grid-column: 4 span;
        }
      }

      &__list {
        grid-column: 5 / 8 span;
        grid-row: 1;
        // @include aprop("row-gap", 120px, 80px, 60px, 60px);
        display: grid;

        @include laptop {
          grid-row: 2;
          grid-column: 12 span;
        }
        @include tablet {
          grid-row: 2;
          grid-column: 3 / 10 span;
        }
        @include mobile {
          grid-row: 2;
          display: flex;
          flex-direction: column;
          grid-column: 4 span;
        }
      }

      &__ticker {
        @include aprop('padding-bottom', 296px, 191px, 200px, 140px)
      }
  }
</style>