import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import image from "../assets/images/logo1.png";
import imageStyle from "../styles/logo.module.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/registerSlice";
import { LoadingOverlay } from "../SharedComponents/loadingCompo";

export default function RegisterPage() {
  let navigate = useNavigate();
  let email = useRef();
  let password = useRef();
  let name = useRef();
  let phone = useRef();
  let { user, loading, error } = useSelector((state) => state.register);
  let dispatch = useDispatch();

  const [errors, setErrors] = useState({});

  function validateForm(values) {
    let newErrors = {};

    if (!values.name) {
      newErrors.name = "Name is required";
    }

    if (!values.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!values.password) {
      newErrors.password = "Password is required";
    } else if (values.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!values.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(values.phone)) {
      newErrors.phone = "Phone must be 10–15 digits";
    }

    return newErrors;
  }

  async function handleSubmit(e) {
    console.log(localStorage.getItem("token"));

    e.preventDefault();

    const data = {
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
      password: password.current.value,
      password_confirmation: password.current.value,
      gender: 0,
    };

    const formErrors = validateForm(data);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      try {
        let res = await dispatch(registerUser(data)).unwrap();
        console.log("✅ Registered:", res);

        localStorage.setItem("token", res.data.token);
        navigate("/auth/login");
      } catch (err) {
        console.error("❌ Error:", err);
      }
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      {loading && <LoadingOverlay />}
      <div style={{ width: "400px" }}>
        <img src={image} alt="logo" className={imageStyle.logo} />
        <div className="text-center mt-2 mb-4">
          <h1 style={{ color: "#7F5EFF" }}>Create Free Account</h1>
        </div>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={email}
              className={`${imageStyle.inputBorder}`}
              type="email"
              placeholder="Enter Your email"
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              ref={name}
              className={`${imageStyle.inputBorder}`}
              type="text"
              placeholder="Enter Your Name"
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={password}
              className={`${imageStyle.inputBorder}`}
              type="password"
              placeholder="********"
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              ref={phone}
              className={`${imageStyle.inputBorder}`}
              type="phone"
              placeholder="Enter Your Phone"
            />
            {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
          </Form.Group>

          <Button
            type="submit"
            style={{ backgroundColor: "#7F5EFF", border: "1px solid #7F5EFF" }}
            className="w-100 mb-3"
          >
            Sign Up
          </Button>

          <div className="text-center d-flex justify-content-center align-items-center">
            <p className="m-1">Already Have Account?</p>
            <p
              onClick={() => navigate("/auth/login")}
              className={`m-1 ${imageStyle.aLinks}`}
              style={{ color: "#7F5EFF", cursor: "pointer" }}
            >
              Log In
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}
