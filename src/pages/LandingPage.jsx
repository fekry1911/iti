import React, { useEffect } from "react";
import image from "../assets/images/logo1.png";
import style from "../styles/landing.module.css";
import { useNavigate } from "react-router";

export default function LandingPage() {
  let navigate = useNavigate();
  useEffect(() => {
    let email = localStorage.getItem("token");

    setTimeout(() => {
      if (email) {
        navigate("/main/home");
      } else {
        navigate("/auth/login");
      }
    }, 1500);
  }, [navigate]);

  return (
    <div className={style.container}>
      <div className={style.circleBackground}></div>
      <img src={image} alt="logo" className={style.logo} />
    </div>
  );
}
