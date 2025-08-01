import { PageMeta } from "@/types/Seo";
import { Metadata } from "next";

export function buildMetadataFromPage(page: PageMeta): Metadata {
  return {
    title: page.meta_title,
    description: page.meta_description,
    robots: `${page.meta_follow}, ${page.meta_index}`,
    openGraph: {
      locale: page.language,
      type: page.type,
      title: page.meta_title,
      description: page.meta_description,
      url: page.url,
      siteName: "EvimIstanbul group",
      images: [
        {
          url: page.image,
          width: 512,
          height: 512,
          alt: page.meta_title,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.meta_title,
      description: page.meta_description,
    },
    alternates: {
      canonical: page.url,
    },
  };
}
