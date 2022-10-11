import React from "react";

/** Styles */
import styles from "./style.module.css";

class TodoItem extends React.Component {
  render() {
    return (
      <div className={styles.todo_item}>
        {this.props.completed ? (
          <div className={styles.todo_text}>
            <input
              className={styles.todo_checkbox}
              type="checkbox"
              onChange={(e) => {
                this.props.onChangeCheckbox(e, this.props.id);
              }}
              checked
            />
            <label className={styles.todo_true}>{this.props.text}</label>
          </div>
        ) : (
          <div className={styles.todo_text}>
            <input
              className={styles.todo_checkbox}
              type="checkbox"
              onChange={(e) => {
                this.props.onChangeCheckbox(e, this.props.id);
              }}
            />
            <label className={styles.todo_false}>{this.props.text}</label>
          </div>
        )}

        <button
          className={styles.btn_delete}
          type="button"
          onClick={() => {
            this.props.deleteTodoItem(this.props.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default TodoItem;
