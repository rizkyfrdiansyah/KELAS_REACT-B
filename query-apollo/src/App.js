import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import InputIdPasengger from "./component/InputIdPasengger";
import Search from "./component/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="search" element={<Search />}>
        <Route path=":id" element={<InputIdPasengger />} />
      </Route>
    </Routes>
  );
}

export default App;
