import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import axios from "axios";

import "./styles/styles.scss";

export default function App() {
  const [searchResults, setSearchResults] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);

  async function getPlanets(key) {
    setLoading(true);
    const url = "https://swapi.dev/api/planets?search="+key;
    axios
      .get(url)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getPlanets(keyword);
  }, [keyword]);

  return (
      <div className="App">
        <Header setKeyword={setKeyword} />
        {!loading && <Body searchResults={searchResults}/>}
      </div>
  );
}
