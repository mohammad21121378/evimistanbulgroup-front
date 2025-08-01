// import { useEffect, useState, useRef } from "react";
// import { useSearchParams, useRouter } from "next/navigation";

// interface UsePaginationOptions {
//     scrollTo?: { desktop: number; mobile: number };
//     totalPages?: number;
// }

// export function useNumberedPagination({
//     scrollTo = { desktop: 90, mobile: 450 },
//     totalPages = 100
// }: UsePaginationOptions) {

//     const router = useRouter();
//     const searchParams = useSearchParams();

//     const currentPageFromUrl = parseInt(searchParams.get("page") || "1", 10);
//     const [currentPage, setCurrentPage] = useState(currentPageFromUrl);
    
//     // const isFirstLoad = useRef(true);
//     //   useEffect(() => {
//     //     if (isFirstLoad.current) {
//     //       isFirstLoad.current = false;
//     //       return;
//     //     }


//     //   }, [currentPage]);

//     useEffect(() => {
//         if (currentPageFromUrl !== currentPage) {
//             setCurrentPage(currentPageFromUrl);
//         }
//     }, [currentPageFromUrl]);

//     useEffect(() => {
//         const urlPageParam = parseInt(searchParams.get("page") || "1", 10);
//         if (urlPageParam === currentPage) return;

//         const params = new URLSearchParams(searchParams.toString());
//         params.set("page", currentPage.toString());

//         router.push("?" + params.toString(), { scroll: false });
//     }, [currentPage]);

//     const goToPage = (page: number) => {
//         if (page !== currentPage) {

//             setCurrentPage(page);
//             const scrollTarget = window.innerWidth < 768 ? scrollTo.mobile : scrollTo.desktop;
//             window.scrollTo({ top: scrollTarget, behavior: "smooth" });
//         }
//     };

//     return {
//         currentPage,
//         totalPages,
//         goToPage,
//     };
// }




import { useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";

interface SeoPaginationConfig {
  /**
   * تابع می‌سازه مسیر کامل SEO-friendly برای یک صفحه مشخص.
   * به عنوان مثال: (page) => `/properties-for-sale-in-turkey/beds-1-2/.../p${page}`
   */
  buildPathForPage: (page: number) => string;
  /**
   * اگر صفحه اولیه از بیرون (مثلاً از slug) داری، اینجا بفرستیش.
   */
  initialPage?: number;
}

interface UsePaginationOptions {
  scrollTo?: { desktop: number; mobile: number };
  totalPages?: number;
  seo?: SeoPaginationConfig;
}

export function useNumberedPagination({
  scrollTo = { desktop: 90, mobile: 450 },
  totalPages = 100,
  seo,
}: UsePaginationOptions) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const isFirstRender = useRef(true);
  const isUpdatingRef = useRef(false); // جلوگیری از loop

  // حالت SEO: صفحه اولیه از config میاد، و query param نادیده گرفته می‌شه
  const initialPageFromSeo = seo?.initialPage;
  const pageFromQuery = parseInt(searchParams.get("page") || "1", 10);

  const [currentPage, setCurrentPage] = useState<number>(
    // اولویت با SEO اگر داده شده، وگرنه از query param می‌گیره
    initialPageFromSeo && initialPageFromSeo > 0 ? initialPageFromSeo : pageFromQuery
  );

  // هماهنگ کردن وقتی URL بیرونی (query) تغییر کرد و حالت SEO نیست
  useEffect(() => {
    if (seo) return; // در حالت SEO نباید query param رو بخونه

    if (pageFromQuery !== currentPage) {
      setCurrentPage(pageFromQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageFromQuery]);

  // بروزرسانی URL وقتی currentPage تغییر کرد
  useEffect(() => {
    // جلوگیری از sync اولیه‌ای که از مقدار اولیه میاد
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (isUpdatingRef.current) {
      // این تغییر خودش از sync قبلی بوده، نادیده بگیر
      isUpdatingRef.current = false;
      return;
    }

    if (seo) {
      // حالت SEO: مسیر کامل تولید و replace می‌شه (یا push اگر خواستی)
      const newPath = seo.buildPathForPage(currentPage);
      router.replace(newPath, { scroll: false });
    } else {
      // حالت query param قدیمی
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", currentPage.toString());
      isUpdatingRef.current = true;
      router.push("?" + params.toString(), { scroll: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const goToPage = (page: number) => {
    if (page === currentPage) return;

    setCurrentPage(page);
    const scrollTarget = window.innerWidth < 768 ? scrollTo.mobile : scrollTo.desktop;
    window.scrollTo({ top: scrollTarget, behavior: "smooth" });
  };

  return {
    currentPage,
    totalPages,
    goToPage,
    // expose setter in case caller بخواد مستقیم ست کنه
    setCurrentPage,
  };
}
