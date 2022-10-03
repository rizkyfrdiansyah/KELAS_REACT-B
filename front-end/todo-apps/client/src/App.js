import React from "react";
import "./App.css";

import { Header, Todo } from "./components";

function App() {
  return (
    <div className="container">
      <div className="container-flex">
        <Header></Header>
        <Todo></Todo>
      </div>
    </div>
  );
}

export default App;
