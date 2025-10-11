import React from "react";
import call from "../assets/images/phone.png";
import mail from "../assets/images/mail.png";
import BasicExample from "./formContact";

export default function Contact() {
  return (
    <div className="container-fluid py-5">
      <div className="row d-flex justify-content-center gap-5">
        <div
          className="col-lg-3 col-md-5 col-12 p-5"
          style={{
            borderRadius: "10px",
            backgroundColor: "white",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="d-flex align-items-center mb-4 text-center">
            <img
              src={call}
              alt="Call icon"
              className="me-3"
              style={{ height: "50px", width: "50px" }}
            />
            <h3 className="m-0">Call To Us</h3>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>

          <hr className="my-5" />

          <div className="d-flex align-items-center mb-4 text-center">
            <img
              src={mail}
              alt="Mail icon"
              className="me-3"
              style={{ height: "50px", width: "50px" }}
            />
            <h3 className="m-0">Write To Us</h3>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Email: customer@exclusive.com</p>
          <p>Support: support@exclusive.com</p>
        </div>

        <div
          className="col-lg-8 col-md-6 col-12 p-5"
          style={{
            borderRadius: "10px",
            backgroundColor: "white",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <BasicExample />
        </div>
      </div>
    </div>
  );
}
