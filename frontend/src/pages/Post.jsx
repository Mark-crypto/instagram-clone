import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import PostValidation from "../schemas/postSchema.js";
import "../styles/Post.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const Post = () => {
  const [error, setError] = useState(false);

  const image =
    "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png";
  const formik = useFormik({
    initialValues: {
      photo: "",
      caption: "",
      location: "",
    },
    validationSchema: PostValidation,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { photo, caption, location } = formik.values;
    if (!photo || !location) {
      toast.error("Please fill the required fields");
      return;
    }
    const post = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/posts", {
          ...formik.values,
        });
        if (response.status === 201) {
          toast.success("Post created successfully");
        }
      } catch (error) {
        toast.error("Something went wrong");
        setError(true);
      }
    };
    //post()
    console.log("Submitted");
  };

  if (error) {
    return toast.error("Something went wrong");
  }
  return (
    <>
      <ToastContainer />
      <Form className="post-form">
        <img src={image} alt="instagram" />
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>
            {" "}
            <b>Photo</b>
          </Form.Label>
          <Form.Control
            type="file"
            name="photo"
            value={formik.values.photo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.photo && formik.errors.photo ? (
            <small style={{ color: "red" }}>{formik.errors.photo}</small>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            <b>Caption</b> <span style={{ color: "gray" }}>(optional)</span>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            style={{ backgroundColor: "rgb(242, 242, 242)" }}
            name="caption"
            value={formik.values.caption}
            onChange={formik.handleChange}
          />
          {formik.errors.caption ? (
            <small style={{ color: "red" }}>{formik.errors.caption}</small>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Location"
            name="location"
            value={formik.values.location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ backgroundColor: "rgb(242, 242, 242)" }}
          />
          {formik.touched.location && formik.errors.location ? (
            <small style={{ color: "red" }}>{formik.errors.location}</small>
          ) : null}
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit}
          style={{ width: "100%" }}
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Post;
