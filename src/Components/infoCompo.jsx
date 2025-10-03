import React from "react";
import delivery from "../assets/images/delivery.png";
import head from "../assets/images/head.png";
import shield from "../assets/images/shield.png";
import Info from "./info";

export default function InfoCompo() {
  let titles = [
    "FREE AND FAST DELIVERY",
    "24/7 CUSTOMER SERVICE",
    "MONEY BACK GUARANTEE",
  ];
  let texts = [
    "Free delivery for all orders over $140",
    "Friendly 24/7 customer support",
    "We return money within 30 days",
  ];
  let images = [delivery, head, shield];

  return (
    <div className="row text-center">
      {titles.map((item, index) => (
        <div key={index} className="col-12 col-md-4 mb-3">
          <Info img={images[index]} title={item} text={texts[index]} />
        </div>
      ))}
    </div>
  );
}
