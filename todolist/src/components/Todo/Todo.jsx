import React from 'react'
import TodoInput from '../TodoInput/TodoInput';
import {nanoid} from "nanoid";
import { useState } from 'react';
import TodoListItems from '../TodoListItem/TodoListItems';
import styles from "./Todo.module.css";
const Todo = () => {
    const [todo,setTodo] = useState([])
    


    const getText =(value)=>{
          
           const payload = {
            id:nanoid(4),
            task:value,
            status:false
           }

           setTodo([...todo,payload])

    }
    const handleStatus =(id)=>{
      const newArr = todo.map((el)=>{
        if(el.id ===id){
          return {
            ...el,
            status:!el.status
          }
        }
        return el;
      })
            setTodo(newArr)
    }
    const handleDelete =(id)=>{
           const newArr = todo.filter((el)=>{
            if(el.id !== id){
              return el
            }
           })
           setTodo(newArr)
    }
console.log(todo)
  return (
    <div className={styles.todoContainer}>
      <div className={styles.heading}><h1>Todolist</h1></div>
     <TodoInput getText={getText} />
     <TodoListItems todo={todo} handleStatus={handleStatus} handleDelete={handleDelete} />
    </div>
  )
}

export default Todo
