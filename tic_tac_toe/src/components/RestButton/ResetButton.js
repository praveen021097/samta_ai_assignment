import React from 'react'
import "./resetButton.css"
const ResetButton = ({resetBoard}) => {
  return (
    <button className='resetButton' onClick={resetBoard}>
            Reset
    </button>
  )
}

export default ResetButton
