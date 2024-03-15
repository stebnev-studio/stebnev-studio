import LocomotiveScroll from 'locomotive-scroll';

export default defineNuxtPlugin(async (nuxtApp) => {
    const lenis = new LocomotiveScroll({
        lenisOptions: {
            wrapper: window,
            content: document.documentElement,
            lerp: 0.05,
            duration: 1.1,
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            smoothTouch: false,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            normalizeWheel: true,
            easing: (t: any) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        },
    });
    nuxtApp.locomotive = lenis;
    return lenis;
});

