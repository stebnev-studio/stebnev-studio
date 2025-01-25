export type ACFFields = Record<string, unknown>;
  
export const PageService = {
  async fetchPage(slug: string): Promise<ACFFields> {
    return await $fetch(`https://api.stebnev-studio.ru/main/wp-json/wp/v2/page-acf?slug=${slug}`, {
      method: 'GET',
      // Обычно "no-cors" ограничивает доступ к заголовкам/данным ответа.
      // Если это ваш сервер и там корректно настроены CORS, можно убрать cors: 'no-cors'.
      cors: 'no-cors',
    });
  },
};