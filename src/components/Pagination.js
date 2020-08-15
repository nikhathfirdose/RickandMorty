import React from "react";

function Pagination({ setPageNumber, info, results }) {
  const totalPages = info.pages;
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {results
        ? pageNumbers.map((number) => (
            <button key={number} onClick={() => setPageNumber(number)}>
              {number}
            </button>
          ))
        : ""}
    </div>
  );
}

export default Pagination;
