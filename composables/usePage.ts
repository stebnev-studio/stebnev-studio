import { PageService } from '~/services/page';

export const usepageState = (slug: string = 'index') => ({
  pageState: useState(`pageState-${slug}`, () => {}),
  pageLoaded: useState<boolean>(`pageLoaded-${slug}`, () => false),
  pagePending: useState<boolean>(`pagePending-${slug}`, () => false),
});

export const usePage = (slug: string) => {
  const { pageState, pageLoaded, pagePending } = usepageState(slug);
  
  const fetchPage = async () => {
    if (pageLoaded.value) return pageState.value;

    pagePending.value = true;

    try {
      pageState.value = await PageService.fetchPage(slug);

      pageLoaded.value = true;
    } catch (error) {
      throw error;
    } finally {
      pagePending.value = false;
    }
    
  }

  const refetchPage = async () => {
    pageLoaded.value = false;
    await fetchPage();
  }

  const page = computed(() => pageState.value);

  return {
    pageState,
    pageLoaded,
    pagePending,
    fetchPage,
    refetchPage,
    page
  };
}