import React from "react";

/** Components */
import Header from "../../Components/Header";
import TodoList from "../../Components/TodoList";

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <TodoList />
      </>
    );
  }
}

export default Home;
