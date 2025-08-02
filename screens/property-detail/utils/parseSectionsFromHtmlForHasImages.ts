type Section = {
    title: string;
    images: string[];
  };
  
export  function parseSectionsFromHtmlForHasImages(html: string): Section[] {
    // الگوریتم:
    // 1. متن html رو به بخش‌هایی تقسیم می‌کنیم که با <h3> شروع می‌شوند.
    // 2. برای هر بخش عنوان را می‌گیریم و سپس تمام تصاویر زیر آن بخش را جمع می‌کنیم تا قبل از h3 بعدی یا پایان متن
    
    const sectionRegex = /<h3>(.*?)<\/h3>/g;
    let match;
    const sections: Section[] = [];
    
    // گرفتن ایندکس شروع هر h3 و عنوانش
    const indices: { index: number; title: string }[] = [];
    while ((match = sectionRegex.exec(html)) !== null) {
      indices.push({ index: match.index, title: match[1].trim() });
    }
    
    for (let i = 0; i < indices.length; i++) {
      const start = indices[i].index;
      const end = i + 1 < indices.length ? indices[i + 1].index : html.length;
      const sectionHtml = html.slice(start, end);
      
      // استخراج تصاویر بخش با regex
      const imgRegex = /<img[^>]+src="([^"]+)"/g;
      const images: string[] = [];
      let imgMatch;
      while ((imgMatch = imgRegex.exec(sectionHtml)) !== null) {
        images.push(imgMatch[1]);
      }
      
      sections.push({
        title: indices[i].title,
        images,
      });
    }
    
    return sections;
  }
  