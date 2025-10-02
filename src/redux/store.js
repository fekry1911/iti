import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import registerReducer from "./registerSlice";
import productsReducer from "./productsSlice";

let store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    products: productsReducer,
  },
});
export default store;
