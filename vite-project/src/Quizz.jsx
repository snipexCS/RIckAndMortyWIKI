import { useState } from "react";
import "./Quizz.css";
import qBank from "./assets/Questions.js";

function Quizz() {
    const [qnumber, setQnumber] = useState(1);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(0);
    const question = qBank.find((u) => u.id == qnumber);

    const plus = () => {
        if (answered >= qBank.length) {
            alert(`Quiz finished! Your score is ${score} out of ${qBank.length}`);
            setQnumber(1);
            setScore(0);
            setAnswered(0);
        } else if (qnumber < qBank.length) {
            setQnumber(qnumber + 1);
        }
    };

    const minus = () => {
        if (qnumber > 1) {
            setQnumber(qnumber - 1);
        } else {
            setQnumber(1);
        }
    };

    const Answers = (option) => {
        if (option === question.answer) {
            setScore(score + 1);
        }
        setAnswered(answered + 1);
        plus();
    };

    return (
        <div className="quiz-container">
            <div className="quiz-box">
                <h2 className="question-number">Question {qnumber} / {qBank.length}</h2>
                <h1 className="question-text">{question.question}</h1>

                <div className="options-container">
                    {question.options.map((option, index) => (
                        <button
                            key={index}
                            className="option-btn"
                            onClick={() => Answers(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                <div className="controls">
                    <button className="nav-btn" onClick={minus}>← Prev</button>
                    <button className="nav-btn" onClick={plus}>Next →</button>
                </div>

                <div className="score-display">
                    Score: <span>{score}</span>
                </div>
            </div>
        </div>
    );
}

export default Quizz;
