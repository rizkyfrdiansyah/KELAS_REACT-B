import { Component } from "react";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import SearchPassanger from "./SearchPassanger";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <ListPassenger />
        <SearchPassanger />
      </div>
    );
  }
}

export default Home;
