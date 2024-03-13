<template>
  <VeeForm class="form-feedback" @submit="onSubmit" as="form">
    <label class="form-feedback__label">
      <VeeField 
        class="form-feedback__input text-med" 
        name="name" 
        type="text" 
        rules="required" 
        placeholder="Ваше имя*"
         />
      <ErrorMessage class="label__warning text-med" name="name" as="div" />
    </label>
    <label class="form-feedback__label">
      <VeeField 
        class="form-feedback__input text-med" 
        name="phone"  
        type="text" 
        :rules="{isPhone: true, required: true}" 
        placeholder="Ваш телефон*"
        v-maska
        data-maska="+7 (###) ###-##-##"
      />
      <ErrorMessage class="label__warning text-med" name="phone" as="div" />
    </label>
    <label class="form-feedback__label" for="text">
      <VeeField 
        as="textarea" 
        class="form-feedback__input text-med" 
        name="text" 
        rows="1"
        placeholder="Сообщение"
      ></VeeField>
      <ErrorMessage class="label__warning text-med" name="text" as="div" />
    </label>
    <ElementsSubmit class="form-feedback__submit" />
  </VeeForm>

</template>

<script lang="ts" setup>
  import { ErrorMessage } from 'vee-validate';
  function onSubmit(values: any) {
    console.log(values);
  }
</script>

<style lang="scss" scoped>
.form-feedback {
  display: flex;
  flex-direction: column;

  &__label:not(:first-child) {
    @include aprop('margin-top', 60px, 40px, 40px, 40px);
  }

  &__label:has(.label__warning) &__input{
    color: $red;
    border-color: $red
  }

  &__label:has(.label__warning) &__input::placeholder {
    color: $red
  }

  &__input {
    width: 100%;
  }

  &__submit {
    @include aprop('margin-top', 80px, 60px, 60px, 60px);
    align-self: flex-end;
  }

  .label__warning {
    color: $red;
    @include aprop('margin-top', 16px, 16px, 16px, 12px);
  }
}

</style>