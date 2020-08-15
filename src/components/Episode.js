import React from "react";

function Episode({ results }) {
  return (
    <div className="container">
      <div className="row">
        {results
          ? results.map((result) => (
              <div id="cardItem" className="col-xs-1" key={result.id}>
                <section>Name: {result.name}</section>

                <section>Date:{result.air_date}</section>

                <section>Episode:{result.episode}</section>
              </div>
            ))
          : "No Such Episode"}
      </div>
    </div>
  );
}

export default Episode;
