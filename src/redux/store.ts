import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import basketSlice from "./basketSlice";

const store = configureStore({
    reducer: {
      product: productSlice.reducer,
      basket: basketSlice.reducer,
    },
  });
export default store