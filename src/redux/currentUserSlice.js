import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "waiyan",
  email: "abc@gmail.com",
  password: "abc",
};

export const currentUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      console.log(state);
      return action.payload;
    },
    clearCurrentUser: (state) => {
      return {};
    },
  },
});

export const { setCurrentUser, clearCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
