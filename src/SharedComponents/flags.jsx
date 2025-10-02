import React from "react";
import style from "../styles/flag.module.css";

export default function Flags({ title }) {
  return (
    <div className={style.container}>
      <div className={style.flag}></div>
      <h3 className={style.title}>{title}</h3>
    </div>
  );
}
