import { useEffect, useState, useRef, use } from "react";
import "./Quizz.css";
import qBank from "./assets/Questions.js";

function Quizz() {

    const goodAudio = useRef(null);
    const badAudio = useRef(null);
    const [qnumber, setQnumber] = useState(1);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [questioHistory, setQuestionHostory] = useState({})
    const question = qBank.find((u) => u.id == qnumber);

    const playAudio = (good) => {
        let audio = good ? goodAudio.current : badAudio.current;
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }

    }
    console.log(question.answer);

    const reset = () => {
        setQnumber(1);
        setScore(0);
        setAnswered(0);
        setShowResult(false)
        setQuestionHostory({})
    }
    useEffect(() => {
        goodAudio.current = new Audio("/good.mp3");
        badAudio.current = new Audio("/how.mp3");

        goodAudio.current.load();
        badAudio.current.load();
    }, [])


    const plus = () => {
        if (qnumber < qBank.length) {
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
        if (questioHistory[qnumber]) return;
        setQuestionHostory({
            ...questioHistory,
            [qnumber]: option
        });
        console.log(option)
        if (option === question.answer) {
            setScore(score + 1);
        }

        const newAnswered = answered + 1;
        setAnswered(newAnswered);
        if (newAnswered === qBank.length) {
            setShowResult(true);
        } else {
            plus();
        }
    };
    useEffect(() => {
        if (showResult) {
            if (score >= 7) {
                playAudio(true);
            } else {
                playAudio(false);
            }
        }
    }, [showResult, score]);

    if (showResult) {
        return (
            <div className="quiz-container">
                <div className="quiz-box">
                    <h1>Quiz Finished!</h1>
                    <h2>You got <strong>{score}</strong> / {qBank.length}</h2>

                    {score >= 7 ? (
                        <h3>🎉 Congrats! Amazing job!</h3>
                    ) : (
                        <h3>😬 Try again, you can do better!</h3>
                    )}

                    <button className="nav-btn" onClick={reset}>
                        Restart Quiz
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="quiz-container">
            <div className="quiz-box">
                <h2 className="question-number">Question {qnumber} / {qBank.length}</h2>
                <h1 className="question-text">{question.question}</h1>

                <div className="options-container">

                    {question.options.map((option, index) => (

                        <button
                            key={index}
                            className={`option-btn ${questioHistory[qnumber] === option ? "selected" : ""}`}
                            disabled={questioHistory[qnumber] !== undefined}

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
