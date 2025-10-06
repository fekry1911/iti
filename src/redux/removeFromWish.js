import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  removeItemFromCart as removeItemFromCartAPI,
  removeItemFromWishList,
} from "../apis/handleApis";

export const removeItemFromWish = createAsyncThunk(
  "removeFromwish/removeItem",
  async (id, thunkAPI) => {
    try {
      const response = await removeItemFromWishList(id);
      console.log(response);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Error removing item"
      );
    }
  }
);

const initialState = {
  wishItems: [],
  loading: false,
  error: null,
};

const removeFromWishtSlice = createSlice({
  name: "removeFromwish",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(removeItemFromWish.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeItemFromWish.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.wishItems = state.wishItems.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(removeItemFromWish.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
const removeFromWishReducer = removeFromWishtSlice.reducer;
export default removeFromWishReducer;
