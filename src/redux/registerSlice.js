import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleRegister } from "../apis/handleApis";
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data, thunkAPI) => {
    try {
      let response = await handleRegister(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
let initialState = {
  user: {
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
    gender: 0,
  },
  loading: false,
  error: null,
};
let registerSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

let registerReducer = registerSlice.reducer;
export default registerReducer;
