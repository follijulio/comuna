import React from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <nav className="flex items-center justify-center mt-6 space-x-3">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center p-2 border border-gray-300 text-gray-600 rounded hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaCaretLeft size={20} />
      </button>
      <span className="text-sm text-gray-600">
        {currentPage} de {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center p-2 border border-gray-300 text-gray-600 rounded hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaCaretRight size={20} />
      </button>
    </nav>
  );
};
