import React, {useState, createContext} from 'react';
const QuizContent = createContext();

const quizzes = [
    {
        "question": "What is the first step in water filtration?",
        "a": "Boiling",
        "b": "Sedimentation",
        "c": "Filtration",
        "d": "Chlorination",
        "correct": "a"
    },

    {
        "question": "Which method removes impurities using a fine filter?",
        "a": "Sedimentation",
        "b": "Filtration",
        "c": "Chlorination",
        "d": "Distillation",
        "correct": "a"
    },

    {
        "question": "Which process kills bacteria in water?",
        "a": "Sedimentation",
        "b": "Filtration",
        "c": "Chlorination",
        "d": "Boiling",
        "correct": "d"
    },
]

export default function QuizHolder(props){
    const[exit, setExit] = useState(false);
    const[correct, setCorrect] = useState(0);
    const[started, setStarted] = useState(false);
    
    return(
        <QuizContent.Provider value = {{exit, setExit, quizzes, correct, setCorrect, started, setStarted}}>
            {props.children}
        </QuizContent.Provider>
    );
}

export {QuizContent};

