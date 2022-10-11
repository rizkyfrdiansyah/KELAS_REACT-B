/** Generate Random ID */
import { v4 as uuidv4 } from "uuid";

/** Styles */
import styles from "./style.module.css";

const InputTodo = ({ input, setInput, todos, setTodos }) => {
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("JALAN");
    e.preventDefault();
    input === ""
      ? alert("Inputan Tidak Boleh Kosong!!!")
      : setTodos([
          ...todos,
          {
            id: uuidv4(),
            title: input,
            completed: false,
          },
        ]);

    setInput("");
  };

  return (
    <form className={styles.form_input} onSubmit={handleSubmit}>
      <input className={styles.input_text_todo} type="text" value={input} placeholder="Add Todo..." onChange={handleInput} />
      <button className={styles.btn_submit_todo} type="submit">
        Submit
      </button>
    </form>
  );
};

export default InputTodo;
