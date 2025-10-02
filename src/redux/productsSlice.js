import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../apis/handleApis";
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (thunkAPI) => {
    try {
      let response = await getAllProducts();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
let initialState = {
  items: [],
  loading: false,
  error: null,
};
let productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers(builder) {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
const productsReducer = productsSlice.reducer;
export default productsReducer;
