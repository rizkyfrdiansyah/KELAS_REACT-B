import React, { useState } from "react";

const TodoItem = ({ todo }) => {
  const [title, setTitle] = useState(todo.title);
  const [completed, setCompleted] = useState(todo.completed);

  return (
    <>
      <div key={todo.id} className="todo-item">
        <div className="todo-item-checklist">
          <input type="checkbox" onChange={(e) => setCompleted(e.target.value)} />
        </div>
        <div className="todo-item-title">
          <p className={completed ? "todo-title todo-title-done" : "todo-title"}>{title}</p>
        </div>
        <div className="todo-item-button">
          <button className="">Delete</button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
