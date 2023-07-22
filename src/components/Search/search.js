import React, { useState } from "react";
import './search.css';



function SearchQuery(props) {
  const [query1, setQuery1] = useState();
  function search() {
    props.search(query1);
  }
  return (
    <React.Fragment>
      <p onClick={search}>Click</p>
      <input
        className="inputStyle"
        type="text"
        onChange={(e) => setQuery1(e.target.value)}
        placeholder="Search for images here..."
      />
    </React.Fragment>
  );
}

export default SearchQuery;
