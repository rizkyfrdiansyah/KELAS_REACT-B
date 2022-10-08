import { createSlice } from "@reduxjs/toolkit";
import { getBooks } from "../actions/bookActions";

const bookReducer = createSlice({
  name: "books",
  initialState: {
    books: [],
  },
  reducers: {
    GET_BOOKS: (state) => {
      //
      getBooks((result) => {
        state.books = [result];
      });
    },
    ADD_BOOK: (state, actions) => {
      //
      state.books = [...state.books, actions.payload];
    },
    REMOVE__BOOK: (state, actions) => {
      //
    },
    EDIT_BOOK: (state, actions) => {
      //
    },
  },
});

export const { GET_BOOKS, ADD_BOOK, REMOVE__BOOK, EDIT_BOOK } = bookReducer.actions;
export default bookReducer.reducer;
