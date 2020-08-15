import React from "react";

function Episode({ results }) {
  return (
    <div className="container">
      <div className="row">
        {results ? (
          results.map((result) => (
            <div id="cardItem" className="col-xs-1" key={result.id}>
              <span className="episode-number">{result.episode}</span>
              <span className="episode-name"> - {result.name}</span>
              <section className="episode-date">{result.air_date}</section>
            </div>
          ))
        ) : (
          <p className="no-episode">Sorry! No Such Episode..</p>
        )}
      </div>
    </div>
  );
}

export default Episode;
