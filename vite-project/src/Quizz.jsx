import { useState } from "react";
import "./Quizz.css"
import qBank from "./assets/Questions.js"

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
    }
    const minus = () => {
        if (qnumber > 1) {
            setQnumber(qnumber - 1)
        } else {
            setQnumber(1)
        }
    }

    const Answers = (option) => {
        console.log(option);
        if (option === question.answer) {
            console.log("correct answer");
            setScore(score + 1);
        } else {
            console.log("bad");
        }
        setAnswered(answered + 1);
        plus();
    }

    return (
        <div className="container">
            <div className="quizz_box">
                <div className="quizz">
                    <h1>{question.question}</h1>

                    {question.options.map((option, index) => (
                        <div key={index} className="options1">
                            <span onClick={() => Answers(option)}>{option}</span>
                        </div>
                    ))}

                </div>
                <button onClick={minus}>-</button>
                <button onClick={plus}>+</button>
            </div>
        </div>
    )
}
export default Quizz;
