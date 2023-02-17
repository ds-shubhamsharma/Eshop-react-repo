import React from "react";
import {useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
const YupValidation = Yup.object({
  firstName: Yup.string().min(3).max(15).required("firstName can't be empty"),
  lastName: Yup.string().min(3).max(15).required("lastName can't be empty"),
  dob: Yup.string().required("please enter your Dob"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email can't be empty"),
  phone: Yup.string().min(10).max(12).required("phone can't be empty"),
  password: Yup.string().min(3).max(15).required("password can't be empty"),
  confirmPassword: Yup.string()
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
  confirmPassword: "",
};

const Register = () => {
  const navigate=useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      
      initialValues: initialValues,
      validationSchema: YupValidation,
      onSubmit: (value, action) => {
        action.resetForm();
        if (value) {
          navigate("/sign-in");
        }
      },
    });
  return (
    <>
      <div className="container mt-3">
        <form onSubmit={handleSubmit}>
          <div className="row jumbotrons box8">
            <div className="col-sm-12 mx-t3 mb-4">
              <h3 className="text-centera .text-infos">Register Now</h3>
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="name-f">First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                id="name-f"
                placeholder="Enter your first name."
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />{" "}
              {errors.firstName && touched.firstName ? (
                <p className="required">{errors.firstName}</p>
              ) : (
                ""
              )}
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="name-l">Last name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                id="name-l"
                placeholder="Enter your last name."
                
              />{" "}
              {errors.lastName && touched.lastName ? (
                <p className="required">{errors.lastName}</p>
              ) : (
                ""
              )}
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                id="email"
                placeholder="Enter your email."
              />{" "}
              {errors.email && touched.email ? (
                <p className="required">{errors.email}</p>
              ) : (
                ""
              )}
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="address-1">Phone</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                id="address-1"
                placeholder="Enter Your Contact Number."
              />{" "}
              {errors.phone && touched.phone ? (
                <p className="required">{errors.phone}</p>
              ) : (
                ""
              )}
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="sex">Gender</label>
              <select
                id="sex"
                className="form-control browser-default custom-select"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unspesified">Unspecified</option>
              </select>
            </div>

            <div className="col-sm-6 form-group">
              <label htmlFor="Date">Date Of Birth</label>
              <input
                type="Date"
                name="dob"
                value={values.dob}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
                id="Date"
                
              />{" "}
              {errors.dob && touched.dob ? (
                <p className="required">{errors.dob}</p>
              ) : (
                ""
              )}
            </div>

            <div className="col-sm-6 form-group">
              <label htmlFor="pass">Password</label>
              <input
                type="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
                id="pass"
                placeholder="Enter your password."
              />{" "}
              {errors.password && touched.password ? (
                <p className="required">{errors.password}</p>
              ) : (
                ""
              )}
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="pass2">Confirm Password</label>
              <input
                type="Password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
                id="pass2"
                placeholder="Re-enter your password."
              />{" "}
              {errors.confirmPassword && touched.confirmPassword ? (
                <p className="required">{errors.confirmPassword}</p>
              ) : (
                ""
              )}
            </div>
            <div className="col-sm-12">
              <input
                type="checkbox"
                className="form-check d-inline"
                id="chb"
                
              />
              <label htmlFor="chb" className="form-check-label">
                &nbsp;I accept all terms and conditions.
              </label>
            </div>
            <div className="col-sm-12 form-group mb-0">
              <button  type="submit" className="flex-c-m stext-101 cl0 size-99 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
