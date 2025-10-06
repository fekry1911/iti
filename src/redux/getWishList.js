import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCarts, getWishList } from "../apis/handleApis";
export const GetAllItemsInWishList = createAsyncThunk(
  "WishList/getAll",
  async (_, thunkAPI) => {
    try {
      let response = await getWishList();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

let initialState = {
  wishItems: [],
  loading: false,
  error: null,
};
let getWishSlice = createSlice({
  name: "WishList",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(GetAllItemsInWishList.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetAllItemsInWishList.fulfilled, (state, action) => {
        state.loading = false;
        state.wishItems = action.payload;
      })
      .addCase(GetAllItemsInWishList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
let getWishReducer = getWishSlice.reducer;
export default getWishReducer;
