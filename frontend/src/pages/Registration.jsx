import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { FaFacebook } from "react-icons/fa";
import "../styles/Registration.css";
import RegistrationValidation from "../schemas/registrationSchema.js";
import bcrypt from "bcryptjs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const [error, setError] = useState(false);
  const image =
    "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png";
  const formik = useFormik({
    initialValues: {
      username: "",
      fullname: "",
      email: "",
      profilePhoto: "",
      bio: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegistrationValidation,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      username,
      fullname,
      email,
      profilePhoto,
      bio,
      confirmPassword,
      password,
    } = formik.values;
    if (!username || !fullname || !email || !password || !confirmPassword) {
      toast.error("Please fill all the fields");
      return;
    }
    if (
      formik.errors.username ||
      formik.errors.fullname ||
      formik.errors.email ||
      formik.errors.password ||
      formik.errors.confirmPassword
    ) {
      toast.error("Invalid user input");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    useEffect(() => {
      const registration = async () => {
        try {
          const response = await axios.post(
            "http://localhost:3000/api/auth/registration",
            { ...formik.values, password: hashedPassword }
          );
          if (response.status === 201) {
            toast.success("Registration successful");
          }
        } catch (error) {
          toast.error("Invalid user input");
          setError(true);
        }
      };
      //registration()
    }, [hashedPassword]);
    console.log("Submitted");
  };

  if (error) {
    return toast.error("Invalid user input");
  }
  return (
    <>
      <ToastContainer />
      <Form className="registration-form">
        <img src={image} alt="instagram" />
        <h5
          style={{ textAlign: "center", color: "gray", marginBottom: "20px" }}
        >
          Sign up to see photos and videos from your friends.
        </h5>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <Button variant="primary" className="facebook-btn">
            {" "}
            <FaFacebook style={{ fontSize: "20px", marginRight: "10px" }} />
            <b>Log in with Facebook</b>
          </Button>
        </div>
        <h5
          style={{ color: "gray", textAlign: "center", marginBottom: "20px" }}
        >
          OR
        </h5>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ backgroundColor: "rgb(242, 242, 242)" }}
          />
          {formik.touched.username && formik.errors.username ? (
            <small style={{ color: "red" }}>{formik.errors.username}</small>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Full Name"
            name="fullname"
            value={formik.values.fullname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ backgroundColor: "rgb(242, 242, 242)" }}
          />
          {formik.touched.fullname && formik.errors.fullname ? (
            <small style={{ color: "red" }}>{formik.errors.fullname}</small>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Email"
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
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>
            Profile Photo <span style={{ color: "gray" }}>(optional)</span>
          </Form.Label>
          <Form.Control
            type="file"
            name="profilePhoto"
            value={formik.values.profilePhoto}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            Bio <span style={{ color: "gray" }}>(optional)</span>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            style={{ backgroundColor: "rgb(242, 242, 242)" }}
            name="bio"
            value={formik.values.bio}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ backgroundColor: "rgb(242, 242, 242)" }}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <small style={{ color: "red" }}>
              {formik.errors.confirmPassword}
            </small>
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
          style={{ width: "100%" }}
        >
          Sign Up
        </Button>
        <h5
          style={{
            textAlign: "center",
            color: "gray",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          By signing up, you agree to our <b>Terms & Privacy Policy.</b>
        </h5>
      </Form>

      <div className="login">
        <p>
          Have an account?{" "}
          <a href="/" style={{ textDecoration: "none" }}>
            Log in
          </a>
        </p>
      </div>
    </>
  );
};

export default Registration;
