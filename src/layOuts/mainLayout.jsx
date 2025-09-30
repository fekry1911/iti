import React from "react";
import NavBarComponent from "../SharedComponents/NabBarCompo";
import { Outlet } from "react-router";
import FooterComponent from "../SharedComponents/FooterCompo";

export default function MainLayout() {
  return (
    <div>
      <NavBarComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
}
