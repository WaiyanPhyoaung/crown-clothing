import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialValues, validationSchema } from "./registerData";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/currentUserSlice";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (values, submitProps) => {
    console.log(values);
    dispatch(setCurrentUser(values));
    submitProps.setSubmitting(false);
    submitProps.resetForm(true);
    navigate("/");
  };

  return (
    <div className="signIn-container">
      <div className="signIn-header">
        <h3>Don't have an account?</h3>
        <h5>Sign up with your email & password.</h5>
      </div>
      <div className="form-container">
        <div className="signIn-form">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submitHandler}
          >
            {(formik) => {
              console.log("Formik props", formik);
              return (
                <Form>
                  <div className="form-group">
                    <Field type="text" name="username" placeholder="Username" />
                    <ErrorMessage
                      name="username"
                      component="span"
                      className="error-message"
                    />
                  </div>
                  <div className="form-group">
                    <Field type="email" name="email" placeholder="Email" />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="error-message"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      type="password"
                      name="password"
                      placeholder="password"
                    />
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="error-message"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="span"
                      className="error-message"
                    />
                  </div>
                  <div className="signIn-footer">
                    <button
                      type="submit"
                      className="signIn-btn"
                      disabled={!formik.isValid || formik.isSubmitting}
                    >
                      Register
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}
export default Register;
