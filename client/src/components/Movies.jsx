import { React, useState, useEffect } from "react";
import axios from "axios";
//import "../index.css";
//import "bulma/css/bulma.min.css";

const Movies = () => {
  const api_Url = "https://api.themoviedb.org/3";
  const api_key = "5b82cb347a5cf1f6ae1604d916c5cdc6";
  const img_path = "https://image.tmdb.org/t/p/original";
  const url_img = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([]);
  const [key, setKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies " });
  const [playing, setPlaying] = useState(false);

  const fetchMovies = async (key) => {
    const type = key ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${api_Url}/${type}/movie`, {
      params: { api_key: api_key, query: key },
    });

    setMovies(results);
    setMovie(results[0]);
  };

  //Buscar Peliculas

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(key);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <br />
      <h2 className=""></h2>
      <form className="" onSubmit={searchMovies}>
        <input
          class="input"
          type="text"
          placeholder="Search"
          onChange={(e) => setKey(e.target.value)}
        />
        <button class="button is-dark">Search</button>
      </form>
      <div class="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd homeImages">
        {movies.map((movie) => (
          <div key={movie.id} class="column is-one-fifth">
            <img
              src={`${url_img + movie.poster_path}`}
              alt={movie.title}
              class="poster"
            />
            <p class="homeTitle">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
