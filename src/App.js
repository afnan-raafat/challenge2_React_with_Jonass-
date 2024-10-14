//  this is practise on Event handeler on react
import { useState } from "react";
import "./index.css";
const messages = [
  "mix flour, eggs, sugar, and butter 🥰",
  "our the mixture into a baking tin 🤏",
  "bake at 180°C and eat it 😋",
];

export default function App() {
  const [step, setStep] = useState(1);
  //  هنعمل 2 فانكشن هنهندلهم للازرار
  function handlePrev() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <div className="steps">
      <div className="textHeader">
        <h1>Steps To Prepare a Cake With Me 🍰</h1>
        <br></br>
      </div>

      {/* Numbers  */}
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>

        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      {/* Message */}
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      {/* Buttons */}

      <div className="buttons">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
