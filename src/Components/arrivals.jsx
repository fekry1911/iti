import React from "react";
import style from "../styles/arrivals.module.css";
import platStation from "../assets/images/playstation.png";
import women from "../assets/images/women's.png";
import speaker from "../assets/images/speakers.png";
import perfum from "../assets/images/perfum.png";

export default function Arrivals() {
  return (
    <div
      className={`${style.arrivals}container`}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginBottom: "140px",
        width: "100%",
      }}
    >
      <div
        style={{
          flex: "1 1 45%",
          marginRight: "5%",
          height: "600px",
        }}
      >
        <img
          className={style.image}
          src={platStation}
          alt="PlayStation"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>

      <div style={{ flex: "1 1 50%" }}>
        <img
          className={style.image}
          src={women}
          alt="Women"
          style={{
            width: "100%",
            height: "248px",
            objectFit: "fill",
            marginBottom: "32px",
            borderRadius: "8px",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "30px",
          }}
        >
          <img
            className={style.image}
            src={speaker}
            alt="Speaker"
            style={{
              width: "calc(50% - 15px)",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <img
            className={style.image}
            src={perfum}
            alt="Perfume"
            style={{
              width: "calc(50% - 15px)",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
