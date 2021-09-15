import React from "react";
import Search from "./Search";
import LocationSearch from "./LocationSearch"

function Header({setSearch, setLocationSearch}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearch={setSearch} />
      <LocationSearch setLocationSearch={setLocationSearch} />
    </header>
  );
}

export default Header;
