'use client'
import TodoInput from "@/components/TodoInput"
import TodoList from "@/components/TodoList"
import { useEffect } from "react";


export default async function Home(props) {
  let todos=[]
  useEffect(async()=>{
    const response = await fetch('http://localhost:3000/api/todolist');
    const data = await response.json();
          todos=data.result;
  }, [])
  
  async function delateHandler(id) {
    console.log(id)
    const response = await fetch('/api/todolist', {
      method: 'DELETE',
      body: JSON.stringify(id),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  function editHandler(){

  }
  async function addTodo(enteredInput) {
    console.log(enteredInput)
    const response = await fetch('/api/todolist', {
      method: 'POST',
      body: JSON.stringify(enteredInput),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data);
  }
  return (
       <div>
          <div className="container">
            TODO LIST
            <hr />
          </div>
        
            <TodoInput
              onAdd={addTodo}
            />
          
            <TodoList
              todos={todos}
              onDelete={delateHandler}
              onEdit={editHandler}
            />
            </div>
          
  )
}


