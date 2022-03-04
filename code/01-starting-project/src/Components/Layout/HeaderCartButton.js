import React, { useContext, useEffect, useState } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighLighted] = useState(false);
  const cartContext = useContext(CartContext);

  const { items } = cartContext;

  const numberOfItems = items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${classes.bump}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsHighLighted(true);

    const timer1 = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 400);

    return () => {
      clearTimeout(timer1);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your meal</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
