import * as Yup from "yup";

const RegistrationValidation = Yup.object({
  username: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(15, "Must be 15 characters or less")
    .required("Username is required"),
  fullname: Yup.string()
    .min(6, "Must be at least 6 characters")
    .max(15, "Must be 15 characters or less")
    .required("Full name is required"),
  email: Yup.string()
    .min(3)
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8)
    .required("Enter a password")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(
      /[$&+,:;=?@#|'<>.^*()%!-]/,
      "Password requires a special character"
    ),
  confirmPassword: Yup.string()
    .required("Enter a password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export default RegistrationValidation;
