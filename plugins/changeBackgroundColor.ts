import { useStateGlobal } from '~/composables/stateGlobal';


export default defineNuxtPlugin({
    hooks: {
        'app:mounted'() {
            const state = useStateGlobal();

            console.log('HOOKS Mounted');
            state.setIsBlack(false);
        }
    },
});


