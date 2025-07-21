import { useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";

interface UsePaginationOptions {
    scrollTo?: { desktop: number; mobile: number };
    totalPages?: number;
}

export function useNumberedPagination({
    scrollTo = { desktop: 90, mobile: 450 },
    totalPages = 100
}: UsePaginationOptions) {

    const router = useRouter();
    const searchParams = useSearchParams();

    const currentPageFromUrl = parseInt(searchParams.get("page") || "1", 10);
    const [currentPage, setCurrentPage] = useState(currentPageFromUrl);
    
    // const isFirstLoad = useRef(true);
    //   useEffect(() => {
    //     if (isFirstLoad.current) {
    //       isFirstLoad.current = false;
    //       return;
    //     }


    //   }, [currentPage]);

    useEffect(() => {
        if (currentPageFromUrl !== currentPage) {
            setCurrentPage(currentPageFromUrl);
        }
    }, [currentPageFromUrl]);

    useEffect(() => {
        const urlPageParam = parseInt(searchParams.get("page") || "1", 10);
        if (urlPageParam === currentPage) return;

        const params = new URLSearchParams(searchParams.toString());
        params.set("page", currentPage.toString());

        router.push("?" + params.toString(), { scroll: false });
    }, [currentPage]);

    const goToPage = (page: number) => {
        if (page !== currentPage) {

            setCurrentPage(page);
            const scrollTarget = window.innerWidth < 768 ? scrollTo.mobile : scrollTo.desktop;
            window.scrollTo({ top: scrollTarget, behavior: "smooth" });
        }
    };

    return {
        currentPage,
        totalPages,
        goToPage,
    };
}
