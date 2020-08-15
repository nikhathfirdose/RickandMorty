import React, { useState, useEffect } from "react";
import Episode from "./components/Episode";
import Pagination from "./components/Pagination";
import Search from "./components/Search";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/episode/");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`https://rickandmortyapi.com/api/episode/?name=${searchQuery}`);
  };

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://rickandmortyapi.com/api/episode/?page=${pageNumber}`)
        .then((resp) => resp.json())
        .then((data) => {
          setInfo(data.info);
          setResults(data.results);
        })
        .catch((err) => console.log(err));
    };
    const searchData = () => {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => setResults(data.results))
        .catch((err) => console.log(err));
    };
    fetchData();
    if (searchQuery) {
      searchData();
    }
  }, [pageNumber, url]);
  const pageNumbers = [1, 2, 3];
  return (
    <div>
      <h1 className="title">Rick and Morty</h1>
      <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchQuery={searchQuery}
      />
      <Episode results={results} />
      <Pagination
        searchQuery={searchQuery}
        setPageNumber={setPageNumber}
        info={info}
      />
    </div>
  );
}

export default App;
