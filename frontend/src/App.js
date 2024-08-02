
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/ui/Home';
import Games from './components/ui/Games';
import Clayvessel from './components/ui/Clayvessel';
import Clothfilter from './components/ui/Clothfilter';
import Header from './components/shared/Header';
import QuizHolder from './components/context/QuizHolder';



function App() {
  return (
   <>
    <Header/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route exact path="/Home" element={<Home/>}/>
      <Route exact path="/Games" element={<Games/>}/>
      <Route exact path="/Quizholder" element={<QuizHolder/>}/>
      <Route exact path="/Clayvessel" element={<Clayvessel/>}/>
      <Route exact path="/Clothfilter" element={<Clothfilter/>}/>
    </Routes>
    </>
  );
}

export default App;
