import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { removeItemFromCart as removeItemFromCartAPI } from "../apis/handleApis";

export const removeItemFromCart = createAsyncThunk(
  "removeFromCart/removeItem",
  async (id, thunkAPI) => {
    try {
      const response = await removeItemFromCartAPI(id);
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
  cartItems: [],
  loading: false,
  error: null,
};

const removeFromCartSlice = createSlice({
  name: "removeFromCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(removeItemFromCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(removeItemFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
const removeFromCartReducer = removeFromCartSlice.reducer;
export default removeFromCartReducer;
