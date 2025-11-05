import { useState } from "react";
import "./Quizz.css"
import qBank from "./assets/Questions.js"

function Quizz() {
    const [test, settest] = useState(1);
    const [score, setScore] = useState(0);
    const question = qBank.find((u) => u.id == test);
    const options = question.options.map((option, index) => <div key={index} className="options1"><span >{option}</span></div>);

    const plus = () => {
        if (test >= qBank.length) {
            alert(`Quiz finished! Your score is ${score} out of ${qBank.length}`);
            settest(1);
            setScore(0);
        } else {
            settest(test + 1);
        }
    }
    const Options = (option) => {
        console.log(option);
        if (option === question.answer) {
            console.log("correct answer")
            setScore(score + 1);
        } else {
            console.log("bad")
        }
        plus();
    }
    console.log(score);


    return (
        <div className="container">
            <div className="quizz_box">
                <div className="quizz">
                    <h1>{question.question}</h1>

                    {question.options.map((option, index) => (
                        <div key={index} className="options1">
                            <span onClick={() => Options(option)}>{option}</span>
                        </div>
                    ))}

                </div>
                <button onClick={plus}>+</button>

            </div>
        </div>
    )
}
export default Quizz;