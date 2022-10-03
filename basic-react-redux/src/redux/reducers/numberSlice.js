import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
  name: "number",
  initialState: {
    number: 0,
  },
  reducers: {
    add_number: (state) => {
      // code here
      state.number += 1;
    },
    substract_number: (state) => {
      // code here
      state.number -= 1;
    },
    add_by_fifty: (state, action) => {
      //   console.log(state, action);

      state.number += action.payload;
    },
  },
});

export const { add_number, substract_number, add_by_fifty } = numberSlice.actions;
export default numberSlice.reducer;
