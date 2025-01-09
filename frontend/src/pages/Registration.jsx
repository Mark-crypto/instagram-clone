import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
// import registrationSchema from "../schemas/registrationSchema.js";

const Registration = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    // validationSchema: registrationSchema,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>
            Username<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username ? (
            <small style={{ color: "red" }}>{formik.errors.username}</small>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Email address<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <small style={{ color: "red" }}>{formik.errors.email}</small>
          ) : null}
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Profile Photo</Form.Label>
          <Form.Control type="file" />
          {formik.touched.profilePhoto && formik.errors.profilePhoto ? (
            <small style={{ color: "red" }}>{formik.errors.profilePhoto}</small>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Confirm Password<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <small style={{ color: "red" }}>
              {formik.errors.confirmPassword}
            </small>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Password<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <small style={{ color: "red" }}>{formik.errors.password}</small>
          ) : null}
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Registration;
