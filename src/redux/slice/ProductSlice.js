import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../../context/Status";
// const base_url = "https://fakestoreapi.com/";
const base_url="https://dummyjson.com";
const initialState = {
  status: "",
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      });
  },
});

//fetching product using build in thunk on toolkit

export const fetchProducts = createAsyncThunk("fetch/prodcuts", async () => {
  const data = await axios.get(`${base_url}/products`).then((res) => res.data);
  console.log('data', data)
  return data;
});


export default productSlice.reducer;
