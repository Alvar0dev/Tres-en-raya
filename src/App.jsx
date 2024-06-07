import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const TURNS = {
  X: "X",
  O: "O",
};

const Square = ({ children, updateBoard, index }) => {
  return <div className="square">{children}</div>;
};

const board = Array(9).fill(null);
function App() {
  const [board, setBoard] = useState(Array(9).fill(null)); // [Que cambia, hacia que cambia] = estado inicial

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {board.map((_, index) => {
          // board.map es un array que recorre la variable board y el index es el i
          return (
            <Square key={index} index={index}>
              {board[index]}
            </Square>
          );
        })}
      </section>
    </main>
  );
}

export default App;
