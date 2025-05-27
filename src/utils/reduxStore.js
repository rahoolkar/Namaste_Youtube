import { configureStore } from "@reduxjs/toolkit";
import barReducer from "./barSlice";
import cacheReducer from "./cacheSlice";
import chatReducer from "./chatSlice";

const reduxStore = configureStore({
  reducer: {
    bar: barReducer,
    cache: cacheReducer,
    chat: chatReducer,
  },
});

export default reduxStore;
