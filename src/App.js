import Header from './MyComponents/Header'; 
import {Todos} from './MyComponents/Todos'; 
import { AddTodo } from './MyComponents/AddTodo';
import {Footer} from './MyComponents/Footer';
import React, { useState, useEffect } from 'react';

function App() {
  let todosLocalStorage;
  
  if(localStorage.getItem("todosLocalStorage")===null){ //if localstorage is null then run below code
    todosLocalStorage = [];
  }
  else{
    todosLocalStorage =JSON.parse(localStorage.getItem("todosLocalStorage"));
  }

  const [todosState, setTodosState] = useState(todosLocalStorage); // initial todos

  // Function to Add Todos
  const addTodo = (title, desc) => {
    let sno = todosState.length + 1; // generating serial no's
    
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodosState([...todosState, newTodo]);
  }

  // Function to delete Todos 
  const onDelete = (todoItem) => {
    setTodosState(todosState.filter((num)=>{
      return num !== todoItem;
    }));
    localStorage.setItem("todosLocalStorage", JSON.stringify(todosState)); // deleting local storage
  }
  
  //using state hook (todos1 is current state & setTodos1 is alter state)
  useEffect(() => {
    localStorage.setItem("todosLocalStorage", JSON.stringify(todosState)); // setting local storage
  
  }, [todosState]) // when my todos1 gets change, useEffect gets call & runs above method & saves new todos in local storage

  return (
    <div className='vh-100'>
    <Header/>
    <AddTodo addTodo={addTodo} />
    <Todos todosState = {todosState} onDelete = {onDelete} />
    <Footer/>
    </div>
  );
}

export default App;
