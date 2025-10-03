import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import style from "../styles/card.module.css";
import Rating from "@mui/material/Rating";
import image from "../assets/images/download.png";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

function CardComponent({ item }) {
  return (
    <Card
      className={style.card}
      style={{
        maxWidth: "270px",
        maxHeight: "350px",
        marginBottom: "10px",
        position: "relative",
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
          }}
        >
          <FaHeart />
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
          }}
        >
          <FaShoppingCart />
        </div>
      </div>

      <Card.Img
        style={{
          height: "250px",
          objectFit: "cover",
          marginBottom: "16px",
          width: "100%",
          overflow: "hidden",
        }}
        alt={item.slug}
        src={item.images[0]}
        onError={(e) => {
          e.target.src = image;
        }}
      />

      <Card.Body className="p-2 ">
        <Card.Title className={`${style.text} clamp-1`}>
          {item.title}
        </Card.Title>
        <Card.Text className={style.my_text}>$ {item.price}</Card.Text>
        <div style={{ width: "100px", height: "20px" }}>
          <Rating name="half-rating" defaultValue={3} precision={0.5} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
