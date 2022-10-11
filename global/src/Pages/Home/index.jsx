/** Components */
import Header from "../../Components/Header";
import InputTodo from "../../Components/InputTodo";
import TodoList from "../../Components/TodoList";

/** Styles */
import styles from "./style.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header title="ToDoS" />
      <InputTodo />
      <TodoList />
    </div>
  );
};

export default Home;
