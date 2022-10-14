import { createSlice } from "@reduxjs/toolkit";

const postReducer = createSlice({
  name: "posts",
  initialState: {
    books: [],
  },
  reducers: {
    GET_POSTS: (state, actions) => {},
    CREATE_POST: (state, actions) => {},
    UPDATE_POST: (state, actions) => {},
    DELETE_POST: (state, actions) => {},
  },
});

export const { GET_POSTS, CREATE_POST, DELETE_POST, UPDATE_POST } = postReducer.actions;
export default postReducer.reducer;
