import React from "react";
import style from "../styles/info.module.css";

export default function Info({ img, title, text }) {
  return (
    <div className={style.card}>
      <div className={style.parent}>
        <div className={style.child}>
          <img className={style.img} src={img} alt={title} />
        </div>
      </div>
      <h3 className={style.title}>{title}</h3>
      <p className={style.text}>{text}</p>
    </div>
  );
}
