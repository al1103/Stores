import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./Items.module.scss";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

import { Bags } from "../../App";
const cx = classNames.bind(style);
function Items() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [Count, setCount] = useState(1);
  const [cartItem, setCartItem] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );
  const Notification = { ...useContext(Bags).ref[0] };
  const [classShow] = useState(cx("top-right"));
  const show = () => {
    Notification.current.classList.add(classShow);
    setTimeout(() => {
      hidden();
    }, 3000);
  };
  const hidden = () => {
    Notification.current.classList.remove(classShow);
  };
  const re = /^[0-9\b]+$/;
  const handleSetCount = (e) => {
    if (e.target.value === "") {
      setCount(0);
    } else if (re.test(e.target.value)) {
      setCount(parseInt(e.target.value));
    }
  };
  let { id } = useParams();
  const fetchData = async (id) => {
    const response = await fetch(
      `https://api-by-zilong.onrender.com/Search?id=${id}`
    );
    const data = await response.json();
    setData(...data);
  };

  const CardProduct = [...cartItem];
  console.log(data);
  function AddToCart(ids) {
    const indexItem = CardProduct.findIndex(
      (item) => item.id === parseInt(ids)
    );
    console.log(indexItem);
    if (indexItem < 0) {
      CardProduct.push({
        ...data,
        quantity: Count,
      });
    } else {
      CardProduct[indexItem].quantity += Count;
    }
    setCartItem(CardProduct);
  }
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);
  useEffect(() => {
    fetchData(id);
  }, [id]);
  return (
    <div className={cx("ime")}>
      <Header></Header>
      <div className={cx("ItemBtn")}>
        <button
          className={cx("BackBtn")}
          onClick={() => {
            navigate(-1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          className={cx("NextBtn")}
          onClick={() => {
            navigate(1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className={cx("items")}>
        {data && (
          <div className={cx("insideItems")}>
            <div className={cx("items__img")}>
              <img src={data.image} alt="" />
            </div>
            <div className={cx("items__info")}>
              <div className={cx("items__info__inSide")}>
                <div className={cx("items__title")}>{data.name}</div>
                <div className={cx("items__describe")}>{data.description}</div>
                <div>
                  <div className={cx("items__price")}>{data.price}</div>
                  <div className={cx("items__star")}>
                    <div className={cx("evaluate")}>
                      {/* <Raiting data></Raiting> */}
                    </div>
                  </div>
                  <div className={cx("CountItem")}>
                    <button
                      className={cx("CountItem__btn__minus")}
                      onClick={() => {
                        if (Count > 0) {
                          setCount(Count - 1);
                        }
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <input
                      className={cx("CountItem__number")}
                      value={Count}
                      onChange={handleSetCount}
                      maxLength="3"
                    />
                    <button
                      className={cx("CountItem__btn__plus")}
                      onClick={() => {
                        if (Count < 999) {
                          setCount(Count + 1);
                        }
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className={cx("items__button")}>
                    <div
                      className={cx("items__button_add")}
                      onClick={() => {
                        AddToCart(id);
                        show();
                      }}
                    >
                      Add to cart
                    </div>
                    <div className={cx("items__button_add")}>Bye Now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Items;
