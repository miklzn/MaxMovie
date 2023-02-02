import React from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
      </Routes>
    </div>
  );
};

export default App;
