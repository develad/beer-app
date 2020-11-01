import React from "react";

function Beerlistcard({ allbeers }) {
  return (
    <div className='beer-list'>
      <h1 style={{ textAlign: "center", paddingBottom: "10px" }}>
        All Beers History
      </h1>
      <ul>
        {allbeers.map((beer) => {
          return (
            <div key={beer.id}>
              <li>| {beer.name.trim()} &nbsp;</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Beerlistcard;
