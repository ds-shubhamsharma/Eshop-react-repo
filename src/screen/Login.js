import React from "react";
import "../assets/css/signin.css";
import {
  FaTwitter,
  FaGoogle,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

const YupValidation = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email can't be empty"),
  password: Yup.string().min(3).max(15).required("password can't be empty"),
});

const initialValues = {
  email: "",
  password: "",
};
const Login = () => {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: YupValidation,
      onSubmit: (value, action) => {
        console.log("value", value);
        if (value) {
          navigate("/");
        }
        action.resetForm();
      },
    });

  return (
    <div className="global-container">
      <div className="card login-form">
        <div className="card-body">
          <h3 className="text-centera .text-infos">Log Now</h3>
          <div className="card-text">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <span htmlFor="exampleInputEmail1">Email address</span>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="exampleInputEmail1"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="required">{errors.email}</p>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <a href="#" style={{ float: "right", "font-size": "12px" }}>
                  Forgot password?
                </a>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="exampleInputPassword1"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className="required">{errors.password}</p>
                ) : (
                  ""
                )}
              </div>
              <button className="flex-c-m stext-101 cl0 size-116 bg3 bor14  p-lr-15 trans-04 pointer">
                Sign In
              </button>{" "}
              <div className="sign-up">
                Don't have an account? <a href="#">Create New</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
