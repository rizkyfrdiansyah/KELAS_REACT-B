import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_BOOKS } from "../redux/reducers/bookSlice";

const Books = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_BOOKS());
    console.log(books);
  }, []);

  return (
    <>
      <div className="p-3">
        {JSON.stringify(books)}
        {/* {books.map((book) => {
          const { id, title, price, image, genre } = book;
          return (
            <div className="card p-1">
              <div className="w-100 d-flex align-items-center justify-content-start">
                <div className="w-25">
                  <img className="img-fluid rounded" src={image} />
                </div>
                <div className="w-75">
                  <h3>{title}</h3>
                  <p className="font-weight-bold">Rp. {price}</p>
                  <small className="badge bg-primary">{genre}</small>
                </div>
              </div>
            </div>
          );
        })} */}
      </div>
    </>
  );
};

export default Books;
