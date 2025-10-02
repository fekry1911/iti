import React from "react";
import style from "../styles/categ.module.css";

export default function SideBarCombo({ item }) {
  return (
    <div
      className={` ${style.cate} d-flex justify-content-center align-items-center border rounded p-2`}
    >
      {item}
    </div>
  );
}
