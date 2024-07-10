import { useState } from "react";
import "./App.css";
import circle_icon from "./assets/circle.png";
import cross_icon from "./assets/cross.png";
import { useRef } from "react";

let d = ["", "", "", "", "", "", "", "", ""];

const App = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleRef = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);
  const boxesArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, i) => {
    if (lock) return 0;
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src=${cross_icon} />`;
      d[i] = "x";
      setCount((prev) => prev + 1);
    } else {
      e.target.innerHTML = `<img src=${circle_icon} />`;
      d[i] = "o";
      setCount((prev) => prev + 1);
    }
    checkWin();
  };

  const checkWin = () => {
    if (d[0] === d[1] && d[1] === d[2] && d[2] !== "") won(d[2]);
    else if (d[3] === d[4] && d[4] === d[5] && d[5] !== "") won(d[5]);
    else if (d[6] === d[7] && d[7] === d[8] && d[8] !== "") won(d[8]);
    else if (d[0] === d[3] && d[3] === d[6] && d[6] !== "") won(d[6]);
    else if (d[1] === d[4] && d[4] === d[7] && d[7] !== "") won(d[7]);
    else if (d[2] === d[5] && d[5] === d[8] && d[8] !== "") won(d[8]);
    else if (d[0] === d[4] && d[4] === d[8] && d[8] !== "") won(d[8]);
    else if (d[2] === d[4] && d[4] === d[6] && d[6] !== "") won(d[6]);
  };

  const won = (d) => {
    setLock(true);
    if (d === "o")
      titleRef.current.innerHTML = `Congratulations:<img src=${circle_icon} /> Wins`;
    else
      titleRef.current.innerHTML = `Congratulations:<img src=${cross_icon} /> Wins`;
  };

  const reset = () => {
    setLock(false);
    d = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = `Tic Tac Toe In <span>React</span>`;
    boxesArray.forEach((box) => {
      box.current.innerHTML = "";
    });
  };
  return (
    <div className="container">
      <h1 ref={titleRef} className="title">
        Tic Tac Toe In <span>React</span>
      </h1>
      <div className="board">
        <div className="row1">
          <div className="box" ref={box1} onClick={(e) => toggle(e, 0)}></div>
          <div className="box" ref={box2} onClick={(e) => toggle(e, 1)}></div>
          <div className="box" ref={box3} onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className="row2">
          <div className="box" ref={box4} onClick={(e) => toggle(e, 3)}></div>
          <div className="box" ref={box5} onClick={(e) => toggle(e, 4)}></div>
          <div className="box" ref={box6} onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className="row3">
          <div className="box" ref={box7} onClick={(e) => toggle(e, 6)}></div>
          <div className="box" ref={box8} onClick={(e) => toggle(e, 7)}></div>
          <div className="box" ref={box9} onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>
      <button className="reset" onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
};
export default App;
