import React from "react";
import { Outlet } from "react-router";
import LoginAnimation from "../pages/animation";

export default function AuthMainLayOut() {
  return (
    <div
      style={{ backgroundColor: "white" }}
      className=" w-100 min-vh-100 d-flex align-items-center"
    >
      <div className="row w-100">
        <div
          style={{ backgroundColor: "#7F5EFF" }}
          className="col-0 col-lg-7 col-md-6 d-flex align-items-center justify-content-center"
        >
          <LoginAnimation />
        </div>

        <div className="col-12 col-lg-5 col-md-6 d-flex align-items-center justify-content-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
