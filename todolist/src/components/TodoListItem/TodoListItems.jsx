import React from 'react'
import styles from "./TodoListItems.module.css"
const TodoListItems = ({todo,handleStatus,handleDelete}) => {
  return (
    <div className={styles.listContainer}>
      {todo &&  todo.map((item,index)=>{
        return <div key={item.id} className={styles.todoItems}>
            <div className={styles.serial}><h3>{`${index+1}. `}</h3><h4>{item.task}</h4></div><h4 style={{color:`${item.status===true?"green":"red"}`}}>{item.status===true?"Done":"Not Done"}</h4><button className={styles.button} onClick={()=>{
              handleStatus(item.id)
            }}>Toggle</button><button className={styles.button} onClick={()=>{
                handleDelete(item.id)
            }}>X</button>
        </div>
      })}
    </div>
  )
}

export default TodoListItems
