import React, { useContext } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  const numberOfItems = cartContext.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your meal</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
