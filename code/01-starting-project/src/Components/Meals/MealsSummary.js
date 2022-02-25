import React from "react";
import Card from "../UI/Card";

import classes from "./MealSummary.module.css";

const MealsSummary = () => {
  return (
    <Card className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your faviorate meal from our board selection of available meals
        and enjoy delicious lunch or dinner at home
      </p>
      <p>
        All our meals are cooked with high quality ingredients, just in time and
        of course by experienced chef
      </p>
    </Card>
  );
};

export default MealsSummary;
