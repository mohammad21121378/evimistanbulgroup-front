import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

interface UsePaginationOptions<T> {
    limit: number;
    initialData: T[];
}

export function useNumberedPagination<T>({
    limit,
    initialData,
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
                const scrollTarget = window.innerWidth < 768 ? 450 : 100;
                window.scrollTo({
                    top: scrollTarget,
                    behavior: "smooth",
                });
            }
        });
    }, [currentPage]);

    const totalPages = Math.ceil(initialData.length / limit);

    const paginatedItems = initialData.slice(
        (currentPage - 1) * limit,
        currentPage * limit
    );

    const goToPage = (page: number) => {
        setCurrentPage(page);
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
