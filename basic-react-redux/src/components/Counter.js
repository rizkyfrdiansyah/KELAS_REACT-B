import React, { useState } from "react";

import Button from "./Button";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const addHandler = (result) => {
    setNumber(result);
    console.log(result + " di ambil dari component Counter");
  };

  const substractHandler = (result) => {
    setNumber(result);
    console.log(result + " di ambil dari component Counter");
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h1>{number}</h1>
          <Button number={number} addHandler={addHandler} substractHandler={substractHandler}></Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
