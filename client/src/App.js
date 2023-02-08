import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./store/user";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Movies from "./components/Movies";
import Movie from "./components/Movie";
import TvShows from "./components/TvShows";
import TvShow from "./components/TvShow";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/users/me`, { withCredentials: true })
      .then((res) => dispatch(setUser(res.data)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/tvshow/:id" element={<TvShow />} />
      </Routes>
    </div>
  );
};

export default App;
