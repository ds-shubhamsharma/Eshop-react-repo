import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import styled, { keyframes } from "styled-components";
// import animation from "react-animations/lib/swing";
// import { primaryColor } from "../../containers/Products";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import { cartTotalSelector } from "../../redux/slice/selectors";
import { toggle } from "../../redux/slice/uiSlice";
import { Bubble } from "../CartreduxCss";


function Header() {
  const total = useSelector(cartTotalSelector);
  const dispatch = useDispatch();
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
      <div className="wrap-menu-desktop">
        <nav className="limiter-menu-desktop container">
          {/* Logo desktop */}
          <Link to="/" className="logo">
            <img src={logo} alt="IMG-LOGO" />
          </Link>
          {/* Menu desktop */}
          <div className="menu-desktop">
            <ul className="main-menu">
              <li className="active-menu">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/product-listing">Shop</Link>
              </li>
              <li>
                <Link to="/blogs">Blog</Link>
              </li>
              <li>
                <Link to="#">pages</Link>

                <ul className="sub-menu">
                  <li>
                    <Link to="/check-out">checkout</Link>
                  </li>
                  {/* <li>
                    <Link to="/product-detail">product details</Link>
                  </li> */}
                  <li>
                    <Link to="/contact-us">Contact</Link>
                  </li>
                  <li>
                    <Link to="/blog-details">blog details</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/about-us">About</Link>
              </li>
            </ul>
          </div>

          <div className="wrap-icon-header flex-w flex-r-m">
            <div className="bor17 of-hidden pos-relative">
              <input
                className="stext-103 cl2 plh4 size-112 p-l-28 p-r-55"
                type=""
                name="search"
                placeholder="Search"
              />
              <button className="flex-c-m size-122 ab-t-r fs-18 cl4 hov-cl1 trans-04">
                <i className="zmdi zmdi-search" />
              </button>
            </div>
            <Link to="/add-to-cart">
              <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-cart">
                {/* {total} */}
                <Bubble change={change}>{total}</Bubble>
                <i className="zmdi zmdi-shopping-cart" />
              </div>
            </Link>
            <Link
              to="#"
              className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
              data-notify={0}
            >
              <i className="zmdi zmdi-favorite-outline" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
