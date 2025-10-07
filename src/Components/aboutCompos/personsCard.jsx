import React from "react";
import p1 from "../../assets/images/p1.png";

export default function PersonsCard({ image, name, title }) {
  return (
    <div className="justify-content-start">
      <img
        src={image}
        style={{
          width: "370px",
          height: "430px",
          borderRadius: "4px",
          marginBottom: "20px",
        }}
      />
      <h1
        style={{
          fontFamily: "Inter",
          fontWeight: 500,
          fontSize: "32px",
          lineHeight: "30px",
          letterSpacing: "0.04em",
          marginBottom: "20px",
        }}
      >
        {name}
      </h1>
      <p
        style={{
          fontFamily: "Poppins",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "0em",
        }}
      >
        {title}
      </p>
    </div>
  );
}
