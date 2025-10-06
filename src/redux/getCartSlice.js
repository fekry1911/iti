import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCarts } from "../apis/handleApis";
export const GetAllItemsInCart = createAsyncThunk(
  "cartItems/getAll",
  async (_, thunkAPI) => {
    try {
      let response = await getCarts();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

let initialState = {
  cartItems: [],
  loading: false,
  error: null,
};
let getCartSlice = createSlice({
  name: "cartItems",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(GetAllItemsInCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetAllItemsInCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload;
      })
      .addCase(GetAllItemsInCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
let getCartReducer = getCartSlice.reducer;
export default getCartReducer;
