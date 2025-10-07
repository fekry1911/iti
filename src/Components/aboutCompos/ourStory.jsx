import React from "react";
import image from "../../assets/images/ourStory.png";

export default function OurStory() {
  return (
    <div
      className="container-fluid d-flex flex-wrap justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        padding: "60px 5%",
      }}
    >
      <div className="col-lg-6 col-12" style={{ padding: "20px" }}>
        <h1
          style={{
            fontWeight: 600,
            fontSize: "54px",
            lineHeight: "64px",
            letterSpacing: "0.06em",
            textAlign: "left",
            marginBottom: "30px",
            color: "#222",
          }}
        >
          Our Story
        </h1>

        <p
          style={{
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "26px",
            letterSpacing: "0em",
            marginBottom: "20px",
            color: "#555",
          }}
        >
          Launched in 2015, <b>Exclusive</b> is South Asia’s premier online
          shopping marketplace with an active presence in Bangladesh. Supported
          by a wide range of tailored marketing, data, and service solutions,
          Exclusive has 10,500 sellers and 300 brands, serving over 3 million
          customers across the region.
        </p>

        <p
          style={{
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "26px",
            letterSpacing: "0em",
            color: "#555",
          }}
        >
          Exclusive offers more than 1 million products and continues to grow
          rapidly — bringing customers a diverse assortment of categories from
          fashion to electronics and beyond.
        </p>
      </div>

      <div
        className="col-lg-6 col-12 d-flex justify-content-center"
        style={{ padding: "20px" }}
      >
        <img
          src={image}
          alt="Our Story"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "16px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
