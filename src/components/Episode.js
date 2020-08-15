import React from "react";

function Episode({ results }) {
  return (
    <div>
      {results
        ? results.map((result) => (
            <p className="episode-card" key={result.id}>
              Name: {result.name}
              <br />
              Date:{result.air_date}
              <br />
              Episode:{result.episode}
              <br />
            </p>
          ))
        : "No Such Episode"}
    </div>
  );
}

export default Episode;
