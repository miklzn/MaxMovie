import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Movies from "./components/Movies";
import Movie from "./components/Movie";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </div>
  );
};

export default App;
