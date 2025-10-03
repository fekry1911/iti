import React from "react";
import image from "../assets/images/enhance.png";

export default function Enhance() {
  return (
    <div style={{ maxHeight: "500px", width: "100%", margin: "80px 0" }}>
      <img
        style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
        src={image}
      />
    </div>
  );
}
