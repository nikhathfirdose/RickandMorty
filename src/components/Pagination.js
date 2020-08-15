import React from "react";

function Pagination({ setPageNumber, info, searchQuery }) {
  const totalPages = info.pages;
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div lassName="container">
      <ul className="pagination">
        {/* <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li> */}
        <li
          className="page-item"
          style={{
            display: "flex",
          }}
        >
          {!searchQuery
            ? pageNumbers.map((number) => (
                <a
                  className="page-link"
                  key={number}
                  onClick={() => setPageNumber(number)}
                >
                  {number}
                </a>
              ))
            : ""}
        </li>

        {/* <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li> */}
      </ul>
    </div>
  );
}

export default Pagination;
