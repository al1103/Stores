import React, { createContext, useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./Header.module.scss";
import Button from "../Button/Button";
import Search from "./Search/Search";
import Nav from "./Search/Nav/Nav";
import { Bags } from "../../App";
import { useViewport } from "../../CheckScreen/index";
import Tippy from "@tippyjs/react/headless";
import logo from "./Logo.png";

const cx = classNames.bind(style);
export const generalShow = createContext();
const user = JSON.parse(localStorage.getItem("user"));
const avatar = user ? user.image : "https://via.placeholder.com/80/fff.png";

function Header() {
  let navigate = useNavigate();
  const [Setting, setSetting] = useState(false);
  const [account, setAccount] = useContext(Bags).account;
  const [theme, setTheme] = useContext(Bags).theme;
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const store = { show: [show, setShow] };
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const countItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCount(countItems.length);
  }, []);
  const Account_Image = JSON.parse(localStorage.getItem("account"));
  let Image, id_user;

  if (Account_Image) {
    ({ Image, id_user } = Account_Image);
  }

  const SettingAccount = [
    {
      id: 1,
      title: "view profile",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <title>Person</title>
          <path
            d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <path
            d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="32"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Settings",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <title>Settings</title>
          <path
            d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
        </svg>
      ),
      children: {
        title: "Language",
        data: [
          {
            code: "en",
            title: "English",
          },
          {
            code: "vi",
            title: "Vietnamese",
          },
        ],
      },
    },
    {
      id: 3,
      title: "Dark Mode",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <title>Moon</title>
          <path
            d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Sign out",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <title>Log Out</title>
          <path
            d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
        </svg>
      ),
    },
  ];
  const [history, setHistory] = useState([{ data: SettingAccount }]);
  const current = history[history.length - 1];
  // đóng setting
  function handleClose() {
    setSetting(false);
  }

  function FixedScroll(e) {
    if (e) {
      // var x = window.scrollX;
      // var y = window.scrollY;
      // window.onscroll = function () {
      //   window.scrollTo(x, y);
      // };
      document.body.style.overflow = "hidden";
    } else {
      // window.onscroll = function () {};
      document.body.style.overflow = "auto";
    }
  }
  //setting boolean nếu đúng thì sẽ ko cho scroll
  FixedScroll(Setting);
  if (useViewport().width < 768) {
    return (
      <div>
        <div className={cx("header")}>
          <div className={cx("setting")}>
            <button
              className={cx("show__setting")}
              onClick={() => {
                setSetting(!Setting);
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
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        {Setting && (
          <div className={cx("contents__setting")}>
            <div className={cx("content")}>
              <div className={cx("closeNavbar")}>
                <div className={cx("IconClose")} onClick={handleClose}>
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
                </div>
              </div>
              <div className={cx("search__mobile")}>
                <generalShow.Provider value={store} className={cx("search__")}>
                  <Search></Search>
                </generalShow.Provider>
              </div>
              <div className={cx("Nav")}>
                <Nav></Nav>
              </div>
            </div>
          </div>
        )}
        <div className={cx("below")}>
          <div className={cx("logo_mobile")}>
            <img src={logo} alt="logo" />
          </div>
          {/* login */}
          <div className={cx(show ? "SignIn" : "tall__width")}>
            <Link to="/gio" className={cx("button__Bag")}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <title>Bag</title>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                />
              </svg>
              <span className={cx("bag__count")}>{count}</span>
            </Link>
            {!!account
              ? !show && (
                  <Tippy
                    interactive={true}
                    visible={visible}
                    placement="bottom"
                    onClickOutside={() => {
                      setVisible(false);
                      setHistory([{ data: SettingAccount }]);
                    }}
                    render={(attrs) => (
                      <div className={cx("box")} tabIndex="-1" {...attrs}>
                        {history.length > 1 && (
                          <div
                            className={cx("box__content")}
                            onClick={() => {
                              setHistory(history.slice(0, history.length - 1));
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <title>Arrow Back</title>
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="48"
                                d="M244 400L100 256l144-144M120 256h292"
                              />
                            </svg>
                            <div>Language</div>
                          </div>
                        )}
                        {current.data.map((item, index) => {
                          const children = !!item.children;

                          return (
                            <div
                              key={index}
                              className={cx("box__content")}
                              onClick={() => {
                                if (children) {
                                  setHistory((pre) => [...pre, item.children]);
                                } else {
                                  switch (item.title) {
                                    case "Dark Mode":
                                      setTheme(
                                        theme === "light" ? "dark" : "light"
                                      );
                                      break;
                                    case "Sign out":
                                      setAccount(null);
                                      break;
                                    case "Vietnamese":
                                      alert("Vietnamese");
                                      break;
                                    case "English":
                                      alert("English");
                                      break;
                                    case "view profile":
                                      navigate(`/profile/${id_user}`);
                                      break;
                                    default:
                                      break;
                                  }
                                }
                              }}
                            >
                              <div>{item.icon}</div>
                              <span>{item.title}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  >
                    <div
                      className={cx("avatar")}
                      onClick={() => {
                        setVisible(!visible);
                      }}
                    >
                      <img src={Image} alt="" />
                    </div>
                  </Tippy>
                )
              : !show && (
                  <Button to="/Login" className={cx("button")}>
                    login
                  </Button>
                )}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={cx("header")}>
      <div className={cx("headerLeft")}>
        <Link to="/">
          <div className={cx("logo")}>
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <Nav></Nav>
      </div>
      {/* right control */}

      <div className={cx(show ? "SignIn" : "tall__width")}>
        <generalShow.Provider value={store}>
          <Search></Search>
        </generalShow.Provider>
        <Link to="/gio" className={cx("button__Bag")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <title>Bag</title>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
            />
          </svg>
          <span className={cx("bag__count")}>{count}</span>
        </Link>
        {account
          ? !show && (
              <Tippy
                interactive={true}
                visible={visible}
                placement="bottom"
                onClickOutside={() => {
                  setVisible(false);
                  setHistory([{ data: SettingAccount }]);
                }}
                render={(attrs) => (
                  <div className={cx("box")} tabIndex="-1" {...attrs}>
                    {history.length > 1 && (
                      <div
                        className={cx("box__content")}
                        onClick={() => {
                          setHistory(history.slice(0, history.length - 1));
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <title>Arrow Back</title>
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="48"
                            d="M244 400L100 256l144-144M120 256h292"
                          />
                        </svg>
                        <div>Language</div>
                      </div>
                    )}
                    {current.data.map((item, index) => {
                      const children = !!item.children;

                      return (
                        <div
                          key={index}
                          className={cx("box__content")}
                          onClick={() => {
                            if (children) {
                              setHistory((pre) => [...pre, item.children]);
                            } else {
                              switch (item.title) {
                                case "Dark Mode":
                                  setTheme(
                                    theme === "light" ? "dark" : "light"
                                  );
                                  break;
                                case "Sign out":
                                  setAccount(null);
                                  break;
                                case "Vietnamese":
                                  alert("Vietnamese");
                                  break;
                                case "English":
                                  alert("English");
                                  break;
                                case "view profile":
                                  navigate(`/profile/${id_user}`);
                                  break;
                                default:
                                  break;
                              }
                            }
                          }}
                        >
                          <div>{item.icon}</div>
                          <span>{item.title}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              >
                <div
                  className={cx("avatar")}
                  onClick={() => {
                    setVisible(!visible);
                  }}
                >
                  <img src={Image} alt="avatar" />
                </div>
              </Tippy>
            )
          : !show && (
              <Button to="/Login" className={cx("button")}>
                login
              </Button>
            )}
      </div>
    </div>
  );
}

export default Header;
