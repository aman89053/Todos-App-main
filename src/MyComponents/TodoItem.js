import React from 'react'

export const TodoItem = ({todoItem, onDelete}) => { // (destructuring) insted of props, using direct property in arguments 
  return (
    <div>
      <h4>{todoItem.title}</h4>
      <p>{todoItem.desc}</p>
      <button className='btn btn-sm btn-danger' onClick = {() => { onDelete(todoItem)}} >Delete</button>
    </div>
  )
}
