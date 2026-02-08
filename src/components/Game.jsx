import React, { useState } from "react";
import Board from "./Board";

export default function Game (){
  const [history , setHistory ]= useState([Array(9).fill(null)]);
  const [xIsNext , setXIsNext]=useState(true)
  const [currentMove , setCurrentMove] = useState(0)
  const currentSquare = history[currentMove]
  function handelPLay (nextSqares){
    setXIsNext(!xIsNext)
    const nextHistory = [...history.slice(0,currentMove+1),nextSqares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
    
  }
  function jumpTo(move){
    setCurrentMove(move);
    setXIsNext(move % 2 == 0)
  }
  const moves = history.map((Squares,move,) => {
        let description ;
        if (move > 0 ){
            description = `Go to the move #  ${move}`;
        }else{
            description = "start the game"
        }
        return(
            <li key={move}>
                <button onClick={()=> jumpTo(move)}>{description}</button>
            </li>
        )
    })
  return(
    <div 
    className="
        flex 
        flex-col 
        md:flex-row
        items-center 
        justify-center 
        px-4
        text-xl 
        md:text-3xl 
        gap-10
        md:gap-30
      
      ">
      <div>
        <Board xIsNext={xIsNext} Squares={currentSquare} onPlay={handelPLay} />
      </div>
      <div className=" border-t-black border-4 w-full p-7  ">
        <ol className=" flex flex-col gap-3 md:gap-4 ">{moves}</ol>
      </div>
    </div>
  )
}
