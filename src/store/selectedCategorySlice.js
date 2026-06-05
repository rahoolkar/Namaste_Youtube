import { createSlice } from "@reduxjs/toolkit";

const selectedCategorySlice = createSlice({
  name: "selectedCategory",
  initialState: {
    selected: "Home",
  },
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { setSelected } = selectedCategorySlice.actions;

export default selectedCategorySlice.reducer;
