import Button from "@mui/material/Button";
import React from "react";
import style from "../styles/sharedButton.module.css";

export default function SharedButton({ title }) {
  return (
    <Button style={{ color: "white" }} className={`${style.button2} col-5`}>
      {title}
    </Button>
  );
}
