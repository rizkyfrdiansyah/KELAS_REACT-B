import { useDispatch, useSelector } from "react-redux";

/** Slices */
import { deleteTodo, checkedTodo } from "../../store/TodosSlice";

/** Styles */
import styles from "./style.module.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);

  const dispatch = useDispatch();

  return (
    <div className={styles.container_list}>
      {todos.map((todo) => {
        return (
          <div className={styles.todo_item} key={todo.id}>
            {todo.completed ? (
              <div className={styles.todo_text}>
                <input
                  className={styles.todo_checkbox}
                  type="checkbox"
                  onChange={(e) => {
                    dispatch(checkedTodo({ checked: e.target.checked, id: todo.id }));
                  }}
                  checked
                />
                <label className={styles.todo_true}>{todo.title}</label>
              </div>
            ) : (
              <div className={styles.todo_text}>
                <input
                  className={styles.todo_checkbox}
                  type="checkbox"
                  onChange={(e) => {
                    dispatch(checkedTodo({ checked: e.target.checked, id: todo.id }));
                  }}
                />
                <label className={styles.todo_false}>{todo.title}</label>
              </div>
            )}

            <button
              className={styles.btn_delete}
              type="button"
              onClick={() => {
                dispatch(deleteTodo(todo.id));
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
