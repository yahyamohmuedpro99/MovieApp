import { createSlice } from "@reduxjs/toolkit";
const thelist = createSlice({
  name: "thelist",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      if (state.includes(action.payload)) return state;
      else return [...state, action.payload];
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item !== action.payload);
    },
    resetItem: () => {
      return [];
    },
  },
});
export const { addItem, deleteItem, resetItem } = thelist.actions;
export default thelist.reducer;
