import classNames from "classnames/bind";
import style from "./Representative.module.scss";
import Button from "../../Button/Button";
import orochi from "../Image/image_clipdrop-enhance.png";
const cx = classNames.bind(style);
function Representative() {
  return (
    <div className={cx("representative")}>
      <div className={cx("representative__item")}>
        <div className={cx("representative__item__title")}>
          <p className={cx("representative__item__sale")}>20% OFF</p>
          <div className={cx("representative__items")}>
            FINE
            <br />
            SNOW
          </div>
          {/* custom date now */}
          <p className={cx("representative__item__date")}>15 Nov to 7 Dec</p>
        </div>
        <div className={cx("representative__item__img")}>
          <img src={orochi} alt="orochi" />
        </div>
        <div className={cx("representative__item__text")}>
          <p>It’s a leap year. </p>
          <h1>iPhone 12 Pro</h1>
          <p>
            Do something big Lorem ipsum dolor, sit amet consectetur adipisicing
            elit.
          </p>
          <Button shoppingCart>Shop</Button>
        </div>
      </div>
    </div>
  );
}

export default Representative;
