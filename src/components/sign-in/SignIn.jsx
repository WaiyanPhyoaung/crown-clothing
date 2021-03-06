import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialValues, validationSchema } from "./signInData";
import "./signIn.css";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const submitHandler = (values, submitProps) => {
    console.log(values);
    submitProps.setSubmitting(false);
    submitProps.resetForm(true);
    navigate("/");
  };

  return (
    <div className="signIn-container">
      <div className="signIn-header">
        <h3>Already Have an account?</h3>
        <h5>Sign in with your email & password.</h5>
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
                  <div className="signIn-footer">
                    <button
                      type="submit"
                      className="signIn-btn"
                      disabled={!formik.isValid || formik.isSubmitting}
                    >
                      SignIn
                    </button>
                    <p
                      className="create-account"
                      onClick={() => navigate("/register")}
                    >
                      Create a new account
                    </p>
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
export default SignIn;
