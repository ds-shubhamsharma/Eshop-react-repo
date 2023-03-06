import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/slice/cartSlice";
import ProductSlice from "./slice/ProductSlice";

const store = configureStore({
  reducer: {
    products: ProductSlice,
    cart: cartReducer,
  },
});

export default store;
