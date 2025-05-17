import { createSlice } from "@reduxjs/toolkit";

const barSlice = createSlice({
  name: "bar",
  initialState: {
    expand: true,
  },
  reducers: {
    toggleExpand: (state) => {
      state.expand = !state.expand;
    },
    closeBar: (state) => {
      state.expand = false;
    },
  },
});

export let { toggleExpand, closeBar } = barSlice.actions;

export default barSlice.reducer;
