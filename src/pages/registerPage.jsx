import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import image from "../assets/images/logo1.png";
import imageStyle from "../styles/logo.module.css";
import { useNavigate } from "react-router";

export default function RegisterPage() {
  let navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div style={{ width: "400px" }}>
        <img src={image} alt="logo" className={imageStyle.logo} />
        <div className="text-center mt-2 mb-4">
          <h1 style={{ color: "#7F5EFF" }}>Create Free Account</h1>
        </div>

        <Form>
          <Button
            style={{
              backgroundColor: "white",
              border: "1px solid grey",
              borderRadius: "10px",
              color: "black",
            }}
            type="submit"
            className="w-100 mb-4 d-flex justify-content-center align-items-center text-center"
          >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAzFBMVEVHcEz////////+/v77+/vx8fL9/f309fX+/v739/f////09PXOz8/5+vr8/P3////////29vf///////84qlf8wAdGiPX8/PzsUUTqQjQsqFLrSj3S3/w6g/TqPCs0gPQgpUf85+bv9P+63sL62Nb+8ef4ycbw+PJkunkeePP81HXwgGv0jhzc5/3o9efX7N5Fr19Uj/WQy562zPr2trL94KDzoJrzoJv80Gjyl5H94qgyh9v7xzihsSp+wYV1sE5ZtXBmmvUynoWKrvzKDGT6AAAAE3RSTlMAW+TTeBLcHLMt1WsKzfUznkBIxSDAuAAAAUZJREFUKJFtktligkAMRUFZxKVuDMOAggpu1apVu+/t//9TkxBU1PsySQ4hlyGadpTd0fWOrV2R3eqyWhe80j1RpYCc7pmcI2tyaZimQw6bOTMplU9hpKIofJSUmgwtTCYq9EFhqKIJ5lbGdGIRAGhUQLNX6wRLOA2Y8vdpuvfVOJtaOjhdhL56yYrjU8cGFsRSLc4/x+DPfxBiSZN6LMlXUYXzVghBT8/7pPkdxFX28yzEO8HYI8U9dlQudMZx3AeInWWe+SrExxrhCLTre3E+M3P7FXznLn887z53a2PwGbjBLLvUP2jcYUC/FYdOA9d1g22SbN1fbizT9bUxXA+QguB4G2GlfbIFqw1i0GCzKmzDDQ1LZgPQLKHk5rAJpmSj0ykH0jxArW4V79yqF1bMkEckjYvFrTWIy0btApFsx7m68Ff1D4OdMHbngtKsAAAAAElFTkSuQmCC" />
            Sign In With Google
          </Button>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className={`${imageStyle.inputBorder}`}
              type="email"
              placeholder="Enter Your email"
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              className={`${imageStyle.inputBorder}`}
              type="text"
              placeholder="Enter Your Name"
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className={`${imageStyle.inputBorder}`}
              type="password"
              placeholder="********"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              className={`${imageStyle.inputBorder}`}
              type="phone"
              placeholder="Enter Your Phone"
            />
          </Form.Group>

          <Button
            style={{ backgroundColor: "#7F5EFF", border: "1px solid #7F5EFF" }}
            className="w-100 mb-3"
          >
            Sign Up
          </Button>

          <div className="text-center d-flex d-flex justify-content-center align-items-center">
            <p className="m-1">Already Have Account?</p>
            <p
              onClick={() => navigate("/")}
              className={`m-1 ${imageStyle.aLinks}`}
              style={{ color: "#7F5EFF" }}
            >
              Log In
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}
