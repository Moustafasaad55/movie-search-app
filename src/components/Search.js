import React from "react";

import "./Search.css";

const Search = props => {
  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        placeholder="Search for a movie..."
        className="search-box"
        onChange={props.handleInput}
        onKeyPress={props.search}
      />
    </section>
  );
};

export default Search;
