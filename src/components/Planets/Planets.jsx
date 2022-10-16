import React from "react";
import Planet from "./Planet"

export default function Planets({ searchResults }) {
  return (
    <ul className="sw-planets-area">
      {searchResults.results.map((planet, key) => (
        <Planet planet={planet} key={key} />
      ))}
    </ul>
  );
}
