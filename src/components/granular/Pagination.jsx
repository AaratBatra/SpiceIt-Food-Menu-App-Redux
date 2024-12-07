import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

/**
 * @params currentPage, totalPages, onPageChange
 * @returns {JSX.Element}
 */
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;
  
    return (
      <div className="w-full flex items-center gap-2 justify-end p-4 max-md:justify-between">
        <span className="px-4 py-2 text-sm font-semibold text-gray-700 max-md:px-1">
          Showing Page {currentPage} of {totalPages}
        </span>
        <div>
        <button
          onClick={() => onPageChange(1)}
          disabled={isFirstPage}
          className={`px-3 py-2 text-sm font-semibold rounded-l-md border border-orange-500 
            ${isFirstPage ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-orange-500 text-white hover:bg-orange-600'}`}
        >
          First
        </button>
  
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isFirstPage}
          className={`px-3 py-2 text-sm font-semibold border-t border-b border-orange-500 
            ${isFirstPage ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-orange-500 text-white hover:bg-orange-600'}`}
        >
          Prev
        </button>
  
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isLastPage}
          className={`px-3 py-2 text-sm font-semibold border-t border-b border-orange-500 
            ${isLastPage ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-orange-500 text-white hover:bg-orange-600'}`}
        >
          Next
        </button>
  
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={isLastPage}
          className={`px-3 py-2 text-sm font-semibold rounded-r-md border border-orange-500 
            ${isLastPage ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-orange-500 text-white hover:bg-orange-600'}`}
        >
          Last
        </button>
        </div>
      </div>
    );
  };
  
  export default Pagination;