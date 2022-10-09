import { useState } from "react";
import style from "./style.module.css";

const RoundedInput = (props) => {
  const [DataInput, setDataInput] = useState({
    title: "",
    completed: false,
  });

  const onChange = (e) => {
    let updatedValue = {};
    updatedValue["title"] = e.target.value;
    setDataInput((DataInput) => ({
      ...DataInput,
      ...updatedValue,
    }));
  };

  const onSubmit = () => {
    if (DataInput.title !== "") {
      props.handleSubmit(DataInput);
    } else {
      console.log("input kosong bray");
    }
  };

  return (
    <div className={style.InputWrapper}>
      <input type="text" placeholder="Add Todo.." className={style.InputTodo} name="title" onChange={onChange} />
      <button
        className={style.BtnTodo}
        onClick={() => {
          onSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default RoundedInput;
