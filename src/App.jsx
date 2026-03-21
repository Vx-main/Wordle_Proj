import { useState } from "react";
import { InputForm } from "./Form";
import { WORDS } from "./data";
import { GuessBoard } from "./Board";
import { checkGuess } from "./Helper.jsx";

const NUM_OF_GUESS_ALLOWED = 6;
function App() {
  const [wordOfDay, setWod] = useState(
    () => WORDS[Math.floor(Math.random() * WORDS.length)],
  );
  const [guess, setGuess] = useState(0);
  const [boardArr, setBArr] = useState([]);
  const [isDone, setDone] = useState(false);
  console.log(wordOfDay);

  return (
    <>
      <div className="game-wrapper">
        <GuessBoard glen={NUM_OF_GUESS_ALLOWED} arrr={boardArr} />

        <div className="input-form-div">
          <strong>Enter Your Guess: </strong>
          <InputForm
            answer={wordOfDay}
            setGuess={setGuess}
            boardArr={boardArr}
            setBArr={setBArr}
            isDone={isDone}
            setDone={setDone}
          />
          {isDone && alert("Done")}
        </div>
      </div>
    </>
  );
}

export default App;
