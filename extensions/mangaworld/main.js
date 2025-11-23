export default {
  id: "sideflow",
  name: "SideFlow",
  version: "1",
  lang: "en",
  baseUrl: "https://mangadex.org",

  // Return a list of manga (dummy data for the app)
  async getMangaList() {
    return [
      { id: "one-piece", title: "One Piece", url: `${this.baseUrl}/title/5f0e9a9d-93fc-4a57-8b08-45e1e2f876c9` },
      { id: "naruto", title: "Naruto", url: `${this.baseUrl}/title/8f1f7d69-c556-4bb5-8a56-2b3fa1d2bc11` }
    ];
  },

  // Return list of chapters for a manga (dummy structure)
  async getChapters(mangaId) {
    return [
      { id: `${mangaId}-chapter-1`, title: "Chapter 1", url: `${this.baseUrl}/chapter/1/${mangaId}` },
      { id: `${mangaId}-chapter-2`, title: "Chapter 2", url: `${this.baseUrl}/chapter/2/${mangaId}` }
    ];
  },

  // Return image URLs for a chapter (placeholder images)
  async getPages(chapterId) {
    return [
      `https://via.placeholder.com/800x1200?text=${chapterId}+Page+1`,
      `https://via.placeholder.com/800x1200?text=${chapterId}+Page+2`
    ];
  }
};
