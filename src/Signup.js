// SignUpForm.js
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Signup = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    termsAndConditions: false,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    termsAndConditions: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });

  const onSubmit = (values, { resetForm }) => {
    // Handle form submission logic here
    console.log("Form submitted with values:", values);
    resetForm();
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group">
            <h1>Welcome</h1>
            <p>
              It's our community in order to Signup please fill out this before
            </p>
          </div>
          <div className="form-group">
            <Field
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First name"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <Field
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last name"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <Field type="email" id="email" name="email" placeholder="Email" />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group terms">
            <Field
              type="checkbox"
              id="termsAndConditions"
              name="termsAndConditions"
            />
            <label htmlFor="termsAndConditions">
              I accept the terms and conditions
            </label>
          </div>
          <ErrorMessage
            name="termsAndConditions"
            component="div"
            className="error-message"
          />

          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Signup;
