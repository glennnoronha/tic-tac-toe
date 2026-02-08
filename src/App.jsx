import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Square({value, onSquareClick }) {
  return (
    <button className="border-2 border-white text-2xl font-bold h-8 p-0 text-center w-8"
    onClick={onSquareClick}
    >
      {value}
    </button>
  )
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setIsNext] = useState(true);
  const winner = calculateWinner(squares);
  let status;
  
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: "+ (xIsNext ? "X" : "O");
  }
  function handleClick(i){
    if (squares[i] || calculateWinner(squares)) {return;}
    const nextSquares = squares.slice();
    xIsNext ? nextSquares[i] = 'X' : nextSquares[i] = 'O';
    setSquares(nextSquares);
    setIsNext(!xIsNext);
  }

  return (
    <div className="flex flex-col">
      <h1>{status}</h1>
      <div className="flex">
        <Square value = {squares[0]} onSquareClick = { () => handleClick(0)}/>
        <Square value = {squares[1]} onSquareClick = { () => handleClick(1)}/>
        <Square value = {squares[2]} onSquareClick = { () => handleClick(2)}/>
      </div>
      <div className="flex">
        <Square value = {squares[3]} onSquareClick = { () => handleClick(3)}/>
        <Square value = {squares[4]} onSquareClick = { () => handleClick(4)}/>
        <Square value = {squares[5]} onSquareClick = { () => handleClick(5)}/>
      </div>
      <div className="flex">
        <Square value = {squares[6]} onSquareClick = { () => handleClick(6)}/>
        <Square value = {squares[7]} onSquareClick = { () => handleClick(7)}/>
        <Square value = {squares[8]} onSquareClick = { () => handleClick(8)}/>
      </div>
    </div>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const a = lines[i][0];
    const b = lines[i][1];
    const c = lines[i][2];

    if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]){
      return squares[a];
    }
  }
  return null;
}

