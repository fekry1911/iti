import React, { useEffect, useState } from "react";
import { CartContext } from "../context/cartContext";
import { useDispatch, useSelector } from "react-redux";
import { GetAllItemsInCart } from "../redux/getCartSlice";
import { WishContext } from "./wishContext";
import { GetAllItemsInWishList } from "../redux/getWishList";

export default function WishProvider({ children }) {
  const [allWishitems, setWishItems] = useState([]);
  const { wishItems, loading, error } = useSelector((state) => state.getWish);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllItemsInWishList());
  }, [dispatch]);

  useEffect(() => {
    setWishItems(wishItems);
    console.log(wishItems);
  }, [wishItems]);
  const clearWishList1 = () => setWishItems([]);

  return (
    <WishContext.Provider
      value={{ allWishitems, loading, error, setWishItems, clearWishList1 }}
    >
      {children}
    </WishContext.Provider>
  );
}
