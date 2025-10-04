import React, { useState } from "react";
import speakers from "../assets/images/speakers.png";
import Rating from "@mui/material/Rating";
import style from "../styles/productDetails.module.css";
import SharedButton from "../SharedComponents/sharedButton";
import Counter from "./counter";
import free from "../assets/images/free.png";

export default function ProductDetails({ product }) {
  const [mainImage, setMainImage] = useState(product.images[0]);

  function imageClick(image) {
    setMainImage(image);
  }
  return (
    <div style={{ height: "600px" }} className="row gx-5 mb-5">
      <div
        className="col-2 d-flex flex-column gap-3"
        style={{ height: "100%", overflow: "hidden" }}
      >
        {product.images.map((img, index) => (
          <div key={index} className="w-100" style={{ flex: 1, minHeight: 0 }}>
            <img
              onClick={() => imageClick(img)}
              src={img}
              alt={`product-${index}`}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "6px",
                border: mainImage === img ? "2px solid #DB4444" : "none",
              }}
            />
          </div>
        ))}
      </div>

      <div className="col-5 me-5">
        <img
          style={{
            borderRadius: "10px",
            width: "100%",
            height: "600px",
            objectFit: "cover",
          }}
          src={mainImage}
        />
      </div>

      <div style={{ height: "600px", overflowY: "hidden" }} className="col-4">
        <p className={style.title}>{product.title}</p>
        <div className="d-flex justify-content-start align-items-center text-center ">
          {" "}
          <div
            style={{
              width: "100px",
              height: "20px",
              marginRight: "28px",
              marginBottom: "20px",
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
        <p className={style.price}>$ {product.price}</p>
        <p className={style.desc}>{product.description}</p>
        <hr></hr>
        <div className="row container mb-2 justify-content-between">
          <SharedButton title={"add to cart"} />
          <SharedButton title={"add to WishList"} />
        </div>
        <div className="row container mb-3 justify-content-between">
          <Counter />
          <SharedButton title={"buy now"} />
        </div>
        <img
          style={{ height: "160px", width: "400px", bjectFit: "cover" }}
          src={free}
        />
      </div>
    </div>
  );
}
