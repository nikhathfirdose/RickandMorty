import React from "react";

function Search({ handleChange, handleSubmit, searchQuery }) {
  return (
    <div>
      <div className="header-container">
        <h1 className="title">Rick and Morty</h1>
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            type="text"
            size="40"
            value={searchQuery}
            onChange={handleChange}
            placeholder="Enter Episode Name.."
          />
          <button type="submit">
            <span
              role="img"
              aria-label="magnifying-glass"
              className="fa fa-search"
            >
              🔍
            </span>
          </button>
        </form>
      </div>
      <div className="cover-page"></div>
    </div>
  );
}

export default Search;
