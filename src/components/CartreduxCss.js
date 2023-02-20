import styled, { keyframes } from "styled-components";
import animation from "react-animations/lib/swing";

export const primaryColor = "#ffc221";

export const fade = keyframes`
  from {
    opacity:0
  }

  to {
    opacity:1
  }
`;
export const Button = styled.button`
  padding: 8px 12px;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: #ffc221;
  }
`;
export const CartContainer = styled.div`
  position: fixed;
  top: 85px;
  right: 0;
  z-index: 2;
  width: 300px;
  height: 100vh;
  padding: 60px 12px 0;
  background: #fff;
  overflow: auto;
  transition: transform 0.2s ease-in-out;
  transform: translateX(${(p) => (p.visible ? 0 : "300px")});
`;
export const CartClearButton = styled(Button)`
  width: 67%;
  margin: 38px 50px;
`;
export const CartItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 16px 0;
  border-bottom: 1px solid #ededed;
`;
export const CartProductImage = styled.img`
  width: 100px;
  height: 90px;
  margin-right: 8px;
  border: 1px solid #f6f6f6;
`;
export const CartProductTitle = styled.div`
  font-size: 16px;
`;
export const CartProductAction = styled.div`
  display: grid;
  grid-template-columns: 30px 40px 30px;
  grid-template-rows: 40px;
  align-items: center;
  padding: 8px 0 0;
  text-align: center;
`;
export const CartProductSubtotal = styled.div`
  margin-top: 4px;
  color: #666;
`;
export const ActionButton = styled(Button)`
  padding: 0;
   ${(p) => (p.disabled ? 0.4 : 1)};
   ${(p) => (p.disabled ? "none" : "unset")};
`;
export const CartProductQuantity = styled.div`
  height: 30px;
  line-height: 30px;
`;
export const CartTotal = styled.div`
  padding: 5px 0;
  font-size: 16px;
  font-wight:bold;
  text-align: right;
  color: #000;
`;

export const Mask = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.75);

  animation: ${fade} 0.2s ease-in-out;
`;
export const EmptyCart = styled.div`
  padding: 16px;
  color: #000;
  font-weight: 900;
  text-align: center;
    background-image: url("../assets/images/holo.png");

`;

export const styledAnimation = keyframes`${animation}`;

export const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background: #333;
  color: #fff;
`;

export const NavTitle = styled.h1`
  display: flex;
  align-items: center;
  margin: 0;
  padding-right: 8px;
  flex: 1;
  font-size: 18px;
  user-select: none;

  svg {
    margin-right: 8px;
  }
`;

export const NavIconWrapper = styled.div`
  position: relative;
`;

export const Bubble = styled.div`
  position: absolute;
  top: -40%;
  right: 0%;
  padding: 0 4px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  background-color: ${primaryColor};
  border-radius: 2px;
  animation: ${(p) => (p.change ? styledAnimation : null)} 1s;
`;