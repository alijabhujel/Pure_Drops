import React, { useState } from "react";
import Quiz from "../ui/Quiz";
import Result from "../ui/Result";

const quizzes = [
  {
    question: "What is the first step in water filtration?",
    a: "Boiling",
    b: "Sedimentation",
    c: "Filtration",
    d: "Chlorination",
    correct: "a",
  },
  {
    question: "Which method removes impurities using a fine filter?",
    a: "Sedimentation",
    b: "Filtration",
    c: "Chlorination",
    d: "Distillation",
    correct: "a",
  },
  {
    question: "Which process kills bacteria in water?",
    a: "Sedimentation",
    b: "Filtration",
    c: "Chlorination",
    d: "Boiling",
    correct: "d",
  },
];

const QuizHolder = () => {
  const [exit, setExit] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [started, setStarted] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {!started ? (
        <div className="text-center">
          <p className="mb-8 text-3xl font-semibold">
            Test your knowledge about filtration methods!
          </p>
          <button
            onClick={() => setStarted(true)}
            className="px-8 py-4 text-2xl font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Start Quiz
          </button>
        </div>
      ) : !exit ? (
        <Quiz
          quizzes={quizzes}
          correct={correct}
          setCorrect={setCorrect}
          setExit={setExit}
        />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
};

export default QuizHolder;
