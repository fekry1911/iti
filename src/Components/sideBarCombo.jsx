import React from "react";
import style from "../styles/categ.module.css";
import { useNavigate } from "react-router";
import all from "../assets/categ/all.png";

export default function SideBarCombo({ item, image, id }) {
  let navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`categ/${id}`)}
      className={` ${style.cate} justify-content-center align-items-center text-center `}
    >
      <img
        className="m-3"
        src={image}
        alt={item}
        style={{ height: "56px", width: "56px" }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = all;
        }}
      />
      <p className={style.name_text}>{item}</p>
    </div>
  );
}
