import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_BOOK } from "../redux/reducers/bookSlice";

const InputGroup = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  const submitHandler = () => {
    let id = books[books.length - 1].id + 1;
    let price = 50000;
    let temp = {
      id,
      title,
      price,
    };
    dispatch(ADD_BOOK(temp));
  };

  return (
    <>
      <div className="text-center">
        <div className="input-group mb-3">
          <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" placeholder="Book's title" />
          <button onClick={submitHandler} className="btn btn-outline-primary" type="button">
            Input Book
          </button>
        </div>
        <div>{JSON.stringify(books)}</div>
      </div>
    </>
  );
};

export default InputGroup;
