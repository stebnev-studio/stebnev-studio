<template>
  <div class="success" v-if="modalOpen">
    <div class="success__backface">
      <div
        class="success__content"
        :class="{
          done: formSent == 'success',
          failed: formSent == 'failed'}"
      >
        <div class="success__circle">
          <svg
            width="81"
            height="81"
            viewBox="0 0 81 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            v-if="formSent == 'success'"
          >
            <circle
              cx="40.5"
              cy="40.5"
              r="39.5"
              stroke="white"
              stroke-width="2"
            />
            <path
              d="M28 40.4211L38 52L53 32"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="81"
            height="81"
            viewBox="0 0 81 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            v-else
          >
            <circle
              cx="40.5"
              cy="40.5"
              r="39.5"
              stroke="#FAFAFA"
              stroke-width="2"
            />
            <rect
              width="2.41055"
              height="32.9442"
              rx="1.20528"
              transform="matrix(0.707107 0.707107 -0.707088 0.707126 51.2969 28)"
              fill="#FAFAFA"
            />
            <rect
              width="2.41055"
              height="32.9442"
              rx="1.20528"
              transform="matrix(0.707107 -0.707107 0.707126 0.707088 28 29.7051)"
              fill="#FAFAFA"
            />
          </svg>
        </div>
        <div class="success__status t3">
          {{ formResponse }}
        </div>
        <p class="success__description text-med">
          {{ popupDescription }}
        </p>
        <div class="success__close" @click="modalOpen = !modalOpen">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 8L24 24M24 8L8 24" stroke="white" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useStateGlobal } from "~/composables/stateGlobal";
  const state = useStateGlobal();
  const { modalOpen, formSent, formResponse, popupDescription } = storeToRefs(state);
</script>

<style lang="scss" scoped>
.success {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999999999999;

  display: flex;
  width: 100%;
  min-height: 100vh;
  height: 100vh;

  &__backface {
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding: 100px 60px;
    max-width: 660px;
  }

  &__status {
    max-width: 480px;
  }

  &__description {
    max-width: 506px;
  }

  &__circle svg {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__content.done {
    background-color: $green;
  }
  &__content.failed {
    background-color: $red;
  }

  &__status {
    margin-top: 60px;
    margin-bottom: 30px;
  }

  &__close {
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
    cursor: pointer;
  }
}
</style>
