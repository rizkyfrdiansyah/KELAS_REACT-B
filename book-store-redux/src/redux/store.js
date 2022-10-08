import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./reducers/bookSlice";

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;
