import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooksAsync, deleteBookAsync } from "../redux/actions/bookActions";

const Books = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAsync());
    // console.log(books);
  }, []);

  const deleteHandler = (id) => {
    // console.log(id);
    dispatch(deleteBookAsync(id));
  };

  return (
    <>
      <div className="p-3">
        {/* {JSON.stringify(books)} */}
        {books.map((book) => {
          const { id, title, price, image, genre } = book;
          return (
            <div className="card p-1 my-2">
              <div className="w-100 d-flex align-items-center justify-content-start">
                <div className="w-25">
                  <img className="img-fluid rounded me-3" src={"https://via.placeholder.com/100"} alt="tes" />
                </div>
                <div className="w-75">
                  <h3>{title}</h3>
                  <p className="font-weight-bold">Rp. {price}</p>
                  <small className="badge bg-primary">{genre}</small>
                  <button onClick={() => deleteHandler(id)} className="btn btn-sm btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Books;
