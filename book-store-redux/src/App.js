import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/App.css";

import { Header, InputGroup, Book } from "./components";

function App() {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-md-6 mx-auto">
          <Header />
          <InputGroup />
          <Book />
        </div>
      </div>
    </div>
  );
}

export default App;
