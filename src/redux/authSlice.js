import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleLogin } from "../apis/handleApis";
export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    let response = await handleLogin(data);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
let initialState = {
  user: null,
  loading: false,
  error: null,
};
let AuthSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

let authReducer = AuthSlice.reducer;
export default authReducer;
