import { React, useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const api_Url = "https://api.themoviedb.org/3";
  const api_key = "5b82cb347a5cf1f6ae1604d916c5cdc6";
  const url_img = "https://image.tmdb.org/t/p/original";

  const random = Math.floor(Math.random() * (20 - 0 + 1)) + 0; //genera numero random para la imagen background del buscador

  const [movies, setMovies] = useState([]);
  const [key, setKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies " });
  const [playing, setPlaying] = useState(false);

  //console.log(movies[random]?.title);

  const fetchMovies = async (key) => {
    const type = key ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(
      `${api_Url}/${type}/movie?sort_by=popularity.desc&language=es-ES&api_key=${api_key}`,
      {
        params: { api_key: api_key, query: key },
      }
    );

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
    <>
      <div
        class=" mt-16 border-none  bg-cover bg-center"
        style={{
          backgroundImage: `url(${url_img}${movies[random]?.backdrop_path})`,
        }}
      >
        <div class="p-24 backdrop-opacity-10 backdrop-invert bg-white/20 bg-gradient-to-b from-transparent to-white ">
          <h1 class="content-center mb-5 ml-5 font-extrabold text-xl">
            ¡Encuentra una nueva historia!
          </h1>

          <form class=" flex items-center " onSubmit={searchMovies}>
            <label for="simple-search" class=" sr-only">
              Search
            </label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-500"
                placeholder="Peliculas, series..."
                onChange={(e) => setKey(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              class="p-3.5 ml-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-emerald-500 rounded-xl hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </form>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-5 pt-20 p-3">
        {movies.map((movie) => (
          <a href={`movie/${movie.id}`}>
            <div key={movie.id} class="">
              <img
                src={`${url_img + movie.poster_path}`}
                alt={movie.title}
                class=""
              />
              <p class="text-center">{movie.title}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Home;
