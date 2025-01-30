import React from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import CommentValidation from "../schemas/commentsSchema";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

const AddComment = () => {
  const formik = useFormik({
    initialValues: {
      comment: "",
      email: "",
    },
    validationSchema: CommentValidation,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/comments", {
        ...formik.values,
      });
      if (response.status === 201) {
        toast.success("Comment added successfully");
      }
    } catch (error) {
      toast.error("Internal server error");
    }
  };
  return (
    <>
      <ToastContainer />
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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
          <Form.Label>
            Comment <span style={{ color: "gray" }}>(optional)</span>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            style={{ backgroundColor: "rgb(242, 242, 242)" }}
            name="comment"
            value={formik.values.comment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.comment && formik.errors.comment ? (
            <small style={{ color: "red" }}>{formik.errors.comment}</small>
          ) : null}
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit}
          style={{ width: "100%" }}
        >
          Add
        </Button>
      </Form>
    </>
  );
};

export default AddComment;
