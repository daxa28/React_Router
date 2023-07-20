import React from "react";
import classes from "./MyButton.module.css";

function MyButton({ children, ...props }) {
  return (
    <button {...props} className={classes.myBtn}>
      <span className={`${classes.myBtn__line__top} ${classes.myBtn__line}`} />
      <span
        className={`${classes.myBtn__line__right} ${classes.myBtn__line}`}
      />
      <span
        className={`${classes.myBtn__line__bottom} ${classes.myBtn__line}`}
      />
      <span className={`${classes.myBtn__line__left} ${classes.myBtn__line}`} />
      {children}
    </button>
  );
}

export default MyButton;
