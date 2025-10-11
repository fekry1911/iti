import React, { useEffect, useState } from "react";
import CardComponent from "../SharedComponents/cardCompo";
import style from "../styles/products.module.css";
import AnimationLoadingCompo from "../SharedComponents/animationLoadingCompo";
import "react-range-slider-input/dist/style.css";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProductOfCategory } from "../redux/grtProductsOfCategory";

export default function AllProductsInCateg() {
  const { items, loading } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(getProductOfCategory(id));
    console.log(items);
  }, [id]);

  return (
    <div>
      <div className={`${style.allProducts} row gx-3 mb-5`}>
        {loading ? (
          <AnimationLoadingCompo />
        ) : (
          items.map((item) => (
            <div key={item.id} className="col-6 col-md-3 col-lg-2 d-flex">
              <CardComponent item={item} className="flex-fill h-100" />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
