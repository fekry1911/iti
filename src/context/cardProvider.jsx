import React, { useEffect, useState } from "react";
import { CartContext } from "../context/cartContext";
import { useDispatch, useSelector } from "react-redux";
import { GetAllItemsInCart } from "../redux/getCartSlice";

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const { cartItems, loading, error } = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllItemsInCart());
  }, [dispatch]);

  useEffect(() => {
    setItems(cartItems);
    console.log(cartItems);
  }, [cartItems]);
  const clearCart1 = () => setItems([]);

  return (
    <CartContext.Provider
      value={{ items, loading, error, setItems, clearCart1 }}
    >
      {children}
    </CartContext.Provider>
  );
}
