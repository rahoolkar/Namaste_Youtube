import { configureStore } from "@reduxjs/toolkit";
import barReducer from "./barSlice";

const reduxStore = configureStore({
  reducer: {
    bar: barReducer,
  },
});

export default reduxStore;
