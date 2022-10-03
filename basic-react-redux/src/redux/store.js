import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./reducers/numberSlice";
import todoReducer from "./reducers/todoSlice";

const store = configureStore({
  reducer: {
    number: numberReducer,
    todo: todoReducer,
  },
});

export default store;
