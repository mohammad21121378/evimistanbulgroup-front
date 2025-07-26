import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

interface UsePaginationOptions<T> {
    limit: number;
    total_page: number;
    initialData: T[];
    scrollTo?: {desktop: number; mobile: number;}
}

export function useNumberedPaginationFakeData<T>({
    limit,
    initialData,
    total_page,
    scrollTo={desktop: 90, mobile:450}
}: UsePaginationOptions<T>) {

    const router = useRouter();
    const searchParams = useSearchParams();

    const currentPageFromUrl = parseInt(searchParams.get("page") || "1", 10);
    const [currentPage, setCurrentPage] = useState(currentPageFromUrl);
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

    const totalPages = total_page || Math.ceil(initialData.length / limit);

    const paginatedItems = initialData.slice(
        (currentPage - 1) * limit,
        currentPage * limit
    );

    const goToPage = (page: number) => {
        setCurrentPage(page);

        const baseTitle = document.title.split(' - ')[0];

        if (page > 1) {
            document.title = `${baseTitle} - ${page}`;
        } else {
            document.title = baseTitle;
        }
    };

    useEffect(() => {
        goToPage(1);
    }, [initialData]);

    return {
        currentPage,
        totalPages,
        items: paginatedItems,
        goToPage,
    };
}
