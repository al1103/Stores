import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./CardProduct.module.scss";
import Button from "../../Button/Button";
import Rating from "./RaitingStar";

const cx = classNames.bind(style);
function CardProduct({ props, onClick }) {
  if (!props) return null;
  const { id, image, name, price, sale, rating } = props;
  return (
    <div className={cx("card")}>
      <Link to={`/items/${id}`}>
        <div className={cx("card__image")}>
          <img
            src={
              image
                ? image
                : "https://i.pinimg.com/564x/f2/a1/de/f2a1de5911163a629f1020549b2af63b.jpg"
            }
            alt="ảnh sản phẩm"
          />
          <div className={cx("sale")}>Sale!</div>
        </div>
      </Link>
      <div className={cx("card__content")}>
        <Link to={`/items/${id}`}>
          <div className={cx("card__content__title")}>
            <h4>{name}</h4>
          </div>

          <div className={cx("card__content__price")}>
            <h3>$ {price}</h3>
            <span>$ {sale}</span>
          </div>
          <Rating className={cx("evaluate")} rating={rating}></Rating>
        </Link>
        <div className={cx("buttonAdd")}>
          <Button onClick={onClick} primary>
            Add to card
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
