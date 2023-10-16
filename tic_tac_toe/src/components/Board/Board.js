import React from 'react'
import "./board.css"
import Box from '../Box/Box'
const Board = ({board,handleBoxClick}) => {
  return (
    <div className='board'>
            {board.map((el,index)=>{
                return <Box value={el} onClick={()=>el === null && handleBoxClick(index)}></Box>
            })}
    </div>
  )
}

export default Board
