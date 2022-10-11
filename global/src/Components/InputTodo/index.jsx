import { useState } from "react";
import { useDispatch } from "react-redux";

/** Slices */
import { addTodo } from "../../store/TodosSlice";

/** Styles */
import styles from "./style.module.css";

const InputTodo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  return (
    <form className={styles.form_input} onSubmit={(e) => dispatch(addTodo({ input, e }), setInput(""))}>
      <input className={styles.input_text_todo} type="text" value={input} placeholder="Add todo..." onChange={(e) => setInput(e.target.value)} />
      <button className={styles.btn_submit_todo} type="submit">
        Submit
      </button>
    </form>
  );
};

export default InputTodo;
