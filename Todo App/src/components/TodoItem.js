import React from "react";
import './todo.css'

const TodoItem = ({ item, onDelete, onEdit}) => {
    const deleteHandler =()=>{
        onDelete(item._id)
    }
    const editHandler =()=>{
        
    }
    console.log(item)
  return (
    <div>
      <div className="todo-item">
        <span className="todo-text">{item.task}</span>
        <span className="todo-buttons">
          <button onClick={deleteHandler}>Delete</button>
          <button onClick={editHandler}>Edit</button>
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
