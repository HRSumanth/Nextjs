"use client"
import React, { useRef } from "react";
import './todo.css'

const TodoInput = ({onAdd }) => {

    const input = useRef();
    const inputhandler = ()=>{
        const enteredInput=input.current.value;
        onAdd({task:enteredInput})
        input.current.value="";
    }
  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="add item . . . "
        ref={input}
      />
      <button onClick={inputhandler}>ADD</button>
    </div>
  );
};

export default TodoInput;
