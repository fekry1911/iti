import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCart } from "../apis/handleApis";

export const addItemToCart = createAsyncThunk(
  "cart/addItem",
  async (product, thunkAPI) => {
    try {
      let response = await addToCart(product);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

let initialState = {
  cartItem: [],
  loading: false,
  error: null,
};

let cartSlice = createSlice({
  name: "cartItem",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(addItemToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItem.push(action.payload);
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

let addToCartReducer = cartSlice.reducer;
export default addToCartReducer;
