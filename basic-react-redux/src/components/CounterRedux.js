import React from "react";
import { useSelector } from "react-redux";

import ButtonRedux from "./ButtonRedux";

const CounterRedux = () => {
  const { number } = useSelector((state) => state.number);

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h1>{number}</h1>
          <ButtonRedux></ButtonRedux>
        </div>
      </div>
    </div>
  );
};

export default CounterRedux;
