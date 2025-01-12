import React from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import PostValidation from "../schemas/postSchema.js";

const Post = () => {
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
    validationSchema: PostValidation,
  });
  return (
    <>
      <Form className="post-form">
        <img src={image} alt="instagram" />
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
          {formik.touched.profilePhoto && formik.errors.profilePhoto ? (
            <small style={{ color: "red" }}>{formik.errors.profilePhoto}</small>
          ) : null}
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
    </>
  );
};

export default Post;
