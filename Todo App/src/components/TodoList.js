import React from "react";
import TodoItem from "./TodoItem";
import './todo.css'

const TodoList = ({ todos, onDelete, onEdit}) => {
  console.log(todos)
  return (
    <div>
      {todos.map((item, index) => (
        <TodoItem
          key={index}
          item={item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
