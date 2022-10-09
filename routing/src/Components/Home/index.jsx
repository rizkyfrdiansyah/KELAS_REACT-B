import { useState } from "react";
import style from "./style.module.css";
import RoundedInput from "../RoundedInput";
import ListTodo from "../ListTodo";

const Home = () => {
  const data = [
    {
      id: 1,
      title: "Mengerjakan Execise",
      completed: true,
    },
    {
      id: 2,
      title: "Mengerjakan Homework",
      completed: true,
    },
  ];

  const [DataTodo, setDataTodo] = useState(data);

  const handleSubmit = (newTast) => {
    let newTask;
    const updatedList = [...DataTodo];
    if (DataTodo.length === 0) {
      newTask = { id: 1, ...newTast };
    } else {
      newTask = { id: DataTodo[DataTodo.length - 1].id + 1, ...newTast };
    }
    updatedList.push(newTask);
    setDataTodo(updatedList);
  };

  const handleChange = (changes) => {
    const newData = DataTodo.map((data) => {
      if (data.id === changes.id) {
        if (data.completed) {
          data.completed = false;
        } else {
          data.completed = true;
        }
      }
      return data;
    });
    setDataTodo(newData);
  };

  const handleDel = (id) => {
    const newData = DataTodo.filter((data) => data.id !== id);
    setDataTodo(newData);
  };

  return (
    <div>
      <div className={style.Wrapper}>
        <h1 className={style.Gradasi}>TODOS</h1>
      </div>
      <RoundedInput handleSubmit={handleSubmit} />
      {DataTodo.map((data, dataIdx) => (
        <ListTodo key={dataIdx} data={data} handleChange={handleChange} handleDel={handleDel} />
      ))}
    </div>
  );
};

export default Home;
