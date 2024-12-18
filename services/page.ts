export const PageService =  {
    fetchPage: async (slug: string) => {
        console.log('fetchPage - ', slug);
        return await $fetch(`https://api.stebnev-studio.ru/main/wp-json/wp/v2/pages?slug=${slug}`, {
            method: 'GET',
            cors: 'no-cors',
        });    
    }
}