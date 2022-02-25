import React, { useState, useRef } from "react";
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsCorrect, setAmountIsCorrect] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredValue = amountInputRef.current.value;
    const enteredValueInNumber = +enteredValue;

    if (
      enteredValue.trim().length === 0 ||
      enteredValueInNumber < 1 ||
      enteredValueInNumber > 5
    ) {
      setAmountIsCorrect(false);
      return;
    }

    props.onAddItem(enteredValueInNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button type="submit">+Add</button>
      {!amountIsCorrect && <p>Please enter the correct amount(1-5)</p>}
    </form>
  );
};

export default MealItemForm;
