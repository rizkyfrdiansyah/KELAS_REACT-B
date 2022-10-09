import React from "react";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removeTodoTask, changeStatusTodoTask } from "../../store/TodoTask";

const Todo = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todoTask);
  // console.log(todos.todoList)

  const handleDelete = (id) => {
    dispatch(removeTodoTask(id));
    console.log("Success Delete id = " + id);
  };

  const handleCheck = (id) => {
    dispatch(changeStatusTodoTask(id));
    console.log("Success Check id = " + id);
  };

  return (
    <>
      {todos.todoList.map((todo, todoIdx) => (
        <div className={style.list} key={todoIdx}>
          <div className="form-check d-flex justify-content-between container">
            <label className="form-check-label" htmlFor="defaultCheck1">
              <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" checked={todo.completed} onClick={() => handleCheck(todo.id)} />
              {todo.completed ? <del className={style.fontChecked}>{todo.title}</del> : <span className={style.font}>{todo.title}</span>}
            </label>
            <button onClick={() => handleDelete(todo.id)} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Todo;
