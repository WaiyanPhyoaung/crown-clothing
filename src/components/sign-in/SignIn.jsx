import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialValues, validationSchema } from "./signInData";
import "./signIn.css";

function SignIn() {
  const submitHandler = (values, submitProps) => {
    console.log(values);
    submitProps.setSubmitting(false);
    submitProps.resetForm(true);
  };

  return (
    <div className="signIn-container">
      <div className="signIn-header">
        <h3>Already Have an account?</h3>
        <h5>Sign in with your email & password.</h5>
      </div>
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
                  <Field type="email" name="email" placeHolder="Email" />
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
                    placeHolder="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="error-message"
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
      <div className="signIn-footer">
        <button className="signIn-btn">SignIn</button>
        <p className="create-account">Create a new account</p>
      </div>
    </div>
  );
}
export default SignIn;
