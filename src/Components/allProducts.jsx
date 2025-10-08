import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardComponent from "../SharedComponents/cardCompo";
import style from "../styles/products.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import AnimationLoadingCompo from "../SharedComponents/animationLoadingCompo";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { getFilterProduct } from "../redux/getFilterProducts";

export default function AllProducts() {
  const { items } = useSelector((state) => state.products);
  const { filteritems, loading } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const [sortedArray, setSortedArray] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [range, setRange] = useState([0, 10000]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(getFilterProduct({ min: range[0], max: range[1] }));
    }, 500);
    return () => clearTimeout(timeout);
  }, [range]);

  useEffect(() => {
    if (items && items.length > 0) {
      let sorted = [...items];
      if (sortOrder === "asc") {
        sorted.sort((a, b) => a.price - b.price);
      } else {
        sorted.sort((a, b) => b.price - a.price);
      }
      setSortedArray(sorted);
    }
  }, [items, sortOrder]);

  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "end",
          alignItems: "end",
          margin: "10px",
          right: "20px",
        }}
      >
        <DropdownButton
          variant="secondary"
          id="dropdown-basic-button"
          title="Sort By"
        >
          <Dropdown.Item onClick={() => setSortOrder("asc")}>
            Price: Low To High
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSortOrder("desc")}>
            Price: High To Low
          </Dropdown.Item>
          <Dropdown.Item onClick={(e) => e.stopPropagation()}>
            <div style={{ width: "300px" }}>
              <RangeSlider
                min={0}
                max={1000}
                step={10}
                value={range}
                onInput={(newRange) => setRange(newRange)}
              />

              <p style={{ margin: "30px" }}>
                💰 <b>Min:</b> {range[0]} | <b>Max:</b> {range[1]}
              </p>
            </div>
          </Dropdown.Item>
        </DropdownButton>
      </div>

      <div className={`${style.allProducts} row gx-3 mb-5`}>
        {loading ? (
          <AnimationLoadingCompo />
        ) : filteritems.length > 0 ? (
          filteritems.map((item) => (
            <div key={item.id} className="col-6 col-md-3 col-lg-2 d-flex">
              <CardComponent item={item} className="flex-fill h-100" />
            </div>
          ))
        ) : (
          sortedArray.map((item) => (
            <div key={item.id} className="col-6 col-md-3 col-lg-2 d-flex">
              <CardComponent item={item} className="flex-fill h-100" />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
