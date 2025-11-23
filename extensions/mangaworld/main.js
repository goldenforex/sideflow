export default {
  id: "sideflow",
  name: "SideFlow",
  version: "1",
  lang: "en",
  baseUrl: "https://sideflow.example.com", // replace with your manga site

  // Return a list of manga
  async getMangaList() {
    // Example placeholder - replace with actual scraping logic
    return [
      { id: "manga1", title: "Example Manga 1", url: this.baseUrl + "/manga1" },
      { id: "manga2", title: "Example Manga 2", url: this.baseUrl + "/manga2" }
    ];
  },

  // Return list of chapters for a manga
  async getChapters(mangaId) {
    // Example placeholder
    return [
      { id: "chapter1", title: "Chapter 1", url: `${this.baseUrl}/${mangaId}/chapter1` },
      { id: "chapter2", title: "Chapter 2", url: `${this.baseUrl}/${mangaId}/chapter2` }
    ];
  },

  // Return image URLs for a chapter
  async getPages(chapterId) {
    // Example placeholder
    return [
      `${this.baseUrl}/images/${chapterId}/1.jpg`,
      `${this.baseUrl}/images/${chapterId}/2.jpg`
    ];
  }
};
