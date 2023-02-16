
import React from "react";
import {
  FaTwitter,
  FaGoogle,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";


const YupValidation = Yup.object({
  firstName: Yup.string().min(3).max(15).required("firstName can't be empty"),
  lastName: Yup.string().min(3).max(15).required("lastName can't be empty"),
  organization: Yup.string()
    .min(5)
    .max(20)
    .required("Organization can't be empty"),
  dob: Yup.string().required("please enter your Dob"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email can't be empty"),
  phone: Yup.string().min(10).max(12).required("phone can't be empty"),
  password: Yup.string().min(3).max(15).required("password can't be empty"),
  confirm_Password: Yup.string()
    .min(3)
    .max(15)
    .oneOf([Yup.ref("password"), null], "password must match")
    .required("confirm password can't be empty"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  organization: "",
  dob: "",
  email: "",
  phone: "",
  password: "",
  confirm_Password: "",
};

const Register=()=> {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: YupValidation,
      onSubmit: (value, action) => {
        action.resetForm();
      },
    });
  return (
    <>
      {/* Section: Design Block */}
      <section className="text-center">
        {/* Background image */}
        <div
          className="p-5 bg-image"
          style={{
            "background-image":
              "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
            height: "300px",
          }}
        />
        {/* Background image */}
        <div
          className="card mx-4 mx-md-5 shadow-5-strong"
          style={{
            "margin-top": "-100px",
            background: "hsla(0, 0%, 100%, 0.8)",
            "backdrop-filter": "blur(30px)",
          }}
        >
          <div className="card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-5">REGISTER NOW</h2>
                <form  onSubmit={handleSubmit}>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          name="firstName"
                          value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        <label className="form-label" htmlFor="form3Example1">
                          First name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          name="lastName"
                          value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        <label className="form-label" htmlFor="form3Example2">
                          Last name
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                      name="email"
                      value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                      name="phone"
                      value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Phone
                    </label>
                  </div>
                  {/* Password input */}
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                      name="password"
                      value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                      name="confirm_Password"
                      value={values.confirm_Password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Confirm Password
                    </label>
                  </div>
                  {/* Checkbox */}
                  {/* <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue
                      id="form2Example33"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="form2Example33"
                    >
                      Subscribe to our newsletter
                    </label>
                  </div> */}
                  {/* Submit button */}
                <Link to="#"> <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Sign up
                  </button></Link> 
                  {/* Register buttons */}
                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <FaFacebookSquare />
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <FaGoogle />{" "}
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <FaTwitter />{" "}
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <FaLinkedin />{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
    </>
  );
}

export default Register;
