import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { useStateGlobal } from '~/composables/stateGlobal';



export default defineNuxtPlugin({
    hooks: {
        'app:mounted'() {
            const state = useStateGlobal();
            state.setIsBlack(false);
            nextTick(() => {
                ScrollTrigger.refresh()
            })
        },
        'page:loading:end'() {

            const state = useStateGlobal();
            const { $gsap } = useNuxtApp();

            nextTick(() => {
    
                    if(document.querySelector('.offer')) {
                        $gsap.timeline({
                            scrollTrigger: {
                                trigger: '.offer',
                                start: "top bottom",
                                end: "bottom bottom",
    
                                onEnterBack() {
                                    state.setIsBlack(false);
                                    state.setIsHeaderActive(true);
                                    console.log('enterBack');
                                },
                                onLeave() {
                                    state.setIsBlack(true);
                                    
                                    state.setIsHeaderActive(false);
                                    console.log('Leave');
    
                                }
                            }
                        })
                    }
                    if(document.querySelector('.cases-offer')) {
                        $gsap.timeline({
                            scrollTrigger: {
                                trigger: '.cases-offer',
                                start: "top center",
                                end: "bottom center",
                                onEnterBack() {
                                    state.setIsHeaderActive(true);
                                    state.setIsBlack(false);
                                    console.log('enterBack');
                                },
                                onLeave() {
                                    state.setIsHeaderActive(false);
                                    state.setIsBlack(true);
                                    console.log('Leave')
                                }
                            }
                        })
                    }
                    if(document.querySelector('.portfolio')) {
                        $gsap.timeline({
                            scrollTrigger: {
                                trigger: '.portfolio',
                                start: "top center",
                                end: "bottom center",
                                onEnter() {
                                    state.setIsBlack(false);
                                    console.log('Enter');
                                },
                                onEnterBack() {
                                    state.setIsBlack(false);
                                    console.log('enterBack');
                                }
                                ,
                                onLeaveBack() {
                                    state.setIsBlack(true);
                                    console.log('LeaveBack')
                                },
                                onLeave() {
                                    state.setIsBlack(true);
                                    console.log('Leave')
                                }
                            }
                        })
                    }
                    if(document.querySelector('.cases')) {
                        $gsap.timeline({
                            scrollTrigger: {
                                trigger: '.cases',
                                start: "top center",
                                end: "bottom center",
                                onEnter() {
                                    state.setIsBlack(false);
                                    console.log('Enter');
                                },
                                onEnterBack() {
                                    state.setIsBlack(false);
                                    console.log('enterBack');
                                }
                                ,
                                onLeaveBack() {
                                    state.setIsBlack(true);
                                    console.log('LeaveBack')
                                },
                                onLeave() {
                                    state.setIsBlack(true);
                                    console.log('Leave')
                                }
                            }
                        })
                    }
                    if(document.querySelector('.brief')) {
                        $gsap.timeline({
                            scrollTrigger: {
                                trigger: '.brief',
                                start: "top center",
                                end: "bottom center",
                                onEnter() {
                                    state.setIsHeaderActive(true);
                                    state.setIsBlack(true);
                                    console.log('Enter');
                                },
                                onLeave() {
                                    state.setIsBlack(true);
                                    state.setIsHeaderActive(true);
                                },
                                onLeaveBack() {
                                    state.setIsHeaderActive(false);
                                    const route = useRoute();
                                    const path = route.path;
                                    if(path == '/contact') {
                                        state.setIsHeaderActive(true);
                                    } else {
                                        state.setIsHeaderActive(false);
                                    }
                                }
                            }
                        })
                    }
                
            })
        }
    }
})

