import React from "react";
import "./pagination.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  // Calculate visible page numbers (4 at a time)
  let start = Math.max(1, currentPage - 2);
  let end = start + 3;

  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, end - 3);
  }

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        &lt;
      </button>

      {pages.map((num) => (
        <button
          key={num}
          className={currentPage === num ? "active" : ""}
          onClick={() => onPageChange(num)}
        >
          {num}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
