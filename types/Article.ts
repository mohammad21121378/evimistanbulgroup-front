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
    excerpt?: string;
    resource?: string;
    url: string;
    slug: string;
    title: string;
    media?: {
        alt: string;
        url: string
    }
    author: User;
    created_at: string;
    CatName: string | null;
    timeToRead: number;
    CatSlug: string | null;
    category: CategoryArticle[];
    table_of_content?: TableOfContentItem[];
}