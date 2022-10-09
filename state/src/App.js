import { React } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./components/Title";
import Input from "./components/Input";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <Title />
      <Input />
      <Todo />
    </>
  );
}

export default App;
