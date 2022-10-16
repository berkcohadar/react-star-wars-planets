import React from "react";
import Logo from "./Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
export default function Header({setKeyword}) {
  return (
    <div className="sw-header">
      <div className="sw-header-start">
        <Logo />
      </div>
      <div className="sw-header-center">
        <SearchBar setKeyword={setKeyword} />
      </div>
      <div className="sw-header-extra" />
    </div>
  );
}
