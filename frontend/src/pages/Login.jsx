import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useEffect } from "react";
import { useFormik } from "formik";
import "../styles/Login.css";
import { FaFacebook } from "react-icons/fa";
import LoginValidation from "../schemas/loginSchema";
import bcrypt from "bcryptjs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const image =
    "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png";
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidation,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formik.values;
    if (!email || !password) {
      toast.error("Please fill all the fields");
      return;
    }
    if (formik.errors.email || formik.errors.password) {
      toast.error("Invalid email or password");
      return;
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    useEffect(() => {
      const login = async () => {
        try {
          const response = await axios.post(
            "http://localhost:3000/api/auth/login",
            { email, password: hashedPassword }
          );
          if (response.status === 200) {
            toast.success("Logged in successfully");
          }
        } catch (error) {
          toast.error("Invalid email or password");
        }
      };
      //login();
    }, [hashedPassword]);
    console.log("Submitted");
  };
  return (
    <>
      <ToastContainer />
      <Form className="login-form">
        <img src={image} alt="instagram" />
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ backgroundColor: "rgb(242, 242, 242)" }}
          />
          {formik.touched.email && formik.errors.email ? (
            <small style={{ color: "red" }}>{formik.errors.email}</small>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ backgroundColor: "rgb(242, 242, 242)" }}
          />
          {formik.touched.password && formik.errors.password ? (
            <small style={{ color: "red" }}>{formik.errors.password}</small>
          ) : null}
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit}
          className="login-btn"
        >
          Log in
        </Button>

        <p className="login-txt1">OR</p>
        <a href="https://www.facebook.com" className="login-fb">
          <FaFacebook style={{ fontSize: "20px" }} />
          <p>Log in with Facebook</p>
        </a>
        <p style={{ textAlign: "center", fontSize: "15px" }}>
          Forgot password?
        </p>
      </Form>
      <div className="signup">
        <p>
          Don't have an account?{" "}
          <a href="/registration" style={{ textDecoration: "none" }}>
            Sign up
          </a>
        </p>
      </div>
    </>
  );
};

export default Login;
