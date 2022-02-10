import React from "react";
import CartItem from "../Cart/CartItem";
import mealsImage from "../../assets/meals.jpg";

import classes from "./header.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <div className={classes.header}>
        <h1>ReactMeals</h1>
        <CartItem />
      </div>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="" />
      </div>
    </React.Fragment>
  );
};

export default Header;
