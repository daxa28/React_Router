import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__link}>
        <Link className={classes.link} to="/">
          Главная
        </Link>
        {/* <Link className={classes.link} to="/about">
          О сайте
        </Link> */}
        <Link className={classes.link} to="/posts">
          Посты
        </Link>
        <Link className={classes.link} to="/login">
          Личный кабинет
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
