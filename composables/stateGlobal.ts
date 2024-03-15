import { defineStore } from 'pinia';
import { useMediaQuery } from '@vueuse/core';
export const useStateGlobal = defineStore('stateGlobal', {
    state: () => {
        return {
            isOpenMenu: false,
            isHeaderActive: false,
            isBlack: false,
        };
    },
    actions: {
        toggleMenu() {
            this.isOpenMenu = !this.isOpenMenu
        },
        setMenu(e: any) {
            this.isOpenMenu = e
        },
        setIsBlack(e: any) {
            this.isBlack = e
        },
        setIsHeaderActive(e: any) {
            this.isHeaderActive = e
        },
    }
})

