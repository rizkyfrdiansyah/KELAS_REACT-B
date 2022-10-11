import React from "react";

/** Generate Random ID */
import { v4 as uuidv4 } from "uuid";

/** Components */
import InputTodo from "../InputTodo";
import TodoItem from "../TodoItem";

/** Styles */
import styles from "./style.module.css";

import { dataTodos } from "../../dataTodos";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataTodos,
    };
  }

  deleteTodoItem = (id) => {
    const newListTodo = this.state.data.filter((item) => item.id !== id);

    this.setState({
      data: newListTodo,
    });
  };

  addTodoItem = (value) => {
    const newTodo = {
      id: uuidv4(),
      title: value,
      completed: false,
    };

    this.setState({
      data: [...this.state.data, newTodo],
    });
  };

  onChangeCheckbox = (e, id) => {
    const newListTodo = this.state.data.map((item) => {
      if (item.id === id) {
        return {
          id: item.id,
          title: item.title,
          completed: e.target.checked,
        };
      } else {
        return {
          id: item.id,
          title: item.title,
          completed: item.completed,
        };
      }
    });

    this.setState({
      data: newListTodo,
    });
  };

  render() {
    return (
      <div className={styles.container_list}>
        <InputTodo addTodoItem={this.addTodoItem} />
        {this.state.data.map((item) => {
          return <TodoItem key={item.id} id={item.id} text={item.title} completed={item.completed} deleteTodoItem={this.deleteTodoItem} onChangeCheckbox={this.onChangeCheckbox} />;
        })}
      </div>
    );
  }
}

export default TodoList;
