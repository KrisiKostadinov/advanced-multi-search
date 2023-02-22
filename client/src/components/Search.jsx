import React from "react";

const Search = ({ setQuery }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => setQuery(event.target.value)}
      />
    </>
  );
};

export default Search;
