import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/styles.css";

function App() {
  const [search, setSearch] = useState("");
  const [animeList, setAnimeList] = useState([]);

  const GetAnime = async (e) => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&limit=100`
    ).then((res) => res.json());

    setAnimeList(response.data);
    e.preventDefault();
  };

  const HandleSearch = (e) => {
    e.preventDefault();
    GetAnime(search);
  };

  useEffect(() => {
    GetAnime();
  }, [search]);

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <div className="search-box">
          <input
            type="search"
            placeholder="Pesquise por um anime..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
        <div className="container">
          <Home animeList={animeList} />
        </div>
      </div>
    </div>
  );
}

export default App;
