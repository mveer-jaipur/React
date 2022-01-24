import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 && enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter valid input",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid date",
        message: "Please enter a date more than 1",
      });
      return;
    }

    props.onAdduser(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
  };

  const enteredNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const enteredAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const closeModalHandler = () => {
    setError("");
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          closeModalHandler={closeModalHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Enter User Name</label>
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={enteredNameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={enteredAgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
