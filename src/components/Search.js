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
            placeholder="Search by Episode Name.."
          />
          <button type="submit">
            <span class="fa fa-search">🔍</span>
          </button>
        </form>
      </div>
      <div className="cover-page">Image</div>
    </div>
  );
}

export default Search;
