
import React,{ useEffect, useState } from 'react';
import './App.css';
import webFont from "webfontloader"  
import Board from './components/Board/Board';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import ResetButton from './components/RestButton/ResetButton';
function App() {
  //winning conditions
  const WinConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  const [board,setBoard] = useState(Array(9).fill(null));
  const [xPlaying , setXPlaying] = useState(true);
  const [scores,setScores] = useState({xScore:0,oScore:0});
  const [gameOver,setGameOver] = useState(false);
  // for font families
  useEffect(()=>{
    webFont.load({
      google:{
        families:["Roboto","sans-serif","chilanka"]
      }
    })
  },[])
// handle value clicking on the box
  const handleBoxClick = (boxIndex)=>{
    const updateBoard = board.map((el,idx)=>{
      if(idx === boxIndex){
        return xPlaying === true ? "X":"O";
      }
      else{
        return el;
      }
    })
   const winner =  checkWinner(updateBoard);
   if(winner){
    if(winner === "O"){
      let {oScore} =scores;
      oScore += 1;
      setScores({...scores,oScore})
 }
 else{
  let {xScore} = scores;
  xScore += 1;
  setScores({...scores,xScore})
 }
   }
   console.log(scores)
    setBoard(updateBoard);
    setXPlaying(!xPlaying)
  }
  //check winner if the in wincondition  same x or o
  const checkWinner =(board)=>{
      for(let i=0; i<WinConditions.length; i++){
        const [x,y,z] =WinConditions[i];
        if(board[x] && board[x] === board[y] && board[y] === board[z]){
          setGameOver(true)
          return board[x]
        }
      }
  }
  //reset Board 
  const resetBoard =()=>{
    setGameOver(false);
    setBoard(Array(9).fill(null))
  }
  return (
    <div className="App">
      <div className='h1'>
      <h1 className='heading'>Tic Tac Toe</h1>
      </div>
      <ScoreBoard  scores={scores} xPlaying={xPlaying}/>
      <Board board={board} handleBoxClick={gameOver?resetBoard:handleBoxClick}/>
      <ResetButton resetBoard={resetBoard} />
    </div>
  );
}

export default App;
