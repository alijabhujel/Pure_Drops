import React, { useState } from "react";

const Quiz = ({ quizzes, correct, setCorrect, setExit }) => {
  const [current, setCurrent] = useState(0);
  const [ans, setAns] = useState("");

  const saveHandler = () => {
    if (quizzes[current]?.correct === ans) {
      setCorrect(correct + 1);
    }
    setAns("");
    if (current + 1 === quizzes.length) {
      setExit(true);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="w-[60%] p-8 bg-white border shadow-lg rounded-md">
      <div className="mb-6 text-3xl font-semibold">
        {current + 1}. {quizzes[current]?.question}
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div
          className={`p-4 border ${
            ans === "a" ? "bg-blue-400 text-white" : ""
          } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}
          onClick={() => setAns("a")}
        >
          {quizzes[current]?.a}
        </div>
        <div
          className={`p-4 border ${
            ans === "b" ? "bg-blue-400 text-white" : ""
          } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}
          onClick={() => setAns("b")}
        >
          {quizzes[current]?.b}
        </div>
        <div
          className={`p-4 border ${
            ans === "c" ? "bg-blue-400 text-white" : ""
          } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}
          onClick={() => setAns("c")}
        >
          {quizzes[current]?.c}
        </div>
        <div
          className={`p-4 border ${
            ans === "d" ? "bg-blue-400 text-white" : ""
          } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}
          onClick={() => setAns("d")}
        >
          {quizzes[current]?.d}
        </div>
      </div>
      <div className="flex justify-between">
        <div
          className="px-4 py-2 text-white bg-purple-500 rounded cursor-pointer hover:bg-purple-700"
          onClick={() => setAns("")}
        >
          Reset
        </div>
        <div
          className="px-4 py-2 text-white bg-green-500 rounded cursor-pointer hover:bg-green-700"
          onClick={saveHandler}
        >
          Save & Next
        </div>
        <div
          className="px-4 py-2 text-white bg-red-500 rounded cursor-pointer hover:bg-red-700"
          onClick={() => setExit(true)}
        >
          Exit
        </div>
      </div>
    </div>
  );
};

export default Quiz;
