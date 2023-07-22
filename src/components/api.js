import { useState, useEffect } from "react";
import axios from "axios";
const API_KEY = "BQaK9jYDCoEcVwhAYhDf5FB_-6VQ3hsicW-rMxWQCz4";

function LoadImages() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.unsplash.com/photos/?client_id=" + API_KEY)
      .then((data) => {
        setState(data.data);
      });
  }, []);
  return state;
}

function SearchImages(params) {
  const [query, setQuery] = useState();
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/search/photos?query=" +
          params +
          "&client_id=" +
          API_KEY
      )
      .then((data) => {
        setQuery(data.data.results);
      });
  }, [params]);
  return query;
}
export { LoadImages, SearchImages };
