import React, { useState } from "react";
import "./App.css";

function App () {

const [score, setScore] = useState(0);
const [incrementor, setIncrementor] = useState(1);

const handleIncrement = () => {
  setScore(score + incrementor);
};

const handleUpgrade = () => {
  if (score => 10) {
    setScore(score - 10);
    setIncrementor(incrementor + 1);
  } else {
    alert("You can't afford that!");
  }
};

const handleRestart = () => {
  setScore(0);
  setIncrementor(1);
};

    return (
      <main>
        <h1>React State Lab</h1>
        <p>Current Score: {score}</p>
        <button onClick = {handleIncrement}>+{incrementor}</button>
        <button onClick = {handleUpgrade}>
          Pay 10 points to change from +{incrementor} to +{incrementor + 1}
        </button>
        {score >= 100 && (
          <div>
            <h2>You Win!</h2>
            <button onClick = {handleRestart}>Play again?</button>
          </div>
        )}
      </main>
    );
}

export default App;
