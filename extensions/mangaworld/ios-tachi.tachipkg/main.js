/**
 * Example Tachimanga Web Extension
 * --------------------------------
 * This is a SAFE template that does not access any copyrighted website.
 * Replace the API endpoints with your own data source that you control.
 */

const API_BASE = "https://your-api-endpoint.example"; // Your own API

/**
 * Fetch list of manga / books from your API
 */
async function getMangaList() {
    const res = await fetch(`${API_BASE}/list`);
    const items = await res.json();

    // Tachimanga expects:
    // id, title, thumbnail, url
    return items.map(item => ({
        id: item.id,
        title: item.title,
        thumbnail: item.thumbnail,
        url: `${API_BASE}/manga/${item.id}`
    }));
}

/**
 * Fetch details for a specific title
 */
async function getMangaDetails(id) {
    const res = await fetch(`${API_BASE}/manga/${id}`);
    const d = await res.json();

    return {
        id: d.id,
        title: d.title,
        description: d.description,
        author: d.author,
        thumbnail: d.thumbnail,
        chapters: d.chapters.map(ch => ({
            id: ch.id,
            title: ch.title,
            number: ch.number
        }))
    };
}

/**
 * Fetch pages for a chapter
 */
async function getChapterPages(mangaId, chapterId) {
    const res = await fetch(`${API_BASE}/manga/${mangaId}/chapter/${chapterId}`);
    const d = await res.json();

    // Return an array of image URLs
    return d.pages;
}

export default {
    getMangaList,
    getMangaDetails,
    getChapterPages
};

