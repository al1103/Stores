import React, { useContext, useState, useRef } from "react";
import { Bags } from "../../App";
import classNames from "classnames/bind";
import style from "./Popup.module.scss";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(style);
function Popup() {
  let navigate = useNavigate();
  const [popup, setPopup] = useContext(Bags).popup;
  return (
    popup && (
      <div className={cx("popup__check__login")}>
        <div className={cx("img_notification")}>
          <img
            src="https://i.pinimg.com/564x/27/12/78/2712783a51db30c04af34a6f6d05f805.jpg"
            alt=""
          />
        </div>
        <div className={cx("popup__check__login__content")}>
          <div className={cx("popup__check__login__content__close")}>
            <button
              className={cx("close")}
              onClick={() => {
                setPopup(false);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <title>Close</title>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M368 368L144 144M368 144L144 368"
                />
              </svg>
            </button>
          </div>
          <div className={cx("popup__check__login__content__title")}>
            <h2>Hey Wait!!</h2>
            <h6>
              Are you sure .You have not logged into your account, if you want
              to buy products, please login!
            </h6>
          </div>
          <div className={cx("popup__check__login__button")}>
            <button
              className={cx("login")}
              onClick={() => {
                navigate("/login");
                setTimeout(() => {
                  setPopup(false);
                }, 1000);
              }}
            >
              Login
            </button>
            <button
              className={cx("cancel")}
              onClick={() => {
                setPopup(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default Popup;
