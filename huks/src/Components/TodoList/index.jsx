/** Styles */
import styles from "./style.module.css";

const TodoList = ({ todos, setTodos }) => {
  const handleCheckbox = (checked, id) => {
    const newListTodo = todos.map((todo) => {
      if (todo.id === id) {
        return {
          id: todo.id,
          title: todo.title,
          completed: checked,
        };
      } else {
        return {
          id: todo.id,
          title: todo.title,
          completed: todo.completed,
        };
      }
    });

    setTodos(newListTodo);
  };

  const handleDelete = (id) => {
    const newListTodo = todos.filter((todo) => todo.id !== id);

    setTodos(newListTodo);
  };

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
                    handleCheckbox(e.target.checked, todo.id);
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
                    handleCheckbox(e.target.checked, todo.id);
                  }}
                />
                <label className={styles.todo_false}>{todo.title}</label>
              </div>
            )}

            <button
              className={styles.btn_delete}
              type="button"
              onClick={() => {
                handleDelete(todo.id);
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
