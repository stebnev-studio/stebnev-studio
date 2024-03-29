import { useStateGlobal } from '~/composables/stateGlobal';


export default defineNuxtPlugin({
    hooks: {
        'app:mounted' () {
            useStateGlobal().setIsBlack(false);
        }
    },
});


