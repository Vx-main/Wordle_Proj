import { useState } from "react";
import { checkGuess } from "./Helper.jsx";

export function InputForm({ answer, setGuess, boardArr, setBArr, setDone }) {
  let newArr = [...boardArr];
  const [userInput, setUserInput] = useState("");
  return (
    <>
      <form
        className="input-form"
        onSubmit={(event) => {
          event.preventDefault();
          const guess = event.target[0].value.toUpperCase();
          if (guess.length === 5) {
            setGuess(guess);
            setUserInput("");
            newArr.push(checkGuess(guess, answer, setDone));
            setBArr(newArr);
          } else {
          }
          if (boardArr.length > 5) {
            alert("Guesses Exhuasted, Resetting Game.");
            window.location.reload();
          }
        }}
      >
        <div>
          <input
            required
            pattern="[a-zA-Z]{5}"
            type="text"
            id="word-input"
            minLength={5}
            maxLength={5}
            title="5 letter word"
            value={userInput}
            onChange={(event) => {
              setUserInput(event.target.value.toUpperCase());
            }}
          />
        </div>
      </form>
    </>
  );
}
