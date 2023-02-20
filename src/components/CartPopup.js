import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clear, decrement, increament } from "../redux/slice/cartSlice";
import { cartTotalPriceSelector } from "../redux/slice/selectors";
import { toggle } from "../redux/slice/uiSlice";
import {
  ActionButton,
  CartClearButton,
  CartContainer,
  CartItem,
  CartProductAction,
  CartProductImage,
  CartProductQuantity,
  CartProductSubtotal,
  CartProductTitle,
  CartTotal,
  CartTotalName,
  EmptyCart,
  Mask,
} from "./CartreduxCss";
const CartPopup = () => {
  const cart = useSelector((state) => state.cart);

  const ui = useSelector((state) => state.ui);

  const dispatch = useDispatch();
  const totalPrice = useSelector(cartTotalPriceSelector);

  return (
    <>
      <CartContainer visible={ui.cartDrawerVisible}>
        {/* {cart.length > 0 ? (
            <CartClearButton
              onClick={() => {
                dispatch(clear());
              }}
            >
              Clear
            </CartClearButton>
          ) : (
            <EmptyCart>Cart is Empty</EmptyCart>
          )} */}
        {cart.length > 0 ? (
          <>
            {cart.map((cartItem) => (
              <CartItem key={cartItem.id}>
                <CartProductImage
                  src={cartItem.thumbnail}
                  alt={cartItem.title}
                />
                <div>
                  <CartProductTitle>{cartItem.title}</CartProductTitle>

                  <CartProductSubtotal>
                    price {cartItem.quantity * cartItem.price}
                  </CartProductSubtotal>
                  <CartProductAction>
                    <ActionButton
                      onClick={() => {
                        dispatch(decrement(cartItem.id));
                      }}
                    >
                      -
                    </ActionButton>
                    <CartProductQuantity>
                      {cartItem.quantity}
                    </CartProductQuantity>
                    <ActionButton
                      onClick={() => {
                        dispatch(increament(cartItem.id));
                      }}
                    >
                      +
                    </ActionButton>
                  </CartProductAction>
                </div>
              </CartItem>
            ))}
            Total{totalPrice > 0 && <CartTotal>${totalPrice}</CartTotal>}
            <Link to={"/add-to-cart"}>
              <CartClearButton>Go To Cart</CartClearButton>
            </Link>
          </>
        ) : (
          <>
            <EmptyCart>Cart is Empty</EmptyCart>
            <Link to={"/product-listing"}>
              <CartClearButton>Shop Now</CartClearButton>
            </Link>
          </>
        )}
      </CartContainer>
      {ui.cartDrawerVisible && (
        <Mask
          onClick={() => {
            dispatch(toggle());
          }}
        />
      )}
    </>
  );
};

export default CartPopup;
