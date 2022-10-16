import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar({ setKeyword }) {
  const handlePlanetSearch = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };
  return (
    <div className="sw-search-bar">
      <FontAwesomeIcon className="sw-search-bar-icon" icon={faMagnifyingGlass} />
      <input
        onChange={(e) => handlePlanetSearch(e)}
        type="text"
        placeholder="Search planet..."
      />
    </div>
  );
}
