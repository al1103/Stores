import React, { createContext, useState } from "react";
import classNames from "classnames/bind";
import style from "./ResultSearch.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);
export const Product = createContext();
function ResultSearch({ data }) {
  return (
    <div>
      <Link to={`/Items/${data.id}`} target="_self">
        <div className={cx("result__item")}>
          <div className={cx("result__item__img")}>
            <img src={data.image} alt="img" />
          </div>
          <div className={cx("result__item__info")}>
            <div className={cx("result__title")}>{data.name}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ResultSearch;
