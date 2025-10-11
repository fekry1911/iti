import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import style from "../styles/productDetails.module.css";
import SharedButton from "../SharedComponents/sharedButton";
import Counter from "./counter";
import free from "../assets/images/free.png";
import AnimationLoadingCompo from "../SharedComponents/animationLoadingCompo";
import { getOneProduct } from "../redux/getProductSlice";
import { addItemToCart } from "../redux/addToCartSlice";
import { removeItemFromCart } from "../redux/removeFromCart";
import { addItemToWishList } from "../redux/addToWishList";
import { removeItemFromWish } from "../redux/removeFromWish";
import { CartContext } from "../context/cartContext";
import { WishContext } from "../context/wishContext";
import styleButton from "../styles/sharedButton.module.css";

export default function ProductDetails() {
  const { items, setItems } = useContext(CartContext);
  const { allWishitems, setWishItems } = useContext(WishContext);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { item, loading } = useSelector((state) => state.product);

  const [mainImage, setMainImage] = useState(null);
  const [foundInCart, setFoundInCart] = useState(false);
  const [foundInWish, setFoundInWish] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (item?.images?.length > 0) setMainImage(item.images[0]);
  }, [item]);

  useEffect(() => {
    const inCart = items?.some((p) => String(p.id) === String(id));
    setFoundInCart(inCart);
  }, [items, id]);

  useEffect(() => {
    const inWish = allWishitems?.some((p) => String(p.id) === String(id));
    setFoundInWish(inWish);
  }, [allWishitems, id]);

  const handleCartToggle = async () => {
    if (!item) return;
    try {
      if (foundInCart) {
        await dispatch(removeItemFromCart(id)).unwrap();
        setItems((prev) => prev.filter((p) => String(p.id) !== String(id)));
        setFoundInCart(false);
      } else {
        const newitem = { ...item, quantity: quantity };
        await dispatch(addItemToCart(newitem)).unwrap();
        setItems((prev) => [...prev, newitem]);
        setFoundInCart(true);
      }
    } catch (err) {
      console.error("Cart error:", err);
    }
  };

  const handleWishToggle = async () => {
    if (!item) return;
    try {
      if (foundInWish) {
        await dispatch(removeItemFromWish(id)).unwrap();
        setWishItems((prev) => prev.filter((p) => String(p.id) !== String(id)));
        setFoundInWish(false);
      } else {
        await dispatch(addItemToWishList(item)).unwrap();
        setWishItems((prev) => [...prev, item]);
        setFoundInWish(true);
      }
    } catch (err) {
      console.error("Wishlist error:", err);
    }
  };

  return (
    <>
      {loading ? (
        <AnimationLoadingCompo />
      ) : (
        <div
          style={{ height: "600px" }}
          className="row gx-5 mt-5 mb-5 container-fluid justify-content-around"
        >
          <div
            className="col-lg-2 col-md-4 col-12 d-flex flex-lg-column flex-md-column flex-row gap-3 flex-wrap justify-content-center"
            style={{ height: "100%", overflow: "hidden" }}
          >
            {item?.images?.map((img, index) => (
              <div
                key={index}
                className="w-100"
                style={{ flex: 1, minHeight: 0 }}
              >
                <img
                  onClick={() => setMainImage(img)}
                  src={img}
                  alt={`product-${index}`}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    borderRadius: "6px",
                    border: mainImage === img ? "2px solid #DB4444" : "none",
                    cursor: "pointer",
                  }}
                />
              </div>
            ))}
          </div>

          <div className="col-lg-5 col-md-7 col-12 me-5">
            <img
              style={{
                borderRadius: "10px",
                width: "100%",
                height: "600px",
                objectFit: "cover",
              }}
              src={mainImage || ""}
              alt="Main product"
            />
          </div>

          <div
            style={{ height: "600px", overflowY: "hidden" }}
            className="col-lg-4 col-12"
          >
            <p className={style.title}>{item.title}</p>

            <div className="d-flex justify-content-start align-items-center text-center">
              <div
                style={{
                  width: "100px",
                  height: "20px",
                  marginRight: "28px",
                  marginBottom: "27px",
                }}
              >
                <Rating name="half-rating" defaultValue={3} precision={0.5} />
              </div>
              <p className={style.reviwes} style={{ marginRight: "16px" }}>
                (150 Review)
              </p>
              <p className={style.reviwes} style={{ marginRight: "16px" }}>
                |
              </p>
              <p className={style.stock}>In Stock</p>
            </div>

            <p className={style.price}>$ {item.price}</p>
            <p className={style.desc}>{item.description}</p>
            <hr />

            <div className="row container mb-3 justify-content-between">
              <SharedButton
                className={
                  foundInCart ? styleButton.button : styleButton.button2
                }
                onClick={handleCartToggle}
                title={foundInCart ? "Remove From Cart" : "Add To Cart"}
              />
              <SharedButton
                className={
                  foundInWish ? styleButton.button : styleButton.button2
                }
                onClick={handleWishToggle}
                title={foundInWish ? "Remove From Wishlist" : "Add to Wishlist"}
              />
            </div>

            <div className="row container mb-3 justify-content-between">
              <Counter onChange={setQuantity} />
              <SharedButton className={styleButton.button2} title={"Buy Now"} />
            </div>

            <img
              className={style.image}
              style={{ objectFit: "contain" }}
              src={free}
              alt="Free shipping"
            />
          </div>
        </div>
      )}
    </>
  );
}
