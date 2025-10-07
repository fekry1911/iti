import React from "react";

import Info from "./info";

export default function InfoCompo({ titles, images, texts }) {
  return (
    <div className="row text-center d-flex g-3 ">
      {titles.map((item, index) => (
        <div
          key={index}
          className={`col-12 ${
            images.length > 3 ? "col-md-3" : "col-md-4"
          } mb-3 border raduis justify-content-center py-5`}
        >
          <Info img={images[index]} title={item} text={texts[index]} />
        </div>
      ))}
    </div>
  );
}
