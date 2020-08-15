import React from "react";

function Search({ handleChange, handleSubmit, searchQuery }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleChange} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default Search;
