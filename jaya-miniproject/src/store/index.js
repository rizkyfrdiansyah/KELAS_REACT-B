import { configureStore } from "@reduxjs/toolkit";
/** Reducer */
import contentsReducer from "./Contents";

export default configureStore({
  reducer: {
    contents: contentsReducer,
  },
});
