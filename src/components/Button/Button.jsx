import React from "react";
import * as classes from "./button.module.scss";

export default function Button({ text, action }) {
  function handleClick() {
    if (action) action();
  }

  return (
    <button onClick={handleClick} className={classes.button}>
      {text}
    </button>
  );
}
