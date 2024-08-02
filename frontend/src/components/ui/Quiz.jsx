<<<<<<< HEAD
import React, {useContext, useState} from 'react';
import QuizHolder from '../context/QuizHolder';
import Result from '../../components/ui/Result';
=======
import React, { useContext, useState } from "react";
import { QuizContent } from "../../components/context/QuizHolder";
import Result from "../../components/ui/Result";
>>>>>>> dev

export default function Quiz() {
  const { exit, started, setStarted } = useContext(QuizContent);

  return (
    <div className="quiz-section">
      {!started ? (
        <button onClick={() => setStarted(true)} className="start-button">
          Start Quiz
        </button>
      ) : !exit ? (
        <QuizBox />
      ) : (
        <Result />
      )}
    </div>
  );
}

const QuizBox = () => {
  const { quizzes, correct, setCorrect, setExit } = useContext(QuizContent);
  const [current, setCurrent] = useState(0);
  const [ans, setAns] = useState("");

  const saveHandler = () => {
    if (quizzes[current].correct === ans) {
      setCorrect(correct + 1);
    }
    setAns("");
    if (current + 1 === quizzes.length) {
      setExit(true);
    } else {
      setCurrent(current + 1);
    }
  };

<<<<<<< HEAD
    return (
        <div className='w-[40%] border shadow-lg rounded-md overflow-hidden'>
            <div className='p-2 text-3xl'> {current + 1}) {quizzes[current].question}</div>
            <div className='grid grid-cols-2 mt-3'>
                <div className={`p-2 border ${ans === "a" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns("a")}>{quizzes[current].a}</div>
                <div className={`p-2 border ${ans === "b" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns("b")}>{quizzes[current].b}</div>
                <div className={`p-2 border ${ans === "c" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns("c")}>{quizzes[current].c}</div>
                <div className={`p-2 border ${ans === "d" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns("d")}>{quizzes[current].d}</div>
            </div>
            <div className='flex justify-between'>
                <div className='cursor-pointer h-[30px] px-3 bg-purple-500 text-white' onClick={() => setAns("")}>Reset</div>
                <div className='cursor-pointer h-[30px] px-3 bg-green-500 text-white' onClick={saveHandler}>Save & Next</div>
                <div className='cursor-pointer h-[30px] px-3 bg-red-500 text-white' onClick={() => setExit(true)}>Exit</div>

            </div>
=======
  return (
    <div className="w-[40%] border shadow-lg rounded-md overflow-hidden">
      <div className="p-2 text-3xl">
        {" "}
        {current + 1}) {quizzes[current].question}
      </div>
      <div className="grid grid-cols-2 mt-3">
        <div
          className={`p-2 border ${
            ans === "a" ? "bg-blue-400 text-white" : ""
          } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}
          onClick={() => setAns("a")}
        >
          {quizzes[current].a}
>>>>>>> dev
        </div>
        <div
          className={`p-2 border ${
            ans === "b" ? "bg-blue-400 text-white" : ""
          } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}
          onClick={() => setAns("b")}
        >
          {quizzes[current].b}
        </div>
        <div
          className={`p-2 border ${
            ans === "c" ? "bg-blue-400 text-white" : ""
          } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}
          onClick={() => setAns("c")}
        >
          {quizzes[current].c}
        </div>
        <div
          className={`p-2 border ${
            ans === "d" ? "bg-blue-400 text-white" : ""
          } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}
          onClick={() => setAns("d")}
        >
          {quizzes[current].d}
        </div>
      </div>
      <div className="flex justify-between">
        <div
          className="cursor-pointer h-[30px] px-3 bg-purple-500 text-white"
          onClick={() => setAns("")}
        >
          Reset
        </div>
        <div
          className="cursor-pointer h-[30px] px-3 bg-green-500 text-white"
          onClick={saveHandler}
        >
          Save & Next
        </div>
        <div
          className="cursor-pointer h-[30px] px-3 bg-red-500 text-white"
          onClick={() => setExit(true)}
        >
          Exit
        </div>
      </div>
    </div>
  );
};
