import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import classNames from "classnames/bind";
import style from "./Card.module.scss";
import KatanaClipdrop from "../Image/Katana_clipdrop.png";
const cx = classNames.bind(style);
function Card({
  children,
  small = false,
  large = false,
  medium = false,
  keyInformation,
}) {
  const buttonControl = cx("buttonShop", { small, large, medium });
  let buttonSize;
  const cardSize = cx("globalNav", { small, large, medium });
  if (small) {
    buttonSize = "small";
  } else if (medium) {
    buttonSize = "medium";
  } else if (large) {
    buttonSize = "large";
  } else {
    return;
  }
  return (
    <div className={cardSize}>
      <div className={cx("img")}>
        <img src={keyInformation.Image} alt="anh katana" />
      </div>
      <div className={cx("writeText")}>
        <p>{keyInformation.properties}</p>
        <h4>{keyInformation.device}</h4>
        <h1>{keyInformation.name}</h1>
      </div>
      <span className={buttonControl}>
        <Button buttonSize={buttonSize} to="/">
          {children}
        </Button>
      </span>
    </div>
  );
}

export default Card;
