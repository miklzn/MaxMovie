import { React, useState, useEffect } from "react";
import axios from "axios";

const TvShows = () => {
  const api_Url = "https://api.themoviedb.org/3";
  const api_key = "5b82cb347a5cf1f6ae1604d916c5cdc6";
  const url_img = "https://image.tmdb.org/t/p/original";

  const [tvshows, setTvShows] = useState([]);
  const [key, setKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [tvShow, setTvShow] = useState({ title: " Cargando Series " });
  const [playing, setPlaying] = useState(false);

  console.log(tvshows);

  const fetchTvShows = async (key) => {
    const type = key ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(
      `${api_Url}/discover/tv?sort_by=popularity.desc&language=es-ES&api_key=${api_key}`,
      {
        params: { api_key: api_key, query: key },
      }
    );

    setTvShows(results);
    setTvShow(results[0]);
  };

  useEffect(() => {
    fetchTvShows();
  }, []);

  return (
    <div class="grid grid-cols-5 gap-5 pt-20 p-5">
      {tvshows.map((tvShow) => (
        <a href={`tvshow/${tvShow.id}`}>
          <div key={tvShow.id} class="">
            <img
              src={`${url_img + tvShow.poster_path}`}
              alt={tvShow.title}
              class=""
            />
            <p class="text-center">{tvShow.name}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default TvShows;
