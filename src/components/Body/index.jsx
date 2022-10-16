import React from "react";
import Planets from "../Planets/Planets";

export default function Body({ searchResults }) {
  return (
    <div className="sw-body">
      {searchResults && <Planets searchResults={searchResults} />}
    </div>
  );
}
