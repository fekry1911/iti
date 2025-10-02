import React from "react";
import style from "../styles/categ.module.css";

export default function SideBarCombo({ item, image }) {
  return (
    <div
      className={` ${style.cate} justify-content-center align-items-center text-center `}
    >
      <img
        className="m-3"
        src={image}
        style={{ height: "56px", width: "56px" }}
      />
      <p className={style.name_text}> {item}</p>
    </div>
  );
}
