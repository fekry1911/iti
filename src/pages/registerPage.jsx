import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import image from "../assets/images/logo1.png";
import imageStyle from "../styles/logo.module.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/registerSlice";
import { LoadingOverlay } from "../SharedComponents/loadingCompo";
import toast, { Toaster } from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const notify = (message) => toast(message);

  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const name = useRef();
  const phone = useRef();
  const { loading } = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function validateForm(values) {
    let newErrors = {};

    if (!values.name) {
      newErrors.name = "Name is required";
    } else if (/^\d+$/.test(values.name)) {
      newErrors.name = "Name cannot be numbers only";
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

    if (!values.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (values.password !== values.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!values.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(values.phone)) {
      newErrors.phone = "Phone must be 10–15 digits";
    }

    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value,
      password_confirmation: confirmPassword.current.value,
      gender: "0",
    };

    const formErrors = validateForm(data);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    try {
      const res = await dispatch(registerUser(data)).unwrap();
      localStorage.setItem("token", res.data.token);
      toast.success(res.message);
      navigate("/auth");
    } catch (err) {
      if (err.data) {
        err.data.email && notify(err.data.email[0]);
        err.data.phone && notify(err.data.phone[0]);
      } else {
        toast.error(err.message);
      }
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <Toaster />

      {loading && <LoadingOverlay />}
      <div style={{ width: "400px" }}>
        <img src={image} alt="logo" className={imageStyle.logo} />
        <div className="text-center mt-2 mb-4">
          <h1 style={{ color: "#7F5EFF" }}>Create Free Account</h1>
        </div>

        <Form onSubmit={handleSubmit}>
          {/* Email */}
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={email}
              className={`${
                errors.email
                  ? imageStyle.inputBorderError
                  : imageStyle.inputBorder
              }`}
              type="email"
              placeholder="Enter Your Email"
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </Form.Group>

          {/* Name */}
          <Form.Group className="mb-2" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              ref={name}
              className={`${
                errors.name
                  ? imageStyle.inputBorderError
                  : imageStyle.inputBorder
              }`}
              type="text"
              placeholder="Enter Your Name"
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          </Form.Group>

          {/* Password */}
          <Form.Group
            className="mb-2 position-relative"
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <div style={{ position: "relative" }}>
              <Form.Control
                ref={password}
                className={`${
                  errors.password
                    ? imageStyle.inputBorderError
                    : imageStyle.inputBorder
                }`}
                type={showPassword ? "text" : "password"}
                placeholder="********"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
          </Form.Group>

          {/* Confirm Password */}
          <Form.Group
            className="mb-2 position-relative"
            controlId="formBasicConfirmPassword"
          >
            <Form.Label>Confirm Password</Form.Label>
            <div style={{ position: "relative" }}>
              <Form.Control
                ref={confirmPassword}
                className={`${
                  errors.confirmPassword
                    ? imageStyle.inputBorderError
                    : imageStyle.inputBorder
                }`}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="********"
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
            {errors.confirmPassword && (
              <p style={{ color: "red" }}>{errors.confirmPassword}</p>
            )}
          </Form.Group>

          {/* Phone */}
          <Form.Group className="mb-4" controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              ref={phone}
              className={`${
                errors.phone
                  ? imageStyle.inputBorderError
                  : imageStyle.inputBorder
              }`}
              type="text"
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
              onClick={() => navigate("/auth")}
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
