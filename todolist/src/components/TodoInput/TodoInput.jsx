import React from 'react'
import styles from "./TodoInput.module.css"

import { useState } from 'react';

const TodoInput = ({getText}) => {
    const [task , setTask] = useState("")
    console.log(task)
  return (
    <div className={styles.todoInputContainer}>
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder='Add Task' />
            <button onClick={()=>{
              getText(task)
              setTask("")
            }}>Add Task</button>
    </div>
  )
}

export default TodoInput
