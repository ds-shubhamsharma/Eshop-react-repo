// import React from "react";
// import { Link } from "react-router-dom";
// import "../assets/myaccount/checkout.css"
// function CheckOutPage() {
//   return (
//     <>
//       <div className="white-space" />
//       <div className="wrapper">
//         <div className="row">
//           <div className="col-12 col">
//             <div className="info-bar">
//               <p>
//                 <i className="fa fa-info" />
//                 Returning customer? <Link to="/sign-in">Click here to login</Link>
//               </p>
//             </div>
//             <p>
//               If you have shopped with us before, please enter your details in
//               the boxes below. If you are a new customer please proceed to the
//               Billing &amp; Shipping section.
//             </p>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12 col">
//             <form method="get" className="user-pswd">
//               <div className="width50 padright">
//                 <label htmlFor="username">Username or email</label>
//                 <input type="text" name="username" id="username" required />
//               </div>
//               <div className="width50">
//                 <label htmlFor="password">Password</label>
//                 <input type="password" name="password" id="password" required />
//               </div>
//               <input type="submit" name="submit" defaultValue="Login" />
//               <input type="checkbox" defaultValue={1} name="checkbox" />
//               <p>Remember me</p>
//             </form>
//             <p>
//               <Link to="#">Lost your password?</Link>
//             </p>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12 col">
//             <div className="info-bar">
//               <p>
//                 <i className="fa fa-info" />
//                 Have a coupon? <Link to="#">Click here to enter your code</Link>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-6 col coupon">
//             <form method="get">
//               <input
//                 type="text"
//                 name="coupon"
//                 id="coupon"
//                 placeholder="Coupon code"
//               />
//               <input type="submit" name="submit" defaultValue="Apply Coupon" />
//             </form>
//           </div>
//         </div>
//         <div className="row">
//           <form method="get">
//             <div className="col-7 col">
//               <h3 className="topborder">
//                 <span>Billing Details</span>
//               </h3>
//               <label htmlFor="country">Country</label>
//               <select name="country" id="country" required>
//                 <option value>Please select a country</option>
//                 <option value="Canada">India</option>
//                 <option value="Not Canada">Canada</option>
//                 <option value="Not Canada">Japan</option>

//               </select>
//               <div className="width50 padright">
//                 <label htmlFor="fname">First Name</label>
//                 <input type="text" name="fname" id="fname" required />
//               </div>
//               <div className="width50">
//                 <label htmlFor="lname">Last Name</label>
//                 <input type="text" name="lname" id="lname" required />
//               </div>
//               <label htmlFor="address">Address</label>
//               <input type="text" name="address" id="address" required />
//               <input
//                 type="text"
//                 name="address"
//                 id="address2"
//                 placeholder="Optional"
//               />
//               <label htmlFor="city">Town / City</label>
//               <input type="text" name="city" id="city" required />
//               <div className="width50 padright">
//                 <label htmlFor="province">Province</label>
//                 <select name="province" id="province" required>
//                   <option value>Please select a province</option>
//                   <option value="ab">Alberta</option>
//                   <option value="bc">British Columbia</option>
//                   <option value="mb">Manitoba</option>
//                   <option value="nb">New Brunswick</option>
//                   <option value="nl">Newfoundland and Labrador</option>
//                   <option value="ns">Nova Socia</option>
//                   <option value="on">Ontario</option>
//                   <option value="pe">Prince Edward Island</option>
//                   <option value="qc">Quebec</option>
//                   <option value="sk">Saskatchewan</option>
//                   <option value="not-canada">Not Canada</option>
//                 </select>
//               </div>
//               <div className="width50">
//                 <label htmlFor="postcode">Postcode</label>
//                 <input
//                   type="text"
//                   name="postcode"
//                   id="postcode"
//                   placeholder="Postcode / Zip"
//                   required
//                 />
//               </div>
//               <div className="width50 padright">
//                 <label htmlFor="email">Email Address</label>
//                 <input type="text" name="email" id="email" required />
//               </div>
//               <div className="width50">
//                 <label htmlFor="tel">Phone</label>
//                 <input type="text" name="tel" id="tel" required />
//               </div>
//               <input type="checkbox" defaultValue={2} name="checkbox" />
//              <Link to={"/sign-up"}> <p>Create an account?</p></Link>
            
//             </div>
//             <div className="col-5 col order">
//               <h3 className="topborder">
//                 <span>Your Order</span>
//               </h3>
//               <div className="row">
//                 <h4 className="inline">Product</h4>
//                 <h4 className="inline alignright">Total</h4>
//               </div>
//               <div>
//                 <p className="prod-description inline">Nice Dress</p>
//                 <div className="qty inline">
//                   <span className="smalltxt">x</span> 1
//                 </div>
//                 <p />
//               </div>
//               <div>
//                 <h5>Cart Subtotal</h5>
//               </div>
//               <div>
//                 <h5 className="inline difwidth">Shipping and Handling</h5>
//                 <p className="inline alignright center">Free Shipping</p>
//               </div>
//               <div>
//                 <h5>Order Total</h5>
//               </div>
//               <div>
//                 <h3 className="topborder">
//                   <span>Payment Method</span>
//                 </h3>
//                 <input
//                   type="radio"
//                   defaultValue="banktransfer"
//                   name="payment"
//                   defaultChecked
//                 />
//                 <p>Direct Bank Transfer</p>
//                 <p className="padleft">
//                   Make your payment directly into our bank account. Please use
//                   your Order ID as the payment reference. Your order won't be
//                   shipped until the funds have cleared in our account.
//                 </p>
//               </div>
//               <div>
//                 <input type="radio" defaultValue="paypal" name="payment" />
//                 <p>Paypal</p>
//                 <fieldset className="paymenttypes">
//                   <legend>
//                     <img
//                       src="images/pay-pal.jpg"
//                       alt="PayPal Logo"
//                       className="paypal"
//                     />
//                   </legend>
//                   <img
//                     src="images/cards.jpg"
//                     alt="Visa, Mastercard, Maestro and Amex Credit Cards"
//                     className="cards"
//                   />
//                 </fieldset>
//                 <Link to="#" className="padleft">
//                   What is Paypal?
//                 </Link>
//               </div>
//               <input
//                 type="submit"
//                 name="submit"
//                 defaultValue="Place Order"
//                 className="redbutton"
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CheckOutPage;
