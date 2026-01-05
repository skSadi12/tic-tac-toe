import React, { useState } from "react";
import Square from "./Square";

function Board() {
    const [Squares , setSquare ]= useState(Array(9).fill(null));
    const [xIsNext , setXIsNext]=useState(true)
    const winner = calculateWinner(Squares)
    let stutas ;
    if(winner){
      stutas =`winner is : ${winner}`
    }else{
      stutas = `next player is : ` + (xIsNext ? "X" : "O")
    }
    function handelClich (i){
      if(Squares[i] || winner){
        return
      }
      const nextSqares = Squares.slice();
      if(xIsNext){
        nextSqares[i]="X"
      }else{
        nextSqares[i]="O"
      }
      setSquare(nextSqares)
      setXIsNext(!xIsNext)
    }

  return (
    <div>
      <div>
        {stutas}
      </div>
      <div className="flex">
        <Square value={Squares[0]} onSquareClick={() => handelClich(0)} />
        <Square value={Squares[1]} onSquareClick={() => handelClich(1)}/>
        <Square value={Squares[2]} onSquareClick={() => handelClich(2)}/>
      </div>
      <div className="flex">
        <Square value={Squares[3]} onSquareClick={() => handelClich(3)}/>
        <Square value={Squares[4]} onSquareClick={() => handelClich(4)}/>
        <Square value={Squares[5]} onSquareClick={() => handelClich(5)}/>
      </div>
      <div className="flex">
        <Square value={Squares[6]} onSquareClick={() => handelClich(6)}/>
        <Square value={Squares[7]} onSquareClick={() => handelClich(7)}/>
        <Square value={Squares[8]} onSquareClick={() => handelClich(8)}/>
      </div>
    </div>
  );
}

export default Board;

function calculateWinner(Squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for(let i = 0 ; i < lines.length ; i++){
    const [a,b,c] = lines[i]
    if(Squares[a] && Squares[a] === Squares[b] && Squares[a] === Squares[c]){
      return Squares[a]
    }
  }
  return null
}
