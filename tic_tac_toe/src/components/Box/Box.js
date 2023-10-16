import React from 'react'
import "./box.css"
const Box = ({value,onClick}) => {
    const style = value === "X" ? "Box x": "Box o";
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  )
}

export default Box
