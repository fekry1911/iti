import React, { useEffect } from "react";
import SimpleSlider from "./slickCompo";
import CardComponent from "../SharedComponents/cardCompo";
import { useDispatch, useSelector } from "react-redux";
import AnimationLoadingCompo from "../SharedComponents/animationLoadingCompo";
import { getProducts } from "../redux/productsSlice";
import SideBarCombo from "./sideBarCombo";
import style from "../styles/products.module.css";

export default function HomeComponent() {
  let { items, loading, error } = useSelector((state) => state.products);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  let categories = [
    "Clothes",
    "Electronics",
    "Furniture",
    "Shoes",
    "Miscellaneous",
    "All",
  ];
  return (
    <div style={{ flex: 1 }} className="container">
      <SimpleSlider />
      <h3
        style={{
          alignItems: "center",
          textAlign: "center",
          margin: "50px 0px 30px 0px",
        }}
      >
        Our Products
      </h3>
      {loading ? (
        <AnimationLoadingCompo />
      ) : (
        <div className={`${style.allProducts} row gx-3 mb-5`}>
          {items.map(
            (item, index) =>
              index < 6 && (
                <div key={item.id} className="col-6 col-md-3 col-lg-2 d-flex">
                  <CardComponent item={item} className="flex-fill h-100" />
                </div>
              )
          )}
        </div>
      )}{" "}
      <div className="row text-center mb-5 g-3">
        {categories.map((item) => (
          <div className="col-6 col-md-3 col-lg-2">
            <SideBarCombo item={item} />
          </div>
        ))}
      </div>
      <h3
        style={{
          alignItems: "center",
          textAlign: "center",
          margin: "50px 0px 30px 0px",
        }}
      >
        All Products
      </h3>
      {loading ? (
        <AnimationLoadingCompo />
      ) : (
        <div className={`${style.allProducts} row gx-3 mb-5`}>
          {items.map((item, index) => (
            <div key={item.id} className="col-6 col-md-3 col-lg-2 d-flex">
              <CardComponent item={item} className="flex-fill h-100" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
