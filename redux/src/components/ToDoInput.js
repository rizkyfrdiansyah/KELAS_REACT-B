import { useState } from "react";
import { useDispatch } from "react-redux";
import { tambahTodo } from "../store/todoSlice";

function ToDoInput(props) {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    id: "",
    title: "",
    completed: true,
  });

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formIsNotEmpty = data.title;
    if (formIsNotEmpty) {
      const newData = {
        title: data.title,
        completed: data.completed,
      };
      dispatch(tambahTodo(newData));
      setData({
        title: "",
        completed: true,
      });
    } else {
      alert("Data masih kosong");
    }
  };

  return (
    <div className="container-todo">
      <input
        type="text"
        name="title"
        placeholder="Add todo..."
        value={data.title}
        onChange={(e) => {
          onChange(e);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ToDoInput;
