import { configureStore } from "@reduxjs/toolkit";
import barReducer from "./barSlice";
import cacheReducer from "./cacheSlice";

const reduxStore = configureStore({
  reducer: {
    bar: barReducer,
    cache: cacheReducer,
  },
});

export default reduxStore;
