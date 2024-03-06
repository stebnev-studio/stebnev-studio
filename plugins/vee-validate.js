import { defineRule } from 'vee-validate';
export default defineNuxtPlugin(() => {

    defineRule('required', value => {
      if (!value || !value.length) {
        return 'Обязательное поле';
      }
      return true;
    });

    defineRule('isPhone', value => {
      if (!value || !value.length) {
        return 'Обязательный телефон';
      } else {
        console.log(value);
        if (!/(?:\+?)[78]+[0-9() -]{16,17}/.test(value)) {
            return 'Неправильный формат телефона';
          }
          return true;
      }
    });
})
