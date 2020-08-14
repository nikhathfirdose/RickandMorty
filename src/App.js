import React, { useState, useEffect } from "react";
import Episode from "./components/Episode";
import Pagination from "./components/Pagination";

function App() {
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState({});
  const [pageNumber, setPageNumber] = useState(1);

  const fetchData = () => {
    fetch(`https://rickandmortyapi.com/api/episode/?page=${pageNumber}`)
      .then((resp) => resp.json())
      .then((data) => {
        setInfo(data.info);
        setResults(data.results);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Episode results={results} />
      <Pagination setPageNumber={setPageNumber} info={info} />
    </div>
  );
}

export default App;
