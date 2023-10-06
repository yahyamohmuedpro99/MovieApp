import { createSlice } from "@reduxjs/toolkit";
const thelist = createSlice({
  name: "thelist",
  initialState: [14, 35],
  reducers: {
    addItem: (state, action) => {
      return [...state, action.payload];
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item !== action.payload);
    },
    resetItem: (state) => {
      return [];
    },
  },
});
export const { addItem, deleteItem, resetItem } = thelist.actions;
export default thelist.reducer;
