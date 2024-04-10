export const useFetchPages = (slug: string) => {
  const { data, error, pending } = useFetch(`https://api.stebnev-studio.ru/main/wp-json/wp/v2/pages?slug=${slug}`, {
    transform(data: any) {
      return data;
    },
    server: true,
  });

  // Проверяем, что данные не undefined и запрос не в состоянии ожидания
  const safeData = computed(() => {
    if (!pending.value && data.value !== undefined) {
      return data.value;
    }
    return null; // или можно вернуть пустой объект/массив, в зависимости от ожидаемой структуры данных
  });

  return { data: safeData, error, pending };
};
