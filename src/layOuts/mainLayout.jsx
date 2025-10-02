import React from "react";
import NavBarComponent from "../SharedComponents/NabBarCompo";
import { Outlet } from "react-router";
import FooterComponent from "../SharedComponents/FooterCompo";

export default function MainLayout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <NavBarComponent />

      <div style={{ flex: 1 }}>
        <Outlet />
      </div>

      <FooterComponent />
    </div>
  );
}
