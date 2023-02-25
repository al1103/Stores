import React, { useEffect, useState, useReducer, useContext } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import Header from "../../components/Header/Header";
import style from "./gio.module.scss";
const cx = classNames.bind(style);
function Cart() {
  const [total, setTotal] = useState(0);
  const [prices, setPrices] = useState(0);
  const [discountCodes, setDiscountCodes] = useState([]);
  const [code, setCode] = useState("");
  const [product] = useState(() => {
    const localData = JSON.parse(localStorage.getItem("cart"));
    return localData ?? [];
  });
  async function handleProduct() {
    try {
      const response = await fetch("https://api-by-zilong.onrender.com/code");
      const data = await response.json();
      setDiscountCodes(data);
    } catch (error) {
      console.log(error);
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    try {
      let user = event.target;
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case "REMOVE_ITEM":
        return {
          products: state.products.filter((item) => item.id !== action.payload),
        };
      case "ClEAR_CART":
        return {
          ...state,
          product: [],
        };
      case "INCREASE":
        return {
          products: state.products.map((item) =>
            item.id === action.payload
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        };
      case "DECREASE":
        return {
          products: state.products.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      case "UPDATE":
        return {
          products: state.products.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: parseInt(action.payload.value) }
              : item
          ),
        };
      default:
        return state;
    }
  };

  const clearCart = () => {
    dispatch({ type: "ClEAR_CART" });
    setTotal(price);
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
    setTotal(price);
  };
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
    setTotal(price);
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
    setTotal(price);
  };
  const update = (id, value) => {
    dispatch({ type: "UPDATE", payload: { id, value } });
    setTotal(price);
  };

  const initStates = {
    products: [...product],
  };
  var price;
  const [state, dispatch] = useReducer(reducer, initStates);
  const { products } = state;
  // const price = useMemo(() => {
  //   product.reduce(handleSum, 0);
  // }, [products]);
  function handleSum(a, b) {
    return a + parseInt(b.price) * b.quantity;
  }
  price = products.reduce(handleSum, 0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
    setTotal(price);
    setPrices(price);
  }, [products]);

  // discount code

  function isEligibleForDiscount(discountCode, item) {
    return discountCode.eligible_items.includes(item);
  }
  // mã giảm giá bao nhiêu %
  function getDiscount(discountCode, price) {
    if (discountCode.hasOwnProperty("discount")) {
      return price * (discountCode.discount / 100);
    } else if (discountCode.hasOwnProperty("discount_amount")) {
      return price - discountCode.discount_amount;
    }
  }

  // mã giảm giá hết hạn
  function isExpired(discountCode) {
    let today = new Date();
    let expiryDate = new Date(discountCode.expiry_date);
    return today > expiryDate;
  }
  //
  function DiscountCode(discountCode) {
    if (discountCode.uses < discountCode.max_uses) {
      console.log("làm gì có mã giảm giá");
      discountCode.uses += 1;
      fetch(`https://api-by-zilong.onrender.com/code/${discountCode.id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ uses: discountCode.uses }),
      });

      alert("Mã giảm giá được áp dụng");
    } else {
      alert("Mã giảm giá đã hết số lần sử dụng");
      return;
    }
  }
  var totalPrice = price;

  function handleCode(e) {
    e.preventDefault();
    // let form = document.getElementById("discount-form");
    // let code = form.elements["discount-code"].value;

    let discountCode = discountCodes.find(
      (discount) => discount.code.toLowerCase() === code.toLowerCase()
    );

    if (isExpired(code)) {
      alert("Mã giảm giá đã hết hạn");
    } else {
      if (discountCode) {
        DiscountCode(discountCode);
        let discount = getDiscount(discountCode, price);
        console.log(discount);
        totalPrice -= discount;
        setPrices(totalPrice);
      } else {
        alert("Mã giảm giá không hợp lệ");
      }
    }
    console.log(code);
    setCode("");
  }
  useEffect(() => {
    handleProduct();
  }, []);
  // end discount code
  if (product.length === 0) {
    return (
      <div>
        <Header></Header>
        <div className={cx("cart")}>
          <div className={cx("cart__product")}>
            <div className={cx("center__cart")}>
              <div className={cx("cart__product__titles")}>
                <h2>Shopping </h2>
              </div>
              <div className={cx("empty__cart")}>
                <h2>Không có sản phẩm nào trong giỏ hàng</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Header></Header>
        <div className={cx("cart")}>
          <div className={cx("cart__product")}>
            <div className={cx("center__cart")}>
              <div className={cx("cart__product__titles")}>
                <h2>Shopping </h2>
              </div>
              <table>
                <thead>
                  <tr className={cx("tr_items")}>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item, index) => (
                    <tr key={item.id}>
                      <td className={cx("product")}>
                        <div className={cx("product__image")}>
                          <img src={item.image} alt="ảnh_sản_phẩm" />
                        </div>
                        <div className={cx("product__name")}>{item.name}</div>
                      </td>
                      <td className={cx("product__price")}>${item.price}</td>

                      <td className={cx("product__quantity")}>
                        <div className={cx("product__quantity__input")}>
                          <div className={cx("CountItem")}>
                            <button
                              className={cx("CountItem__btn__minus")}
                              onClick={() => {
                                if (item.quantity > 1) {
                                  decrease(item.id);
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
                              value={item.quantity}
                              onChange={(e) => {
                                update(item.id, e.target.value);
                              }}
                              maxLength="3"
                            />
                            <button
                              className={cx("CountItem__btn__plus")}
                              onClick={() => {
                                increase(item.id);
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
                        </div>
                      </td>
                      <td className={cx("product__total")}>
                        ${item.price * item.quantity}
                      </td>
                      <td className={cx("product__remove")}>
                        <button
                          className={cx("btn__recycle")}
                          onClick={() => {
                            removeItem(item.id);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <title>Trash</title>
                            <path
                              d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="20"
                            />
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeMiterlimit="10"
                              strokeWidth="20"
                              d="M80 112h352"
                            />
                            <path
                              d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="20"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={cx("cart__cost")}>
            <div className={cx("center")}>
              <div className={cx("cart__cost__titles")}>
                <h2>Order</h2>
              </div>
              <div className={cx("cart__cost__price")}>
                <div className={cx("cart__cost__price__count")}>{`items`}</div>
                <div
                  className={cx("cart__cost__price__total")}
                >{`$ ${total}`}</div>
              </div>
              <div className={cx("cart__cost__shipping")}>
                <div className={cx("cart__cost__shipping__title")}>
                  Shipping
                </div>
                <div className={cx("cart__cost__shipping__address")}></div>
              </div>
              <div className={cx("cart__cost__code")}>
                <div className={cx("cart__cost__code__title")}>Promo code</div>
                <table className={cx("table")}>
                  <tbody className={cx()}>
                    <tr>
                      <th>Code</th>
                      <td>al1103</td>
                      <td>al1104</td>
                      <td>al1105</td>
                      <td>al1106</td>
                    </tr>
                    <tr>
                      <th>discount</th>
                      <td>10%</td>
                      <td>20%</td>
                      <td>30%</td>
                      <td>40%</td>
                    </tr>
                  </tbody>
                </table>
                <form id="discount-form" className={cx("discount_form")}>
                  <label htmlFor="discount_code">Code:</label>
                  <input
                    type="text"
                    className={cx("discount_code_input")}
                    id="discount-code"
                    name="discount-code"
                    autoComplete="on"
                    value={code}
                    placeholder="Apply code"
                    onChange={(event) => setCode(event.target.value)}
                  />
                  <button
                    className={cx("code__icon__promo")}
                    type="submit"
                    onClick={handleCode}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <title>Pricetags</title>
                      <path
                        d="M403.29 32H280.36a14.46 14.46 0 00-10.2 4.2L24.4 281.9a28.85 28.85 0 000 40.7l117 117a28.86 28.86 0 0040.71 0L427.8 194a14.46 14.46 0 004.2-10.2v-123A28.66 28.66 0 00403.29 32z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                      />
                      <path d="M352 144a32 32 0 1132-32 32 32 0 01-32 32z" />
                      <path
                        d="M230 480l262-262a13.81 13.81 0 004-10V80"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                      />
                    </svg>
                    <div>APPLY</div>
                  </button>
                </form>
              </div>
              <div className={cx("cart__cost__total")}>
                <div className={cx("cart__cost__title")}>Total</div>
                <div
                  className={cx("cart__cost__price__items")}
                >{`$ ${prices}`}</div>
              </div>
              <div className={cx("cart__cost__button")}>
                <button onSubmit={(event) => handleSubmit(event)}>
                  Check out
                </button>
              </div>
            </div>
          </div>
        </div>
        <Link rel="stylesheet" to="/">
          <button className={cx("home")}>Go Home</button>
        </Link>
      </>
    );
  }
}
export default Cart;
