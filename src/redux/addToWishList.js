import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToWishList } from "../apis/handleApis";

export const addItemToWishList = createAsyncThunk(
  "WithListItems/addItem",
  async (product, thunkAPI) => {
    try {
      let response = await addToWishList(product);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

let initialState = {
  wishItem: [],
  loading: false,
  error: null,
};

let wishListSlice = createSlice({
  name: "WithListItems",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(addItemToWishList.pending, (state) => {
        state.loading = true;
      })
      .addCase(addItemToWishList.fulfilled, (state, action) => {
        state.loading = false;
        state.wishItem.push(action.payload);
      })
      .addCase(addItemToWishList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

let addToWishListReducer = wishListSlice.reducer;
export default addToWishListReducer;
