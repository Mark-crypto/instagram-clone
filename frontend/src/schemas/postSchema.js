import * as Yup from "yup";

const PostValidation = Yup.object({
  image: Yup.string().required("Image is required"),
  caption: Yup.string().max(100, "Caption must be less than 100 characters"),
  location: Yup.string().required("Location is required"),
});

export default PostValidation;
