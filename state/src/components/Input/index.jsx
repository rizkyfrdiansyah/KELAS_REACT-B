import React, { useState } from "react";
import style from "./style.module.css";
/** redux */
import { useDispatch } from "react-redux";
import { addTodoTask } from "../../store/TodoTask";

const Input = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [id, setId] = useState(0);
  const todo = {
    id: 0,
    title: "",
    completed: false,
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ben nggak ngerefresh
    if (title === "") {
      alert("Please add a todo !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    } else {
      todo.id = id;
      todo.title = title;
      todo.completed = false;
      dispatch(addTodoTask(todo));

      setId(id + 1);
      setTitle("");
    }
  };

  return (
    <div className={style.pill}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" placeholder="Add todo..." value={title} onInput={(e) => setTitle(e.target.value)} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Input;
