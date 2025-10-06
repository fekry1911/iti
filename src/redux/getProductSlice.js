import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductById } from "../apis/handleApis";

export const getOneProduct = createAsyncThunk(
  "product/getProduct",
  async (id, thunkAPI) => {
    try {
      let response = await getProductById(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
let initialState = {
  item: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOneProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      })
      .addCase(getOneProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
let productReducer = productSlice.reducer;
export default productReducer;
