import { PageService, type ACFFields } from '~/services/page';
// Импортируем заготовленные данные
import { fallbackData } from '~/data/fallbacks';

// Хук для хранения отдельных состояний страницы.
export function usePageState(slug: string = 'index') {
  const pageState = useState<ACFFields | null>(`pageState-${slug}`, () => null);
  const pageLoaded = useState<boolean>(`pageLoaded-${slug}`, () => false);
  const pagePending = useState<boolean>(`pagePending-${slug}`, () => false);

  // При необходимости можно добавить состояние для ошибки:
  // const pageError = useState<string | null>(`pageError-${slug}`, () => null);

  return {
    pageState,
    pageLoaded,
    pagePending,
    // pageError,
  };
}

/**
 * Основной хук, который инкапсулирует логику запроса ACF-полей,
 * хранение в state и методы для повторного запроса.
 */
export function usePage(slug: string) {
  const { pageState, pageLoaded, pagePending } = usePageState(slug);

  /**
   * Загружает страницу, если она ещё не была загружена.
   * @returns Данные ACF-страницы или null, если ничего не найдено.
   */
  const fetchPage = async (): Promise<ACFFields | null> => {
    // Если уже загружено — возвращаем из кэша
    if (pageLoaded.value) {
      return pageState.value;
    }

    // Подставим заготовленные данные (fallback), если есть
    if (fallbackData[slug]) {
      pageState.value = fallbackData[slug];
    } else {
      // или пустой объект, если нет в fallbackData
      pageState.value = {};
    }

    pagePending.value = true;
    try {
      // Запрашиваем реальные данные
      const data = await PageService.fetchPage(slug);
      // Перезаписываем, если всё ОК
      pageState.value = data;
      pageLoaded.value = true;
      return data;
    } catch (error) {
      // Если запрос упал, в pageState останутся fallback-данные
      // (можно также здесь сохранять ошибку в pageError)
      console.error(`Ошибка при загрузке ${slug}:`, error);
      throw error;
    } finally {
      pagePending.value = false;
    }
  };

  /**
   * Перезагружает данные, сбрасывая флаг `pageLoaded`.
   */
  const refetchPage = async (): Promise<ACFFields | null> => {
    pageLoaded.value = false;
    return fetchPage();
  };

  /**
   * Реактивное свойство для удобного доступа к текущему состоянию страницы.
   */
  const page = computed(() => pageState.value);

  return {
    pageState,
    pageLoaded,
    pagePending,
    fetchPage,
    refetchPage,
    page,
    // pageError, // если используете
  };
}
