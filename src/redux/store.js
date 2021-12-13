import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./currentUserSlice";
import itemReducer from "./itemSlice";
import dropdownReducer from "./cartDropdownSlice";

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    items: itemReducer,
    cartDropdown: dropdownReducer,
  },
});
