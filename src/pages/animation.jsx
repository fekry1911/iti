import React from "react";
import Lottie from "lottie-react";
import login from "../assets/animations/register.json";
import loginStyle from "../styles/loginAnimationStyle.module.css";

export default function LoginAnimation() {
  return (
    <div className="w-75 container d-flex align-items-center justify-content-center min-vh-100">
      <Lottie
        className={loginStyle.loginStyle}
        animationData={login}
        loop={true}
      />
    </div>
  );
}
