export function GuessBoard({ glen, arrr }) {
  let sNum = [];
  for (let i = 0; i < glen; i++) {
    sNum[i] = "";
  }
  return (
    <div className="guess-results">
      {sNum.map((val, index) => {
        let isexist = Boolean(arrr[index]);
        return (
          <p className="guess" key={index}>
            <span className={"cell " + (isexist && arrr[index][0].status)}>
              {isexist && arrr[index][0].letter}
            </span>
            <span className={"cell " + (isexist && arrr[index][1].status)}>
              {isexist && arrr[index][1].letter}
            </span>
            <span className={"cell " + (isexist && arrr[index][2].status)}>
              {isexist && arrr[index][2].letter}
            </span>
            <span className={"cell " + (isexist && arrr[index][3].status)}>
              {isexist && arrr[index][3].letter}
            </span>
            <span className={"cell " + (isexist && arrr[index][4].status)}>
              {isexist && arrr[index][4].letter}
            </span>
          </p>
        );
      })}
    </div>
  );
}
