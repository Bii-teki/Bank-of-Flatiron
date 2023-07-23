import React from "react";
// import Sort from "../Sort/Sort";
import './Search.css';


function Search({handleSearch}) {
  return (
    <div className="searcher">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
        className="search"
      />
     {/* <Sort /> */}

    </div>
  );
}

export default Search;