import React, { useCallback, useMemo } from "react";
import classNames from "classnames";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = useMemo<(number | string)[]>(() => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }

    if (currentPage >= totalPages - 3) {
      return [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  }, [currentPage, totalPages]);

  const handleChange = useCallback(
    (page: number) => {
      if (page !== currentPage && page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    },
    [currentPage, totalPages, onPageChange]
  );

  const baseBtnClasses =
    "size-10 flex justify-center items-center rounded-lg text-sm font-medium transition-all duration-300";

  const iconBtnClasses =
    "size-10 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-black hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <div className="flex justify-center mt-6 gap-2 flex-wrap items-center">

      {
        totalPages > 4 &&
        <button
          className={iconBtnClasses}
          onClick={() => handleChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous"
        >
          <ChevronLeft className="w-5" />
        </button>
      }

      {pages.map((page, i) => {
        const isActive = page === currentPage;
        const isEllipsis = typeof page === "string";

        return (
          <button
            key={`${page}-${i}`}
            disabled={isEllipsis}
            onClick={() => typeof page === "number" && handleChange(page)}
            className={classNames(baseBtnClasses, {
              "bg-black text-white": isActive,
              "bg-slate-100 text-black hover:bg-black hover:text-white": !isActive && !isEllipsis,
              "cursor-default text-gray-400": isEllipsis,
            })}
          >
            {isEllipsis ? <MoreHorizontal className="w-5" /> : page}
          </button>
        );
      })}

      {
        totalPages > 4 &&
        <button
          className={iconBtnClasses}
          onClick={() => handleChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next"
        >
          <ChevronRight className="w-5" />
        </button>
      }
    </div>
  );
};

export default Pagination;
