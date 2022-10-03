import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

import { Provider } from "react-redux";
import store from "./redux/store";

import { CounterRedux } from "./components";

function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <CounterRedux></CounterRedux>
      </div>
    </Provider>
  );
}

export default App;
