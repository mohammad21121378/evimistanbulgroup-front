import { User } from "./User";

interface TableOfContentItem {
    heading: string;
    placeholder: string;
}

export interface CategoryArticle {
    title: string;
    url: string;
}

export interface Article {
    content: string;
    banner_1: string | null;
    banner_2: string | null;
    banner_1_media: {
        alt: string | undefined;
        url: string | undefined
    };
    banner_2_media: {
        alt: string | null;
        url: string | null
    };
    excerpt: string;
    resource?: string;
    url: string;
    slug: string;
    title: string;
    media: {
        alt: string;
        url: string
    }
    author: User;
    created_at: string;
    updated_at: string;
    CatName: string;
    timeToRead: number;
    CatSlug: string;
    category: CategoryArticle[];
    table_of_content?: TableOfContentItem[];
    additional_images?: {src: string; alt: string}[];
    meta_description?: string;
}