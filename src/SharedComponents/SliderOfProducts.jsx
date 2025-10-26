import React from "react";
import Slider from "react-slick";
import CardComponent from "./cardCompo";

export default function ProductsSlider({ products }) {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    dots: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: { slidesToShow: 5, slidesToScroll: 5 },
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4, slidesToScroll: 4 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <Slider {...settings} className="border rounded">
      {products.map((item) => (
        <div key={item.id} className="p-2">
          <CardComponent item={item} />
        </div>
      ))}
    </Slider>
  );
}
