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
  },
});

export let { toggleExpand } = barSlice.actions;

export default barSlice.reducer;
