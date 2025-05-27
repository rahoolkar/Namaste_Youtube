import { createSlice } from "@reduxjs/toolkit";

let chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addToMessage: (state, action) => {
        state.messages.splice(30,1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addToMessage } = chatSlice.actions;

export default chatSlice.reducer;
