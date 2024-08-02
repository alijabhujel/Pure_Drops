import React, { useContext } from 'react'
import { QuizContent } from '../../components/context/QuizHolder';

export default function Result() {
    const { correct, setExit, setStarted, quizzes } = useContext(QuizContent)
    const playAgain = () => {
        setExit(false);
        setStarted(false);
    }

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-[40%] border shadow-lg rounded-md overflow-hidden text-center'>
                <h2 className='text-2xl p-3 my-2'>{correct} are correct out of {quizzes.length}</h2>
                <button onClick={playAgain} className='border border-orange-500 p-3 text-2xl rounded'>Play again</button>
            </div>
        </div>
    );
}