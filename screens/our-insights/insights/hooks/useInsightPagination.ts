import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {Article} from "../../../../types/Article";
import {useLocale} from "next-intl";
import { fetchRecentArticles } from "@/helpers/api/recent-articles";
import { fetchCategoryDetail } from "@/helpers/api/category-detail";

interface UsePaginationOptions<T> {
    limit: number;
    total_page: number;
    category: string | undefined;
    initialData: Article[];
    scrollTo?: {desktop: number; mobile: number;}
}

export function useInsightPagination<T>({
    limit,
    initialData,
    total_page,
    category,
    scrollTo={desktop: 90, mobile:450}
}: UsePaginationOptions<T>) {

    const router = useRouter();
    const searchParams = useSearchParams();
    const locale = useLocale();
    const currentPageFromUrl = parseInt(searchParams.get("page") || "1", 10);
    const [currentPage, setCurrentPage] = useState(currentPageFromUrl);
    const [articles, setArticles] = useState(initialData);
    const [loadedPage, setLoadedPage] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoadedPage(true)
        }, 100)
    }, []);

    useEffect(() => {
        setCurrentPage(currentPageFromUrl);
    }, [currentPageFromUrl]);

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", currentPage.toString());

        router.push("?" + params.toString(), { scroll: false });



        requestAnimationFrame(() => {
            if (loadedPage) {
                const scrollTarget = window.innerWidth < 768 ? scrollTo.mobile : scrollTo.desktop;
                window.scrollTo({
                    top: scrollTarget,
                    behavior: "smooth",
                });
            }
        });

    }, [currentPage]);

    const totalPages = total_page || Math.ceil(articles.length / limit);

   /* const paginatedItems = articles.slice(
        (currentPage - 1) * limit,
        currentPage * limit
    );*/

    const paginatedItems = articles;

    const goToPage = async (page: number) => {
        setCurrentPage(page);
        if(category){
            const { data: categoryData } = await fetchCategoryDetail(category,limit,page, locale);

            if(categoryData.articles) setArticles(categoryData.articles);
        } else{
            const articlesData = await fetchRecentArticles(limit,page, locale);
            if(articlesData.articles) setArticles(articlesData.articles);
        }


        const baseTitle = document.title.split(' - ')[0];

        if (page > 1) {
            document.title = `${baseTitle} - ${page}`;
        } else {
            document.title = baseTitle;
        }
    };

    useEffect(() => {
        goToPage(1);
    }, [category]);

    return {
        currentPage,
        totalPages,
        items: paginatedItems,
        goToPage,
    };
}
