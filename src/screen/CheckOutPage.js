import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cartTotalPriceSelector, cartTotalSelector } from "../redux/slice/selectors";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Bubble } from "../components/CartreduxCss";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const YupValidation = Yup.object({
  firstName: Yup.string().min(3).max(15).required("firstName can't be empty"),
  lastName: Yup.string().min(3).max(15).required("lastName can't be empty"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email can't be empty"),
  address: Yup.string().min(4).max(20).required("address can't be empty"),
  city: Yup.string().min(3).max(10).required("city can't be empty"),
  pinCode: Yup.string().min(5).required("pinCode can't be empty"),
  // phone: Yup.number().min(10).max(12).required("phone can't be empty"),
  phone: Yup.string()
  .required("phone can't be empty")
  .matches(phoneRegExp, 'Phone number is not valid')
  .min(10, "too short")
  .max(10, "too long"),
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
  email: "",
  phone: "",
  address: "",
  city: "",
  pinCode: "",
};

const CheckOutPage = () => {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: YupValidation,
      onClick: (value, action) => {
        action.resetForm();
console.log('value', value)
        if (value) {
          navigate("/");
        }
        
      },
    });
    console.log('initialValues', initialValues)

  const cart = useSelector((state) => state.cart);
  const ui = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const totalPrice = useSelector(cartTotalPriceSelector);

  const total = useSelector(cartTotalSelector);
  const [change, setChange] = useState(false);

  useEffect(() => {
    if (total !== 0) {
      setChange(true);

      setTimeout(() => {
        setChange(false);
      }, 1000);
    }
  }, [total]);
  return (
    <>
      <div className="container">
        <section className="bg-img99  txt-center p-lr-15 p-tb-92">
          <h2 className="ltext-99 c99 txt-center">CheckOut</h2>
        </section>
        <div className="row">
          <div
            className="col-md-4 order-md-2 mb-4"
            style={{ marginTop: "80px" }}
          >
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
                     <Bubble change={change}>{total}</Bubble>

            </h4>
            <ul className="list-group mb-3">
              {cart.map((cartItem) => {
                return (
                  <>
                    <li
                      className="list-group-item d-flex justify-content-between lh-condensed"
                      key={cartItem.id}
                    >
                      <div>
                        {/* <h6 className="my-0">Product name</h6> */}
                        <p className="text-muted">{cartItem.title}</p>
                      </div>
                      <span className="text-muted">${cartItem.price}</span>
                    </li>
                  </>
                );
              })}

              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-success"></span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${totalPrice}</strong>
              </li>
            </ul>

            <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <div className="input-group-append">
                  <button type="#" className="btn btn-secondary">Redeem</button>
                </div>
              </div>
            </form>
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex-c-m stext-101 cl0 size-99 bg99 bor1  p-lr-15 trans-04"
            >
              Place Order
            </button>
          </div>
          <div className="col-md-8 order-md-1" style={{ marginTop: "80px" }}>
            <h4 className="mb-3">Billing address</h4>
            <form
              className="needs-validation"
              noValidate
              
             >
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">
                    First name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
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
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">
                    Last name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />{" "}
                  {errors.lastName && touched.lastName ? (
                    <p className="required">{errors.lastName}</p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Email"
                />{" "}
                {errors.email && touched.email ? (
                  <p className="required">{errors.email}</p>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="phone">
                  Phone <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Phone "
                />{" "}
                {errors.phone && touched.phone ? (
                  <p className="required">{errors.phone}</p>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="address">
                  Address<span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Street Address"
                />{" "}
                {errors.address && touched.address ? (
                  <p className="required">{errors.address}</p>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="address"></label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Apartment,building "
                />
              </div>
              <div className="mb-3">
                <label htmlFor="city">
                  Town/City <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Apartment or suite"
                />{" "}
                {errors.city && touched.city ? (
                  <p className="required">{errors.city}</p>
                ) : (
                  ""
                )}
              </div>
              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="country">Country</label>
                  {/* <select
                    className="custom-select d-block w-100"
                    id="country"
                    required
                  >
                    <option value>Choose...</option>
                    <option>India</option>
                    <option value>United States</option>
                    <option>United Kingdom</option>
                    <option value>Nepal</option>
                    <option>Bhutan</option>
                  </select> */}
                  <span className="custom-select d-block w-100">India</span>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">
                    State <span className="required">*</span>
                  </label>
                  <select
                    className="custom-select d-block w-100"
                    id="state"
                    name="state"
                    // value={values.state}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                  >
                    {" "}
                    {/* {errors.state && touched.state ? (
                      <p className="required">{errors.state}</p>
                    ) : (
                      ""
                    )} */}
                   
                    <option>Rajasthan</option>
                    <option>UtterPradesh</option>
                    <option>MadhyaPradesh</option>
                    <option>Andhra Pradesh</option>
                    <option>Haryana</option>
                    <option>Delhi</option>
                    <option>Kerala</option>
                    <option>Bihar</option>
                    <option>Goa</option>
                    <option>Gujarat</option>
                    <option>Assam</option>
                  </select>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="pinCode">
                    Pin Code <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pinCode"
                    name="pinCode"
                    value={values.pinCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.pinCode && touched.pinCode ? (
                    <p className="required">{errors.pinCode}</p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <hr className="mb-4" />
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="same-address"
                />
                <label className="custom-control-label" htmlFor="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="save-info"
                />
                <label className="custom-control-label" htmlFor="save-info">
                  Save this information for next time
                </label>
              </div>
              <hr className="mb-4" />
              <h4 className="mb-3">Payment</h4>
              <div className="d-block my-3">
                <div className="custom-control custom-radio">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    
                  />
                  <label className="custom-control-label" htmlFor="credit">
                    Credit card
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    
                  />
                  <label className="custom-control-label" htmlFor="debit">
                    Debit card
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    
                  />
                  <label className="custom-control-label" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-name">Name on card</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                  />
                  <small className="text-muted">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-number">Credit card number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    />
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-expiration">Expiration</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                 
                  />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-cvv">CVV</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                      />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutPage;
