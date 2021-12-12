const Yup = require("yup");

export const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username length must be greater than 3!")
    .max(50)
    .required("Username is mandatory!"),
  email: Yup.string().email("Invalid Email!").required("Email is mandatory!"),
  password: Yup.string().required("Password is mandatory!"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
