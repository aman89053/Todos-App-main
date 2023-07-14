import React from 'react';
import {TodoItem} from './TodoItem';


export const Todos = (props) => {
  return (
    <div style={{minHeight: "50vh" }} className='container'>
      <h3 className='text-center my-3'>Todos List</h3>

      {props.todosState.length===0? <h6>No Todo's To Show</h6>: props.todosState.map((num) => {
        return ( <> <TodoItem todoItem = {num} key = {num.sno} onDelete = {props.onDelete} /> <hr /></> )
      })
      }
      
    </div>
  )
}
