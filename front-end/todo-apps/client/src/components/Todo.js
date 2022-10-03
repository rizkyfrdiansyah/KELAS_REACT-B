import React, { useState, useEffect } from "react";
import { getTodos, addTodo } from "../axios/fetchTodos";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    addTodo(title, (result) => {
      setTodos(result);
    });
  };

  const deleteHandler = (id) => {
    let todosTemp = [...todos];

    todosTemp = todosTemp.filter((todo) => todo.id !== id);
    // setTodos(todosTemp);
    console.log(`Delete id ${id}`);
  };

  useEffect(() => {
    // console.log("use effect jalan");
    getTodos((result) => {
      setTodos(result);
    });
  }, []);

  // const setLocalStorage = () => {
  //   localStorage.setItem("ashiapp", "mantaph");
  // };
  // const clearLocalStorage = () => {
  //   localStorage.clear();
  // };

  return (
    <>
      <div className="container-item">
        <div className="todo-input">
          <form>
            <input onChange={(event) => setTitle(event.target.value)} type="text" placeholder="Input your todo list, thanks." />
            <button onClick={submitHandler}>Submit Todo</button>
            {/* <p>{title}</p> */}
          </form>
        </div>
        <div className="table-section">
          <table border="1" cellSpacing="0">
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => {
                const { id, title, completed } = todo;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{completed ? "done" : "in progress"}</td>
                    <td>
                      <button onClick={() => deleteHandler(id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* <div>
          <button onClick={setLocalStorage}>set local storage</button>
          <button onClick={clearLocalStorage}>clear local storage</button>
        </div> */}
      </div>
    </>
  );
};

export default Todo;
