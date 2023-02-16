import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/slice/cartSlice";
import productsReducer from "../redux/slice/productsSlice";
import uiReducer from "../redux/slice/uiSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    ui: uiReducer
  }
});

export default store;
