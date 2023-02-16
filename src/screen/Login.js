import React from "react";
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
  const navigate=useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: YupValidation,
      onSubmit: (value, action) => {
       console.log('value', value)
       if(value){
        navigate("/")
       }
        action.resetForm();
      },
    });

  return (
    <>
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
                <h2 className="fw-bold mb-5">LOGIN NOW</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row"></div>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}

                    />{" "}
                    {errors.email && touched.email ? (
                      <p className="required">{errors.email}</p>
                    ) : (
                      ""
                    )}
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                  </div>

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
                    {errors.password && touched.password ? (
                      <p className="required">{errors.password}</p>
                    ) : (
                      ""
                    )}
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>
                  
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Sign in
                    </button>
                  
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
                      <FaGoogle />
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <FaTwitter />
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <FaLinkedin />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
