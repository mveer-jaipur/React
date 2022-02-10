import React from "react";
import { ReactComponent as svgIcon } from "./CartIcon";

import classes from "./CartItem.module.css";

const CartItem = () => {
  return (
    <div className={classes["cart-item"]}>
      <svgIcon />
      <h2>Your Card</h2>
    </div>
  );
};

export default CartItem;
