import { createSlice } from "@reduxjs/toolkit";

const cartDropdownSlice = createSlice({
  name: "cart-dropdown",
  initialState: false,
  reducers: {
    toggleDropdown: (state) => {
      console.log(state);
      return !state;
    },
  },
});

export const { toggleDropdown } = cartDropdownSlice.actions;
export default cartDropdownSlice.reducer;
