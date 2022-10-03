import React from "react";
import { useDispatch } from "react-redux";
import { add_number, substract_number, add_by_fifty } from "../redux/reducers/numberSlice";

const ButtonRedux = () => {
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(add_number());
  };

  const substractHandler = () => {
    dispatch(substract_number());
  };

  const addByFiftyHandler = (num) => {
    dispatch(add_by_fifty(num));
  };

  return (
    <>
      <button onClick={addHandler} className="btn btn-sm btn-success">
        + Add
      </button>
      <button onClick={substractHandler} className="btn btn-sm btn-danger">
        - Substract
      </button>
      <button onClick={() => addByFiftyHandler(50)} className="btn btn-sm btn-info">
        + Add 50
      </button>
    </>
  );
};

export default ButtonRedux;
