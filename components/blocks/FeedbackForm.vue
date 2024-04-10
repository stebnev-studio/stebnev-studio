<template>
  <VeeForm class="form-feedback" @submit="onSubmit" as="form">
    <label class="form-feedback__label">
      <VeeField class="form-feedback__input text-med" name="name" type="text" rules="required"
        placeholder="Ваше имя*" />
      <ErrorMessage class="label__warning text-med" name="name" as="div" />
    </label>
    <label class="form-feedback__label">
      <VeeField class="form-feedback__input text-med" name="phone" type="text"
        :rules="{ isPhone: true, required: true }" placeholder="Ваш телефон*" v-maska data-maska="+7 (###) ###-##-##" />
      <ErrorMessage class="label__warning text-med" name="phone" as="div" />
    </label>
    <label class="form-feedback__label" for="text">
      <VeeField as="textarea" class="form-feedback__input text-med" name="text" rows="1" placeholder="Сообщение">
      </VeeField>
      <ErrorMessage class="label__warning text-med" name="text" as="div" />
    </label>
    <ElementsSubmit class="form-feedback__submit" />
  </VeeForm>

  <BlocksSuccess />
</template>

<script lang="ts" setup>
import { ErrorMessage } from "vee-validate";

import { useStateGlobal } from "~/composables/stateGlobal";
const state = useStateGlobal();
const { modalOpen, formSent, formResponse } = storeToRefs(state);

async function onSubmit(_values: any, { resetForm }) {
  let bodyRequest = new FormData();
  bodyRequest.append("_wpcf7_unit_tag", "294");
  for (let key in _values) {
    bodyRequest.append("custom_" + key, _values[key]);
  }
  try {
    const data = await $fetch("https://api.stebnev-studio.ru/main/wp-json/contact-form-7/v1/contact-forms/294/feedback", {
      method: "POST",
      body: bodyRequest,
    });

    if (data.status == "mail_sent") {
      formSent.value = "success";
      formResponse.value = data.message;
      modalOpen.value = true;
      resetForm();
    } else {
      formSent.value = "failed";
      formResponse.value = data.message;
      modalOpen.value = true;
    }
  } catch (err) {
    console.log(err);
  }
}
</script>

<style lang="scss" scoped>
.form-feedback {
  display: flex;
  flex-direction: column;

  &__label:not(:first-child) {
    @include aprop("margin-top", 60px, 40px, 40px, 40px);
  }

  &__label:has(.label__warning) &__input {
    color: $red;
    border-color: $red;
  }

  &__label:has(.label__warning) &__input::placeholder {
    color: $red;
  }

  &__input {
    width: 100%;
  }

  &__submit {
    @include aprop("margin-top", 80px, 60px, 60px, 60px);
    align-self: flex-end;
  }

  .label__warning {
    color: $red;
    @include aprop("margin-top", 16px, 16px, 16px, 12px);
  }
}
</style>
