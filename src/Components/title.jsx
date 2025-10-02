import React from "react";
import style from "../styles/title.module.css";

export default function Title({ title }) {
  return <h1 className={style.title}>{title}</h1>;
}
