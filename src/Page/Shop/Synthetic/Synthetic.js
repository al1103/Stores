import classNames from "classnames/bind";
import React, { useEffect, useState, useRef } from "react";
import style from "./Synthetic.module.scss";
import CardProduct from "../../../components/Items/Product/CardProduct";
import Notification from "../../../components/Notification/Notification";

const cx = classNames.bind(style);
function Synthetic() {
  const notification = useRef();
  const ref = useRef();
  const [main, setMain] = useState(true);
  const [productsItem, setProductsItem] = useState([]);
  const [limit, setLimit] = useState(10);
  const [length, setLength] = useState(0);
  const [cartItem, setCartItem] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  const [classShow] = useState("top-right");
  const show = () => {
    notification.current.classList.add(classShow);
    setTimeout(() => {
      hidden();
    }, 3000);
  };
  function handleMore() {
    let newLimit = limit;
    setLimit(newLimit + 5);
  }
  function handleCheckMore() {
    if (productsItem.length < limit) {
      ref.current.style.display = "none";
    } else {
      ref.current.style.display = "flex";
    }
  }

  const hidden = () => {
    notification.current.classList.remove("top-right");
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
  useEffect(() => {
    getProducts(`armor?_limit=${limit}`);
    handleCheckMore();
  }, [limit]);

  // var end = console.timeEnd("getProducts");
  // console.log(end);
  // console.log(end);
  function handleAdd(product) {
    addToCart(product);
    show();
    // stopScroll();
  }
  // function stopScroll() {
  //   notification.current.style.top = 12 + "px";
  // }

  function addToCart(product) {
    // lấy tất cả sản phẩm trong danh sách sản phẩm truyền vào từ props của component CardProduct (Product.js) và so sánh với id sản phẩm truyền vào từ props của component CardProduct (Product.js) nếu trùng thì lấy sản phẩm đó ra và gán vào biến Items (lấy sản phẩm trong danh sách sản phẩ m) và nếu không trùng thì trả về undefined (không lấy sản phẩm trong danh sách sản phẩm) và nếu trả về undefined thì không thực hiện các câu lệnh bên trong if (Items) và nếu trả về sản phẩm trong danh sách sản phẩm thì thực hiện các câu lệnh bên trong if (Items) và gán giá trị của biến Items vào biến newCart (lấy tất cả sản phẩm trong giỏ hàng) và tìm sản phẩm trong giỏ hàng và nếu không tìm thấy sản phẩm trong giỏ hàng thì thêm sản phẩm đó vào giỏ hàng và nếu tìm thấy sản phẩm trong giỏ hàng thì tăng số lượng sản phẩm trong giỏ hàng lên 1 đơn vị và gán giá trị của biến newCart vào biến cartItem (lấy tất cả sản phẩm trong giỏ hàng)
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
    }
  }
  useEffect(() => {
    getProducts(`armor?_limit=${limit}`);
    setLength(productsItem.length);
    handleCheckMore();
  }, [productsItem.length]);
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
        <Notification ref={notification}></Notification>
        <div className={cx("more_items")} onClick={handleMore} ref={ref}>
          <button>More Items</button>
        </div>
      </div>
    )
  );
}

export default Synthetic;
