import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import image from "../assets/images/logo1.png";
import imageStyle from "../styles/logo.module.css";
import { useNavigate } from "react-router";

export default function LoginPage() {
  let navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div style={{ width: "400px" }}>
        <img src={image} alt="logo" className={imageStyle.logo} />
        <div className="text-center mb-4">
          <h1 style={{ color: "#7F5EFF" }}>Welcome Back</h1>
          <h6 className="text-muted">Welcome Back Please Enter Your Details</h6>
        </div>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className={`${imageStyle.inputBorder}`}
              type="email"
              placeholder="Enter Your email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className={`${imageStyle.inputBorder}`}
              type="password"
              placeholder="********"
            />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex text-center align-items-center justify-content-between"
            controlId="formBasicCheckbox"
          >
            <Form.Check
              className={imageStyle.custom_checkbox}
              type="checkbox"
              label="Remember me for 30 days"
            />
            <Form.Label
              style={{ color: "#7F5EFF" }}
              className={`mt-2 ${imageStyle.aLinks}`}
            >
              Forgot Password?
            </Form.Label>
          </Form.Group>
          <Button
            style={{ backgroundColor: "#7F5EFF", border: "1px solid #7F5EFF" }}
            className="w-100 mb-3"
          >
            Sign In
          </Button>
          <Button
            style={{
              backgroundColor: "white",
              border: "1px solid grey",
              borderRadius: "10px",
              color: "black",
            }}
            type="submit"
            className="w-100 mb-3 d-flex justify-content-center align-items-center text-center"
          >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAzFBMVEVHcEz////////+/v77+/vx8fL9/f309fX+/v739/f////09PXOz8/5+vr8/P3////////29vf///////84qlf8wAdGiPX8/PzsUUTqQjQsqFLrSj3S3/w6g/TqPCs0gPQgpUf85+bv9P+63sL62Nb+8ef4ycbw+PJkunkeePP81HXwgGv0jhzc5/3o9efX7N5Fr19Uj/WQy562zPr2trL94KDzoJrzoJv80Gjyl5H94qgyh9v7xzihsSp+wYV1sE5ZtXBmmvUynoWKrvzKDGT6AAAAE3RSTlMAW+TTeBLcHLMt1WsKzfUznkBIxSDAuAAAAUZJREFUKJFtktligkAMRUFZxKVuDMOAggpu1apVu+/t//9TkxBU1PsySQ4hlyGadpTd0fWOrV2R3eqyWhe80j1RpYCc7pmcI2tyaZimQw6bOTMplU9hpKIofJSUmgwtTCYq9EFhqKIJ5lbGdGIRAGhUQLNX6wRLOA2Y8vdpuvfVOJtaOjhdhL56yYrjU8cGFsRSLc4/x+DPfxBiSZN6LMlXUYXzVghBT8/7pPkdxFX28yzEO8HYI8U9dlQudMZx3AeInWWe+SrExxrhCLTre3E+M3P7FXznLn887z53a2PwGbjBLLvUP2jcYUC/FYdOA9d1g22SbN1fbizT9bUxXA+QguB4G2GlfbIFqw1i0GCzKmzDDQ1LZgPQLKHk5rAJpmSj0ykH0jxArW4V79yqF1bMkEckjYvFrTWIy0btApFsx7m68Ff1D4OdMHbngtKsAAAAAElFTkSuQmCC" />
            Sign In With Google
          </Button>

          <div className="text-center d-flex d-flex justify-content-center align-items-center">
            <p className="m-1">Dont't Have any account?</p>
            <p
              onClick={() => navigate("/register")}
              className={`m-1 ${imageStyle.aLinks}`}
              style={{ color: "#7F5EFF" }}
            >
              Sign Up
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}
