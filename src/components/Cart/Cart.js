import classNames from "classnames/bind";
import style from "./Cart.module.scss";
import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  Fragment,
} from "react";
import { Bags } from "../../App";

const cx = classNames.bind(style);
var scrollTop;
var scrollLeft;

function disableScroll(e) {
  if (document.getElementById("cart").contains(e.target)) {
    getScrollPosition();
  }
  if (document.getElementById("filter").contains(e.target)) {
    enableScroll();
    console.log("no");
  }
}
// Get the current page scroll position
function getScrollPosition() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

function enableScroll() {
  window.onscroll = function () {};
}

// const handleOutsideClick = (e) => {
//   if (!containerRef.contains(e.target)) {
//   }
function Cart() {
  const containerRef = useRef(null);

  const [showBag, setShowBag] = useContext(Bags).Bag;
  return (
    <Fragment>
      {showBag && (
        <div>
          <div
            id="cart"
            className={cx("cart")}
            onClick={disableScroll}
            ref={containerRef}
          >
            <div className={cx("cart__title")}>Giỏ hàng</div>
            <div className={cx("cart__item")}></div>
          </div>
          <div className={cx("items")}>
            <div>
              <div className={cx("left__item")}>
                <div className={cx("img__item")}>
                  <img src="" alt="" />
                </div>
                <div className={cx("right__item")}>
                  <div className={cx("info__item")}>
                    <div className={cx("name__item")}>name</div>
                    <div className={cx("price__item")}>price</div>
                  </div>
                  <div className={cx("count")}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Cart;
