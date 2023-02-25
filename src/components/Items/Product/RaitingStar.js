import React from "react";
import star from "./Star.svg";
import style from "./rating.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);
const RatingStar = () => {
  return <img src={star} alt="star" />;
};

const Rating = (props) => {
  const { rate, count } = props.rating;
  let stars = [];
  for (let i = 0; i < rate; i++) {
    stars.push(<RatingStar key={i} />);
  }
  return (
    <div className={cx("rating")}>
      {stars}
      <span className={cx("count")}>({count}) </span>
    </div>
  );
};

export default Rating;
