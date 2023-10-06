import { configureStore } from "@reduxjs/toolkit";
import thelist from "./thelist";
export default configureStore({
  reducer: { thelist: thelist },
});
