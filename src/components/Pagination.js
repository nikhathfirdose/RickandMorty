import React from "react";

function Pagination({ setPageNumber, info }) {
  //   const totalPages = info.pages;
  const pageNumbers = [];
  for (let i = 1; i <= 3; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {pageNumbers.map((number) => (
        <button key={number} onClick={() => setPageNumber(number)}>
          {" "}
          {number}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
