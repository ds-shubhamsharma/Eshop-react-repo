import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function TopBar() {
  return (
    <>
      <div className="top-bar">
        <div className="content-topbar flex-sb-m h-full container">
          <div className="left-top-bar">
          <b> Welcome for ShoppingCart</b>
          </div>
          <div className="right-top-bar flex-w h-full">
            <Link to="/sign-in" className="flex-c-m trans-04 p-lr-25">
              Sign In
            </Link>
            <Link to="/sign-up" className="flex-c-m trans-04 p-lr-25">
              Sign Up
            </Link>
            {/* <li>
                <Link to="" >My Account</Link>

                <ul className="sub-menu">
                  <li>
                    <Link to="index.html">checkout</Link>
                  </li>
                  <li>
                    <Link to="home-02.html">product details</Link>
                  </li>
                  <li>
                    <Link to="home-03.html">blog details</Link>
                  </li>
                </ul>
              </li> */}
            <Link to="#" className="flex-c-m trans-04 p-lr-25">
              EN
            </Link>
            {/* <Link to="#" className="flex-c-m trans-04 p-lr-25">
              USD
            </Link> */}
          </div>
        </div>
      </div>
      <Header />
    </>
  );
}

export default TopBar;
