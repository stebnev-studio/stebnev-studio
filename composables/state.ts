import { defineStore } from 'pinia';
export const useStateMenu = defineStore('stateMenu', {
    state: () => {
        return {
            state: false
        };
    },
    actions: {
        toggle() {
            this.state = !this.state
        },
        set(e: any) {
            this.state = e
        }
    }
})

