import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import style from "../styles/card.module.css";
import Rating from "@mui/material/Rating";
import image from "../assets/images/download.png";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../redux/addToCartSlice";
import { removeItemFromCart } from "../redux/removeFromCart";
import { addItemToWishList } from "../redux/addToWishList";
import { removeItemFromWish } from "../redux/removeFromWish";
import { CartContext } from "../context/cartContext";
import { WishContext } from "../context/wishContext";

function CardComponent({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, setItems } = useContext(CartContext);
  const { allWishitems, setWishItems } = useContext(WishContext);

  const [inCart, setInCart] = useState(false);
  const [inWish, setInWish] = useState(false);

  useEffect(() => {
    setInCart(items?.some((p) => String(p.id) === String(item.id)));
    setInWish(allWishitems?.some((p) => String(p.id) === String(item.id)));
  }, [items, allWishitems, item.id]);

  const handleCartToggle = async (e) => {
    e.stopPropagation();
    try {
      if (inCart) {
        await dispatch(removeItemFromCart(item.id)).unwrap();
        setItems((prev) =>
          prev.filter((p) => String(p.id) !== String(item.id))
        );
        setInCart(false);
      } else {
        const newItem = { ...item, quantity: 1 };
        await dispatch(addItemToCart(newItem)).unwrap();
        setItems((prev) => [...prev, newItem]);
        setInCart(true);
      }
    } catch (err) {
      console.error("Cart toggle error:", err);
    }
  };

  const handleWishToggle = async (e) => {
    e.stopPropagation();
    try {
      if (inWish) {
        await dispatch(removeItemFromWish(item.id)).unwrap();
        setWishItems((prev) =>
          prev.filter((p) => String(p.id) !== String(item.id))
        );
        setInWish(false);
      } else {
        await dispatch(addItemToWishList(item)).unwrap();
        setWishItems((prev) => [...prev, item]);
        setInWish(true);
      }
    } catch (err) {
      console.error("Wishlist toggle error:", err);
    }
  };

  return (
    <Card
      onClick={() => navigate(`/main/details/${item.id}`)}
      className={style.card}
      style={{
        width: "100%",
        maxHeight: "350px",
        marginBottom: "10px",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <div style={{ position: "absolute", top: "12px", right: "12px" }}>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            backgroundColor: "#FFFFFF",
            height: "34px",
            width: "34px",
            borderRadius: "50%",
            marginBottom: "8px",
            textAlign: "center",
            color: inWish ? "red" : "black",
            cursor: "pointer",
          }}
        >
          <FaHeart onClick={handleWishToggle} />
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            display: "flex",
            backgroundColor: "#FFFFFF",
            height: "34px",
            width: "34px",
            borderRadius: "50%",
            color: inCart ? "#7F5EFF" : "black",
            cursor: "pointer",
          }}
        >
          <FaShoppingCart onClick={handleCartToggle} />
        </div>
      </div>

      <Card.Img
        className={style.img}
        style={{
          height: "250px",
          objectFit: "cover",
          marginBottom: "10px",
          width: "100%",
          overflow: "hidden",
        }}
        alt={item.slug}
        src={item?.images?.[0] || image}
        onError={(e) => {
          e.target.src = image;
        }}
      />

      <Card.Body className="p-2">
        <Card.Title className={`${style.text} clamp-1`}>
          {item.title}
        </Card.Title>
        <Card.Text className={style.my_text}>$ {item.price}</Card.Text>
        <div style={{ width: "100px", height: "20px", marginBottom: "12px" }}>
          <Rating name="half-rating" defaultValue={3} precision={0.5} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
