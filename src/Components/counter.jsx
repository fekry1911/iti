import React, { useState, useEffect } from "react";
import style from "../styles/counter.module.css";

export default function Counter({ onChange }) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (onChange) onChange(count);
  }, [count, onChange]);

  return (
    <div className={`row col-5 m-0 p-0 ${style.counterWrapper}`}>
      <button
        className={`col-4 ${style.btn} ${style.left}`}
        onClick={() => setCount(count > 1 ? count - 1 : 1)}
      >
        -
      </button>

      <div className={`col-4 ${style.value}`}>
        <span>{count}</span>
      </div>

      <button
        className={`col-4 ${style.btnplus} ${style.right}`}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
}
