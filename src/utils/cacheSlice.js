import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
  name: "cache",
  initialState: {
    cache: {},
  },
  reducers: {
    addToCache: (state, action) => {
      state.cache = { ...action.payload, ...state.cache };
    },
  },
});

export const { addToCache } = cacheSlice.actions;

export default cacheSlice.reducer;
