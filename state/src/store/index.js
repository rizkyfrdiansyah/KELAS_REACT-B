import { configureStore } from "@reduxjs/toolkit";
import todoTaskReducer from "./TodoTask";

export default configureStore({
  reducer: {
    todoTask: todoTaskReducer,
  },
});
