import classNames from "classnames";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {

  const getPages = () => {
    
    const pages: number[] = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex justify-center mt-6 gap-2 flex-wrap">
      {getPages().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={classNames(
            "size-11 border rounded-lg text-base font-semibold transition-all duration-500",
            page === currentPage ? "bg-black text-white" : "bg-slate-100 text-black hover:bg-black hover:text-white"
          )}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
