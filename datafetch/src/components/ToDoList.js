import { useSelector, useDispatch } from "react-redux";
import { hapusTodo, handleChange } from "../store/todoSlice";

const ToDoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  return (
    <div style={{ margin: "10px" }}>
      {todos.map((todo) => (
        <div className="todo-list" key={todo.id}>
          <input
            type="checkbox"
            name="todo"
            id="todo"
            checked={todo.completed}
            onChange={() => {
              dispatch(handleChange(todo.id));
            }}
          />
          <p style={todo.completed ? { textDecoration: "line-through", color: "red" } : { textDecoration: "none" }}>{todo.title}</p>
          <button
            onClick={() => {
              dispatch(hapusTodo(todo.id));
            }}
            className="btn-delete-list"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
