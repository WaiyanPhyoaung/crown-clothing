const Yup = require("yup");

export const initialValues = {
  email: "",
  password: "",
};
export const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email!").required("Email is mandatory!"),
  password: Yup.string().required("Password is mandatory!"),
});
