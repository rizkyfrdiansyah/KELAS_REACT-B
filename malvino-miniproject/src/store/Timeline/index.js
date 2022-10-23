import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timeline: [
    {
      title: "Pendaftaran",
      date: "20 April 2022 - 15 Mei 2022",
    },
    {
      title: "Penyisihan",
      date: "22 Mei 2022",
    },
    {
      title: "Pengumuman Finalis",
      date: "29 Mei 2022",
    },
    {
      title: "Final",
      date: "7 Juni 2022",
    },
    {
      title: "Pengumuman Pemenang",
      date: "14 Juni 2022",
    },
  ],
};

const timelineReducer = createSlice({
  name: "timeline",
  initialState,
  reducers: {
    editTimeline: (state, action) => {
      state.timeline = action.payload;
    },
  },
});

export const { editTimeline } = timelineReducer.actions;

export default timelineReducer.reducer;
