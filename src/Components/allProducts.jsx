import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardComponent from "../SharedComponents/cardCompo";
import style from "../styles/products.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import AnimationLoadingCompo from "../SharedComponents/animationLoadingCompo";

export default function AllProducts() {
  const { items, loading } = useSelector((state) => state.products);
  const [sortedArray, setSortedArray] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [range, setRange] = useState([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);

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

  const filteredProducts = sortedArray.filter(
    (item) => item.price >= range[0] && item.price <= range[1]
  );

  return (
    <div className="container mt-3">
      <div
        className="d-flex justify-content-between align-items-center mb-3"
        style={{ gap: "10px" }}
      >
        <Button variant="outline-primary" onClick={() => setShowFilters(true)}>
          Filters
        </Button>

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
        </DropdownButton>
      </div>

      <Offcanvas
        show={showFilters}
        onHide={() => setShowFilters(false)}
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter Products</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6>Price Range</h6>
          <RangeSlider
            min={0}
            max={1000}
            step={10}
            value={range}
            onInput={(newRange) => setRange(newRange)}
          />
          <p className="mt-3">
            <b>Min:</b> {range[0]} | <b>Max:</b> {range[1]}
          </p>

          <Button
            variant="primary"
            className="mt-3 w-100"
            onClick={() => setShowFilters(false)}
          >
            Apply
          </Button>
        </Offcanvas.Body>
      </Offcanvas>

      <div className={`${style.allProducts} row gx-3 mb-5`}>
        {loading ? (
          <AnimationLoadingCompo />
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div key={item.id} className="col-6 col-md-3 col-lg-2 d-flex">
              <CardComponent item={item} className="flex-fill h-100" />
            </div>
          ))
        ) : (
          <p className="text-center mt-5 text-muted">
            No products found in this price range.
          </p>
        )}
      </div>
    </div>
  );
}
