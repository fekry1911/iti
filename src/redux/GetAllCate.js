import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCate, getProductById } from "../apis/handleApis";

export const getAllCategory = createAsyncThunk(
  "cate/getCate",
  async (thunkAPI) => {
    try {
      let response = await getAllCate();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
let initialState = {
  itemOfCate: [],
  loadingCate: false,
  error: null,
};

const cateSlice = createSlice({
  name: "cate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategory.pending, (state) => {
        state.loadingCate = true;
        state.error = null;
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.loadingCate = false;
        state.itemOfCate = action.payload;
      })
      .addCase(getAllCategory.rejected, (state, action) => {
        state.loadingCate = false;
        state.error = action.payload;
      });
  },
});
let CateReducer = cateSlice.reducer;
export default CateReducer;
