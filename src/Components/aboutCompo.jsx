import React from "react";
import OurStory from "./aboutCompos/ourStory";
import delivery from "../assets/images/delivery.png";
import head from "../assets/images/head.png";
import shield from "../assets/images/shield.png";
import InfoCompo from "./infoCompo";
import PersonsCard from "./aboutCompos/personsCard";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";

export default function AboutCompo() {
  let titles = [
    "FREE AND FAST DELIVERY",
    "24/7 CUSTOMER SERVICE",
    "MONEY BACK GUARANTEE",
    "MONEY BACK GUARANTEE",
  ];
  let texts = [
    "Free delivery for all orders over $140",
    "Friendly 24/7 customer support",
    "We return money within 30 days",
    "We return money within 30 days",
  ];
  let images1 = [delivery, head, shield, shield];
  let persons = [
    { image: p1, name: "Tom Cruise", title: "Founder & Chairman" },
    { image: p2, name: "Emma Watson", title: "Managing Director" },
    { image: p3, name: "Will Smith", title: "Product Designer" },
  ];
  let titles1 = [
    "FREE AND FAST DELIVERY",
    "24/7 CUSTOMER SERVICE",
    "MONEY BACK GUARANTEE",
  ];
  let texts1 = [
    "Free delivery for all orders over $140",
    "Friendly 24/7 customer support",
    "We return money within 30 days",
  ];
  let images2 = [delivery, head, shield];
  return (
    <div className="container-fluid">
      <OurStory />
      <InfoCompo images={images1} titles={titles} texts={texts} />
      <div className="row container-fluid justify-content-center align-items-center ">
        {persons.map((person) => {
          return (
            <div className="col-lg-3 col-md-8 col-12 mx-3 d-flex justify-content-center align-items-center ">
              <PersonsCard
                image={person.image}
                name={person.name}
                title={person.title}
              />
            </div>
          );
        })}
      </div>
      <InfoCompo images={images2} titles={titles1} texts={texts1} />
    </div>
  );
}
