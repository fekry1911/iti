import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import registerReducer from "./registerSlice";
import productsReducer from "./productsSlice";
import productReducer from "./getProductSlice";
import addToCartReducer from "./addToCartSlice";
import getCartReducer from "./getCartSlice";
import removeFromCartReducer from "./removeFromCart";
import addToWishListReducer from "./addToWishList";
import getWishReducer from "./getWishList";
import removeFromWishReducer from "./removeFromWish";
import filterproductReducer from "./getFilterProducts";
import categReducer from "./grtProductsOfCategory";
import CateReducer from "./GetAllCate";

let store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    products: productsReducer,
    product: productReducer,
    cartItem: addToCartReducer,
    cartItems: getCartReducer,
    removeCart: removeFromCartReducer,
    addWishList: addToWishListReducer,
    getWish: getWishReducer,
    removeWish: removeFromWishReducer,
    filter: filterproductReducer,
    category: categReducer,
    allCate: CateReducer,
  },
});
export default store;
