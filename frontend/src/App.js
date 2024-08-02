
//import Home from './components/ui/Home.js';
import React from 'react';
import Quiz from './components/ui/Quiz.jsx';
import QuizHolder from './components/context/QuizHolder.jsx';

import './App.css';

function App() {
  return (
   <QuizHolder>
<div className="App">
     <Quiz/>
   </div>
   </QuizHolder>
   
  );
}

export default App;
