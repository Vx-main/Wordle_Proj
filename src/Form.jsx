import { checkGuess } from "./Helper.jsx";

export function InputForm({ answer, setGuess, boardArr, setBArr, setDone }) {
  let newArr = [...boardArr];
  return (
    <>
      <form
        className="input-form"
        onSubmit={(event) => {
          event.preventDefault();
          const guess = event.target[0].value.toUpperCase();
          if (guess.length === 5) {
            setGuess(guess);
            const winput = document.getElementById("word-input");
            winput.value = "";
            newArr.push(checkGuess(guess, answer, setDone));
            setBArr(newArr);
          } else {
            alert("Your Word Length Is Greater Than 5");
          }
          if (boardArr.length > 5) {
            alert("Guesses Exhuasted, Resetting Game.");
            window.location.reload();
          }
        }}
      >
        <div>
          <input type="text" id="word-input" minLength={5} />
        </div>
      </form>
    </>
  );
}
