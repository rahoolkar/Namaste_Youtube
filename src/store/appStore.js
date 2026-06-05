import { configureStore } from "@reduxjs/toolkit";
import leftCategoryReducer from "./leftCategorySlice";
import selectedCategoryReducer from "./selectedCategorySlice";

const appStore = configureStore({
  reducer: {
    leftCategory: leftCategoryReducer,
    selectedCategory: selectedCategoryReducer,
  },
});

export default appStore;
