import React from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import CommentValidation from "../schemas/commentsSchema";

const AddComment = () => {
  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: CommentValidation,
  });
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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
