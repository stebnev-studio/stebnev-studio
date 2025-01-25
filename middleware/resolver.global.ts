export default defineNuxtRouteMiddleware(async (to, from) => {
    const { $ScrollTrigger, $lenis } = useNuxtApp();
    if (process.client) {
      $ScrollTrigger.refresh();
      $lenis.scrollTo(0);
    }

});