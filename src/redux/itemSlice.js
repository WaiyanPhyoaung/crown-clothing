import { createSlice, current } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    setItem: (items, action) => {
      const existingItem = current(items).find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      const newItem = { ...action.payload, quantity: 1 };
      return [...items, newItem];
    },

    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clearItems: () => {
      return [];
    },
  },
});
export const { setItem, removeItem, clearItems } = itemSlice.actions;
export default itemSlice.reducer;
