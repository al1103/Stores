import classNames from "classnames/bind";
import React, { useEffect, useState, useRef, useContext } from "react";
import style from "./Main.module.scss";
import CardProduct from "../Items/Product/CardProduct";
import { Bags } from "../../App";

const cx = classNames.bind(style);
function Main() {
  const Notification = { ...useContext(Bags).ref[0] };
  const [popup, setPopup] = useContext(Bags).popup;
  const [main, setMain] = useState(true);
  const [productsItem, setProductsItem] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [account, setAccount] = useContext(Bags).account;
  const [classShow] = useState("top-right");

  const show = () => {
    Notification.current.classList.add(classShow);
    setTimeout(() => {
      hidden();
    }, 3000);
  };
  const hidden = () => {
    Notification.current.classList.remove(classShow);
  };
  async function getProducts(Products) {
    try {
      let response = await fetch(
        `https://api-by-zilong.onrender.com/${Products}`,
        {
          method: "GET",
        }
      );
      let data = await response.json();
      setProductsItem(data);
    } catch (err) {
      console.log(err);
      setMain(false);
    }
  }
  function handleAdd(product) {
    addToCart(product);
  }

  function addToCart(product) {
    if (!!account) {
      const newCart = [...cartItem];
      const Items = productsItem.find((item) => item.id === product.id);
      if (Items) {
        const index = newCart.findIndex((item) => item.id === product.id);
        if (index < 0) {
          newCart.push({
            ...Items,
            quantity: 1,
          });
        } else {
          newCart[index].quantity += 1;
        }
        //
        setCartItem(newCart);
        show();
      }
    } else {
      setPopup(true);
      console.log(popup);
    }
  }
  useEffect(() => {
    getProducts("armor");
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);
  return (
    main && (
      <div className={cx("main")}>
        <div className={cx("main__title")}>
          <h1>Best Seller Products</h1>
          <h6>speaker There are many variation passages</h6>
        </div>
        <div className={cx("main__content")}>
          {productsItem.map((item, index) => (
            <div key={index}>
              <CardProduct
                props={item}
                onClick={() => {
                  handleAdd(item);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    )
  );
}

export default Main;
