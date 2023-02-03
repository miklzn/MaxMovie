import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
