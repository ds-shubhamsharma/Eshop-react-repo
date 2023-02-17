import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartTotalPriceSelector } from "../redux/slice/selectors";
const CheckOutPage=()=> {
  const cart = useSelector((state) => state.cart);
  const ui = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const totalPrice = useSelector(cartTotalPriceSelector);

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
              <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            {cart.map((cartItem)=>{
              return(
                <>
                <ul className="list-group mb-3" key={cartItem.id}>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Product name</h6>
                  <small className="text-muted">{cartItem.title}</small>
                </div>
                <span className="text-muted">${cartItem.price}</span>
             </li>
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-success">-$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (IN)</span>
                <strong>${cartItem.quantity * cartItem.price}</strong>
              </li>
            </ul>
                
                </>
              )
            })}
            
            <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <div className="input-group-append">
                  <button className="btn btn-secondary">Redeem</button>
                </div>
              </div>
            </form>
            <button className="flex-c-m stext-101 cl0 size-99 bg99 bor1  p-lr-15 trans-04">
              Place Order
            </button>
          </div>
          <div className="col-md-8 order-md-1" style={{ marginTop: "80px" }}>
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" noValidate>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">
                    First name <span className="required">*</span>
                  </label>
                  <input type="text" className="form-control" id="firstName" />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">
                    Last name <span className="required">*</span>
                  </label>
                  <input type="text" className="form-control" id="lastName" />
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
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">
                  Phone <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter Phone "
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Street Address"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address"></label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Apartment,building "
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address2">
                  Town/City <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                />
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
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">
                    State <span className="required">*</span>
                  </label>
                  <select
                    className="custom-select d-block w-100"
                    id="state"
                    required
                  >
                    <option value>Choose...</option>
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
                  <label htmlFor="zip">
                    Pin Code <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder
                    required
                  />
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
                    defaultChecked
                    required
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
                    required
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
                    required
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
                    placeholder
                    required
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
                    placeholder
                    required
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-expiration">Expiration</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder
                    required
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
                    placeholder
                    required
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOutPage;
