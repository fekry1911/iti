import React, { useEffect } from "react";
import image from "../assets/images/mainLogo.png";
import style from "../styles/landing.module.css";
import { useNavigate } from "react-router";

export default function LandingPage() {
  let navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");

    setTimeout(() => {
      if (token) {
        navigate("/main");
      } else {
        navigate("/auth");
      }
    }, 3000);
  }, [navigate]);

  return (
    <div className={style.container}>
      <div className={style.circleBackground}></div>
      <img src={image} alt="logo" className={style.logo} />
    </div>
  );
}
