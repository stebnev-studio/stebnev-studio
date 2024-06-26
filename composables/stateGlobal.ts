import { defineStore } from 'pinia';
export const useStateGlobal = defineStore('stateGlobal', {
    state: () => {
        return {
            isOpenMenu: false,
            isHeaderActive: false,
            isBlack: false,
            formSent: 'no_sent',
            formResponse: "",
            popupDescription: "",
            modalOpen: false,
            cases: reactive([
                {
                  title: "website.com",
                  link: "/",
                  desc: "Work / 2019",
                  img: "/img/case1.jpg"
                },
                {
                  title: "website.com",
                  link: "/",
                  desc: "Work / 2019",
                  img: "/img/case2.png"
                },
                {
                  title: "website.com",
                  link: "/",
                  desc: "Work / 2019",
                  img: "/img/case3.png"
                },
                {
                  title: "website.com",
                  link: "/",
                  desc: "Work / 2019",
                  img: "/img/case4.png"
                },
                {
                  title: "website.com",
                  link: "/",
                  desc: "Work / 2019",
                  img: "/img/case5.png"
                },
                {
                  title: "website.com",
                  link: "/",
                  desc: "Work / 2019",
                  img: "/img/case6.png"
                },
                {
                  title: "website.com",
                  link: "/",
                  desc: "Work / 2019",
                  img: "/img/case7.png"
                },
                {
                  title: "website.com",
                  link: "/",
                  desc: "Work / 2019",
                  img: "/img/case8.png"
                },
            
            ])
        };
    },
    actions: {
        async toggleMenu() {
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

