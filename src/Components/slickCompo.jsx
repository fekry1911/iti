import React from "react";
import Slider from "react-slick";
import style from "../styles/slider.module.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    accessibility: true,
    adaptiveHeight: true,
    cssEase: "ease",
    touchMove: true,
    initialSlide: 2,
  };

  const images = [
    "https://i.imgur.com/QkIa5tT.jpeg",
    "https://i.imgur.com/cSytoSD.jpeg",
    "https://i.imgur.com/ZKGofuB.jpeg",
    "https://i.imgur.com/GJi73H0.jpeg",
    "https://i.imgur.com/633Fqrz.jpeg",
  ];

  return (
    <div className={`${style.slider} mb-5 mt-3`}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`slide-${index}`}
              style={{
                width: "100%",
                height: "35vh",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
