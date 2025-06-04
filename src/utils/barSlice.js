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
    openBar: (state) => {
      state.expand = true;
    },
  },
});

export let { toggleExpand, closeBar, openBar } = barSlice.actions;

export default barSlice.reducer;
