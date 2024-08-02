import Game from "./components/ui/game/Game.jsx";
// import Home from "./components/ui/Home.js";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/ui/Home";
import Games from "./components/ui/Games";
import Quiz from "./components/ui/Quiz.js";
import Clayvessel from "./components/ui/Clayvessel";
import Clothfilter from "./components/ui/Clothfilter";
import Workshop from "./components/ui/WorkshopForm.js";
import Header from "./components/shared/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />

        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Games" element={<Games />} />
        <Route exact path="/Quiz" element={<Quiz />} />
        <Route exact path="/Clayvessel" element={<Clayvessel />} />
        <Route exact path="/Clothfilter" element={<Clothfilter />} />
        <Route exact path="/Workshop" element={<Workshop />} />
      </Routes>
    </>
  );
}

export default App;
