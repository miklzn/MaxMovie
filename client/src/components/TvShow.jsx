import { React, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Movie = () => {
  const api_Url = "https://api.themoviedb.org/3";
  const api_key = "5b82cb347a5cf1f6ae1604d916c5cdc6";
  const url_img = "https://image.tmdb.org/t/p/original";

  const { id } = useParams();
  const [tvShow, setTvShow] = useState([]);

  useEffect(() => {
    axios
      .get(`${api_Url}/tv/${id}?api_key=${api_key}&language=es-ES`)
      .then((res) => res.data)
      .then((tvShow) => {
        setTvShow(tvShow);
      });
  }, []);

  return (
    <div
      class="bg-cover "
      style={{ backgroundImage: `url(${url_img}${tvShow.backdrop_path})` }}
    >
      <section class="pt-3 text-gray-600 body-font overflow-hidden backdrop-opacity-10 backdrop-invert bg-white/40">
        <div class="container px-5 py-24 mx-auto ">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt={tvShow.name}
              class="lg:w-1/3 w-full lg:h-auto md:h-full sm:h-full object-cover object-center rounded "
              src={`${url_img + tvShow.poster_path}`}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-stone-800 tracking-widest">
                {tvShow.first_air_date}
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {tvShow.name}
              </h1>
              <div class="flex mb-1">
                <span class="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-emerald-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>

                  <span class="text-stone-800 ml-3">
                    {tvShow.vote_average} / 10
                  </span>
                </span>
                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a class="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p class="leading-relaxed text-stone-800">{tvShow.overview}</p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                {tvShow?.genres?.map((genre) => (
                  <button
                    type="button"
                    class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    {genre.name}
                  </button>
                ))}
              </div>
              <div class="flex">
                {/* <span class="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span> */}
                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
                <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Movie;
