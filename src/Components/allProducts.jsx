import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CardComponent from "../SharedComponents/cardCompo";
import style from "../styles/products.module.css";

export default function AllProducts() {
  let { items } = useSelector((state) => state.products);
  useEffect(() => {
    console.log(items);
  });
  return (
    <div>
      <div className={`${style.allProducts} row gx-3 mb-5`}>
        {items.map((item, index) => (
          <div key={item.id} className="col-6 col-md-3 col-lg-2 d-flex">
            <CardComponent item={item} className="flex-fill h-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
