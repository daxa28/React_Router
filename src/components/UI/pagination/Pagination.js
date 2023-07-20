import React from "react";
import classes from "./Pagination.module.css";
import { getPageArray } from "../../../utils/pages";

const Pagination = ({ totalPages, page, changePage }) => {
  let pageArray = getPageArray(totalPages);
  return (
    <div className={classes.page__wrapper}>
      {pageArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={
            page === p
              ? classes.page__current + " " + classes.page
              : classes.page
          }
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
