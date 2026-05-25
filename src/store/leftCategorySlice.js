import { createSlice } from "@reduxjs/toolkit";

const leftCategorySlice = createSlice({
  name: "leftCategory",
  initialState: {
    shouldExpand: true,
  },
  reducers: {
    toggleLeftCatergory: function (state) {
      if (state.shouldExpand) {
        state.shouldExpand = false;
      } else {
        state.shouldExpand = true;
      }
    },
    collapseLeftCatergory: function (state) {
      state.shouldExpand = false;
    },
  },
});

export const {toggleLeftCatergory,collapseLeftCatergory} = leftCategorySlice.actions;

export default leftCategorySlice.reducer;
