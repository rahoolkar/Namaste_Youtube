import { configureStore } from "@reduxjs/toolkit";
import leftCategoryReducer from "./leftCategorySlice";

const appStore = configureStore({
  reducer: {
    leftCategory: leftCategoryReducer,
  },
});

export default appStore;
