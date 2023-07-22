import React, { useState } from "react";
import { LoadImages, SearchImages } from "./components/api";
import Image from "./components/Image/image";
import "./index.css";

function App() {
  const [searchQ, setSearchQ] = useState();
  const [query, setQuery] = useState();

  const data = LoadImages();
  console.log(data);
  const search = () => {
    setSearchQ(query);
  };
  const searchData = SearchImages(searchQ);

  const reset = () => {
    setSearchQ("");
  };
  return (
    <React.Fragment>
      <div className="logo">
        <h1>ImageTron</h1>
      </div>
      <div className="search-area">
        <input
          className="input-box"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <button className="search-btn" onClick={search}>
          Search
        </button>
      </div>
      <div onClick={reset} className="result">
        {searchQ && "Results"}
      </div>
      {searchData && searchQ && searchData.length === 0 && (
        <p className="text-center col-12">No result found</p>
      )}
      <div className="dabba">
      <div className="image-box">
        {searchQ
          ? searchData.map((img, key) => (
              <Image src={img.urls.small} key={key} className="img" />
            ))
          : data.map((img, key) => <Image src={img.urls.small} key={key} className="img" />)}
      </div>
      </div>
    </React.Fragment>
  );
}

export default App;
