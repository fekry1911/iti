import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import registerReducer from "./registerSlice";

let store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
  },
});
export default store;
