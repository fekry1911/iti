import Button from "@mui/material/Button";
import React from "react";
import style from "../styles/sharedButton.module.css";

export default function SharedButton({ title, onClick, className }) {
  return (
    <Button
      onClick={onClick}
      style={{ color: "white" }}
      className={`${className} col-5`}
    >
      {title}
    </Button>
  );
}
