import React from "react";

const Button = (props) => {
  const { number, addHandler, substractHandler } = props;

  return (
    <>
      <button onClick={() => addHandler(number + 1)} className="btn btn-sm btn-success">
        + Add
      </button>
      <button onClick={() => substractHandler(number - 1)} className="btn btn-sm btn-danger">
        - Substract
      </button>
    </>
  );
};

export default Button;
