import React, { useEffect } from "react";
import SimpleSlider from "./slickCompo";
import CardComponent from "../SharedComponents/cardCompo";
import { useDispatch, useSelector } from "react-redux";
import AnimationLoadingCompo from "../SharedComponents/animationLoadingCompo";
import { getProducts } from "../redux/productsSlice";
import SideBarCombo from "./sideBarCombo";
import style from "../styles/products.module.css";
import Flags from "../SharedComponents/flags";
import Title from "./title";
import Button from "react-bootstrap/Button";
import shoes from "../assets/categ/shoes.png";
import all from "../assets/categ/all.png";
import elec from "../assets/categ/elec.png";
import clothes from "../assets/categ/clothes.png";
import furnitures from "../assets/categ/furnitures.png";
import miscellaneous from "../assets/categ/miscellaneous.png";
import Enhance from "./enhance";
import Arrivals from "./arrivals";
import InfoCompo from "./infoCompo";
import { useNavigate } from "react-router";
import delivery from "../assets/images/delivery.png";
import head from "../assets/images/head.png";
import shield from "../assets/images/shield.png";

export default function HomeComponent() {
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
  let images1 = [delivery, head, shield];
  let { items, loading, error } = useSelector((state) => state.products);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    if (items.length == 0) {
      dispatch(getProducts());
    }
  }, []);
  let images = [clothes, elec, furnitures, shoes, miscellaneous, all];
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
      <Flags title={"Today's"} />
      <Title title={"Flash Sales"} />

      {loading ? (
        <AnimationLoadingCompo />
      ) : (
        <>
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
          <div
            style={{ width: "100%" }}
            className="mb-5 d-flex justify-content-center align-items-center "
          >
            <Button
              onClick={() => navigate("all")}
              className={`${style.button} mb-3`}
            >
              View All Products
            </Button>
          </div>
        </>
      )}
      <hr></hr>
      <Flags title={"Categories"} />
      <Title title={"Browse By Category"} />
      <div className="row   mb-5 g-3">
        {categories.map((item, index) => (
          <div className="col-6 col-md-3 col-lg-2">
            <SideBarCombo item={item} image={images[index]} />
          </div>
        ))}
      </div>
      <hr></hr>

      <Flags title={"This Month"} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Title title={"Best Selling Products"} />
        <Button
          onClick={() => navigate("all")}
          className={`${style.button2} mb-3`}
        >
          View All
        </Button>
      </div>
      {loading ? (
        <AnimationLoadingCompo />
      ) : (
        <div className={`${style.allProducts} row gx-3 mb-5`}>
          {items.map(
            (item, index) =>
              index > 6 &&
              index < 13 && (
                <div key={item.id} className="col-6 col-md-3 col-lg-2 d-flex">
                  <CardComponent item={item} className="flex-fill h-100" />
                </div>
              )
          )}
        </div>
      )}
      <Enhance />
      <Flags title={"Our Products"} />
      <Title title={"Explore Our Products"} />
      {loading ? (
        <AnimationLoadingCompo />
      ) : (
        <div className={`${style.allProducts} row gx-3 mb-5`}>
          {items.map(
            (item, index) =>
              index > 6 &&
              index < 19 && (
                <div key={item.id} className="col-6 col-md-3 col-lg-2 d-flex">
                  <CardComponent item={item} className="flex-fill h-100" />
                </div>
              )
          )}
          <div
            style={{ width: "100%" }}
            className="mb-5 mt-5 d-flex justify-content-center align-items-center "
          >
            <Button
              onClick={() => navigate("all")}
              className={`${style.button} mb-3`}
            >
              View All Products
            </Button>
          </div>
        </div>
      )}
      <Flags title={"Featured"} />
      <Title title={"New Arrival"} />
      <Arrivals />
      <InfoCompo images={images1} titles={titles} texts={texts} />
    </div>
  );
}
