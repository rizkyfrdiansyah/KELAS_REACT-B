import React from "react";
import ReactDOM from "react-dom";
// React Router Dom
import { BrowserRouter } from "react-router-dom";
// Apollo Client
import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client";
/** React Redux */
import { Provider } from "react-redux";
/** Store */
import store from "./store";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
