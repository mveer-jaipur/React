import React from "react";
import Card from "../UI/Card";

import classes from "./AvailableMeals.module.css";
import DUMMY_MEALS from "./DummyMeals";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = (props) => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => {
            return (
              <React.Fragment>
                <MealItem
                  id={meal.id}
                  key={meal.id}
                  name={meal.name}
                  description={meal.description}
                  price={meal.price}
                />
              </React.Fragment>
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
