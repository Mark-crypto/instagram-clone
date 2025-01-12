import * as Yup from "yup";

const CommentValidation = Yup.object({
  comment: Yup.string()
    .max(500, "Must be 500 characters or less")
    .required("Required"),
});
export default CommentValidation;
