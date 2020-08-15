import React from "react";

function Pagination({ setPageNumber, info }) {
  const totalPages = info.pages;
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">
      <ul className="pagination">
        <li
          className="page-item"
          style={{
            display: "flex",
          }}
        >
          {totalPages
            ? pageNumbers.map((number) => (
                <button
                  className="page-link"
                  key={number}
                  onClick={() => {
                    setPageNumber(number);
                  }}
                >
                  {number}
                </button>
              ))
            : ""}
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
