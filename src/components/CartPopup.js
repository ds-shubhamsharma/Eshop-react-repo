import React from "react";
import "../assets/css/cartpopup.css";
const CartPopup = () => {
  return (
    <>
      <div className="cart">
        <div className="popup">
          <div className="row checkout">
            <h4>Items : 5</h4>
            <h4>Amount : 2000 Rs</h4>
          </div>
          <div className="row checkout">
            <span>
              <a className="checkout-button" href="#">
                View Cart
              </a>
            </span>
            <span className="checkout-button">Checkout</span>
            <img
              src="http://4.bp.blogspot.com/-rWU2czr6S0Q/VivJ_UMx7sI/AAAAAAAAAhg/AeOXq3s7TjM/s1600-r/finalc%2523logoPNGupdated.png"
              style="height:60px;width:120px; margin-top:20px;"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPopup;