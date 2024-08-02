import React from 'react';

const Result = ({ correct }) => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-full p-16 bg-white border shadow-lg rounded-md max-w-xl mx-auto'>
            <div className='flex items-center text-5xl font-bold mb-6 text-blue-500'>
                <span role="img" aria-label="confetti">🎉</span>
                <span className='mx-3'>Congratulations!</span>
                <span role="img" aria-label="confetti">🎉</span>
            </div>
            <div className='text-3xl font-semibold mb-4'>
                Quiz Completed
            </div>
            <div className='text-2xl mt-4'>
                Your score is <span className='font-bold'>{correct}</span>
            </div>
        </div>
    );
};

export default Result;
