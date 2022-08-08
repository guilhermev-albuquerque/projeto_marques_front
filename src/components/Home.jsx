import React from "react";

function Home({ animeList }) {
  return (
    <>
      <div className="anime-list">
        {animeList
          ? animeList.map((anime) => {
              return (
                <article className="anime-card" key={anime.mal_id}>
                  <a href={anime.url} target="_blank" rel="noreferrer">
                    <figure>
                      <img src={anime.images.jpg.large_image_url} alt="Anime" />
                    </figure>
                    <h1>{anime.title}</h1>
                  </a>
                </article>
              );
            })
          : ""}
      </div>
    </>
  );
}

export default Home;
