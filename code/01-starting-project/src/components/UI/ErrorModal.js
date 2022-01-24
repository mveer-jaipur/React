import React from "react";
import Button from "./Button";
import Card from "./Card";

import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <div className={classes.backdrop}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>{props.title}</header>
        <p className={classes.content}>{props.message}</p>
        <footer className={classes.actions}>
          <Button onClick={props.closeModalHandler}>okay</Button>
        </footer>
      </Card>
    </React.Fragment>
  );
};

export default ErrorModal;
