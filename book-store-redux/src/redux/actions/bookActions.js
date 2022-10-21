import axios from "axios";
import { GET_BOOKS, ADD_BOOK, REMOVE_BOOK, EDIT_BOOK } from "../reducers/bookSlice";

const URL = "https://633d4c8df2b0e623dc70a5c0.mockapi.io/v1/books";

const getBooksAsync = () => {
  return async (dispatch) => {
    try {
      const books = await axios({
        method: "get",
        url: URL,
      });

      dispatch(GET_BOOKS(books.data));
    } catch (err) {
      console.log(err);
    }
  };
};

const addBookAsync = (data) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        method: "post",
        url: URL,
        data,
      });

      dispatch(ADD_BOOK(result.data));
    } catch (err) {
      console.log(err);
    }
  };
};

const deleteBookAsync = (data) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        method: "delete",
        url: `${URL}/${+data}`,
      });

      dispatch(REMOVE_BOOK(+data));
    } catch (err) {
      console.log(err);
    }
  };
};

const editBookAsync = (id, data) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        method: "put",
        url: `${URL}/${+id}`,
        data: data,
      });

      dispatch(EDIT_BOOK(id, data));
    } catch (err) {
      console.log(err);
    }
  };
};

export { getBooksAsync, addBookAsync, deleteBookAsync, editBookAsync };
