import React, { useState, useEffect } from "react";
import Episode from "./components/Episode";
import Pagination from "./components/Pagination";
import Search from "./components/Search";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://rickandmortyapi.com/api/episode/?name=${searchQuery}&page=${pageNumber}`
      )
        .then((resp) => resp.json())
        .then((data) => {
          if (data.info) {
            setInfo(data.info);
          } else {
            setInfo(0);
          }

          setResults(data.results);
        })
        .catch((err) => console.log(err));
    };

    fetchData();
  }, [pageNumber, searchQuery]);

  return (
    <div>
      <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchQuery={searchQuery}
      />
      <Pagination
        searchQuery={searchQuery}
        setPageNumber={setPageNumber}
        info={info}
      />
      <Episode results={results} />
    </div>
  );
}

export default App;
