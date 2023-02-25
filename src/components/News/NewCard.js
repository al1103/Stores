import React from "react";
import classNames from "classnames/bind";
import style from "./NewCard.module.scss";
const cx = classNames.bind(style);
function NewCard(props) {
  const { image, name, description } = props.item;
  return (
    <div className={cx("new__card")}>
      <div className={cx("new__card__img")}>
        <img src={image} alt="ảnh" />
      </div>
      <div className={cx("new__card__content")}>
        <div className={cx("new__card__content__title")}>
          <h3>{name}</h3>
        </div>
        <div className={cx("new__card__content_paper")}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default NewCard;
