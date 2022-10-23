import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  nama: "",
  role: "",
  remember_me: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleChanges: (state, action) => {
      state.id = action.payload.id;
      state.nama = action.payload.nama;
      state.role = action.payload.role;
      state.remember_me = action.payload.remember_me;
    },
  },
});

// console.log("userSlice = ", userSlice)

export const { handleChanges } = userSlice.actions;

export default userSlice.reducer;
