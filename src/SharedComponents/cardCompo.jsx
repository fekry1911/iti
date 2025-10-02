import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import style from "../styles/card.module.css";
import Rating from "@mui/material/Rating";
import image from "../assets/images/download.png";

function CardComponent({ item }) {
  return (
    <Card
      className={style.card}
      style={{
        maxWidth: "270px",
        maxHeight: "350px",
        marginBottom: "10px",
      }}
    >
      <Card.Img
        variant="top"
        style={{
          maxHeight: "250px",
          objectFit: "cover",
          marginBottom: "16px",
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
