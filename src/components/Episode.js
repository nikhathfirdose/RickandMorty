import React from "react";

function Episode({ results }) {
  return (
    <div>
      <h1 className="title">Rick and Morty</h1>
      {results.map((result) => (
        <p className="episode-card" key={result.id}>
          Name: {result.name}
          <br />
          Date:{result.air_date}
          <br />
          Episode:{result.episode}
          <br />
        </p>
      ))}
    </div>
  );
}

export default Episode;
