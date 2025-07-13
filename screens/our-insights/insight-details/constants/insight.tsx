export const insight = {
    article: {
      id: 1,
      title: "Yapay Zekanın Geleceği",
      url: "http://localhost:3000/en/our-insights/business/khjvkjv",
      media: {
        url: "/images/insights/1.png",
        alt: "Yapay Zeka",
      },
      category: [{ title: "Teknoloji", url: "/kategori/teknoloji" }],
      author: { name: "Ali", last_name: "Yılmaz", url: "/yazar/ali-yilmaz" },
      created_at: "August 5, 2024",
      reading_time: null,
      subCatName: { title: "Yapay Zeka", url: "/kategori/yapay-zeka" },
      resource: "<ul><li>www.example.com</li></ul>",


      content: `
        <h2>Atomic Design Nedir?</h2>
        <p>Atomic Design, komponent tabanlı düşünceyi modüler ve hiyerarşik bir şekilde ele alan bir yöntemdir. Bu yapı, bileşenleri beş ana katmanda toplar: Atoms, Molecules, Organisms, Templates, ve Pages.</p>

        <h2>Feature-Based Dosya Yapısı</h2>
        <p>Günümüzde büyük frontend projeleri için, geleneksel "by-layer" (components, pages, services) yapısı yerine, "feature-based" yapı önerilir. Bu sayede her özelliğe özel bağımsız birimler elde edilir ve yeniden kullanılabilirlik artar.</p>

        <h2>State Yönetimi ve Yerelleştirme</h2>
        <p>State yönetimi için global çözümler (Redux, Zustand) veya yerel çözümler tercih edilebilir. Ayrıca next-intl veya react-i18next gibi kütüphanelerle çok dilli içerik yönetimi sağlanabilir.</p>

        <h2>Performans Optimizasyonları</h2>
        <p>Next.js ile lazy-loading, dynamic imports, resim optimizasyonu ve SSR/SSG kullanımı sayesinde uygulama performansı artırılabilir. Ayrıca Lighthouse ile denetleme yapılabilir.</p>

        <h2>Test Edilebilirlik</h2>
        <p>Jest ve React Testing Library ile UI bileşenlerinin bağımsız ve güvenilir testleri yazılabilir. Bu sayede refactor işlemleri daha güvenli olur.</p>

        <h2>Sonuç</h2>
        <p>Modern frontend mimarisi; modülerlik, okunabilirlik, performans ve ölçeklenebilirliği birlikte sunar. Doğru yapılar ile geliştirilen projeler sürdürülebilir hale gelir.</p>
`,
    
    table_of_content: [
      { heading: "Atomic Design Nedir?", placeholder: "Atomic Design Nedir?" },
      { heading: "Feature-Based Dosya Yapısı", placeholder: "Dosya Yapısı" },
      { heading: "State Yönetimi ve Yerelleştirme", placeholder: "State & i18n" },
      { heading: "Performans Optimizasyonları", placeholder: "Performans" },
      { heading: "Test Edilebilirlik", placeholder: "Testler" },
      { heading: "Sonuç", placeholder: "Sonuç" },
    ],

    },
    related_articles: [
      {
        id: 2,
        title: "Makine Öğrenmesi Nedir?",
        url: "/makine-ogrenmesi",
      },
      {
        id: 3,
        title: "Veri Bilimi ve AI",
        url: "/veri-bilimi-ai",
      },
    ],
  };