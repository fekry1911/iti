import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFilterProducts, getProductById } from "../apis/handleApis";

export const getFilterProduct = createAsyncThunk(
  "FilterProducts/getFilterProduct",
  async ({ min, max }, thunkAPI) => {
    try {
      let response = await getFilterProducts(min, max);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
let initialState = {
  filteritems: [],
  loading: false,
  error: null,
};

const filterproductSlice = createSlice({
  name: "FilterProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFilterProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFilterProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.filteritems = action.payload;
      })
      .addCase(getFilterProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
let filterproductReducer = filterproductSlice.reducer;
export default filterproductReducer;
