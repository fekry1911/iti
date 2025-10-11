import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProductsInCate, getProductById } from "../apis/handleApis";

export const getProductOfCategory = createAsyncThunk(
  "category/getProduct",
  async (id, thunkAPI) => {
    try {
      let response = await getAllProductsInCate(id);
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

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductOfCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductOfCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getProductOfCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
let categReducer = categorySlice.reducer;
export default categReducer;
