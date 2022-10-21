import { createSlice } from "@reduxjs/toolkit";

const bookReducer = createSlice({
  name: "books",
  initialState: {
    books: [],
  },
  reducers: {
    GET_BOOKS: (state, actions) => {
      //
      state.books = [...actions.payload];
    },
    ADD_BOOK: (state, actions) => {
      //
      state.books = [...state.books, actions.payload];
    },
    REMOVE_BOOK: (state, actions) => {
      //
      state.books = state.books.filter((book) => book.id !== actions.payload);
    },
    EDIT_BOOK: (state, actions) => {
      //
      state.books = state.books.map((book) => {
        const { title, image, price, genre } = actions.payload.data;
        if (book.id === actions.payload.id) {
          book.title = title;
          book.image = image;
          book.price = price;
          book.genre = genre;
        }
        return book;
      });
    },
  },
});

export const { GET_BOOKS, ADD_BOOK, REMOVE_BOOK, EDIT_BOOK } = bookReducer.actions;
export default bookReducer.reducer;
