import React, {
  useRef,
  useState,
  useContext,
  Fragment,
  useEffect,
} from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import classNames from "classnames/bind";
import { Bags } from "../../App";
import styles from "./Login.module.scss";
import Notification from "../../components/Notification/Notification";

const cx = classNames.bind(styles);
function Login() {
  let Navigator = useNavigate();
  const [account, setAccount] = useContext(Bags).account;
  const [notification] = useContext(Bags).ref;
  async function handleSubmit(value) {
    const response = await fetch(
      `https://api-by-zilong.onrender.com/users?email=${value.email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (data.length === 0) {
      alert("errorEmail không tồn tại");
    }
    if (data.length > 0) {
      if (data[0].password === value.password) {
        show();
        setTimeout(() => {
          setAccount(data[0]);
        }, 1000);
        localStorage.setItem("account", JSON.stringify(data[0]));
      } else {
        alert("error", "Mật khẩu không đúng");
      }
    }
  }

  // const LinkPage = useRef();
  const passwordRef = useRef();
  const [classShow] = useState("top-right");
  const show = () => {
    notification.current.classList.add(classShow);
    setTimeout(() => {
      hidden();
    }, 2000);
  };
  const hidden = () => {
    const Check = notification.current;
    if (Check) {
      notification.current.classList.remove(classShow);
    }
  };

  // useEffect(() => {}, [LinkPage]);

  const [eye, setEye] = useState(false);
  return (
    <div className={cx("login__phone")}>
      <div className={cx("login__out")} onClick={() => Navigator("/")}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <title>Arrow Back Circle</title>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M249.38 336L170 256l79.38-80M181.03 256H342"
          />
          <path
            d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="32"
          />
        </svg>
      </div>
      <h1 className={cx("title")}>My Form</h1>
      <div className={cx("create-account")}>
        <Link to={"/SignUp"}>tạo tài khoản</Link>
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validateOnChange={false} // disable
        validateOnBlur={false} // disable
        validationSchema={Yup.object({
          email: Yup.string()
            .email(<div className={cx("error")}>Email không hợp lệ</div>)
            .required(<div className={cx("error")}>không được để trống</div>),

          password: Yup.string()
            .min(
              8,
              <div className={cx("error")}>nhập mật khẩu nhiều hơn 8 số</div>
            )
            .required(<div className={cx("error")}>không được để trống</div>),
        })}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
          setTimeout(() => {
            setSubmitting(false);
          }, 1000);
        }}
      >
        {({
          errors,
          touched,
          handleChange,
          values,
          handleSubmit,
          handleBlur,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className={cx("form")}>
            <input
              type="email"
              placeholder="email address"
              name="email"
              id=" email"
              className={cx("email")}
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              autoComplete="off"
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <div className={cx("input__pass")}>
              <input
                type="password"
                ref={passwordRef}
                placeholder="password"
                name="password"
                id=" password"
                className={cx("password")}
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
              />
              <div className={cx("icon__eye")}>
                {!eye && (
                  <svg
                    onClick={() => {
                      setEye(!eye);
                      passwordRef.current.type = "text";
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <title>Eye</title>
                    <path
                      d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                    />
                    <circle
                      cx="256"
                      cy="256"
                      r="80"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                    />
                  </svg>
                )}

                {eye && (
                  <svg
                    onClick={() => {
                      setEye(!eye);
                      passwordRef.current.type = "password";
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <title>Eye Off</title>
                    <path d="M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM255.66 384c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 00.14-2.94L93.5 161.38a2 2 0 00-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0075.8-12.58 2 2 0 00.77-3.31l-21.58-21.58a4 4 0 00-3.83-1 204.8 204.8 0 01-51.16 6.47zM490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 00-74.89 12.83 2 2 0 00-.75 3.31l21.55 21.55a4 4 0 003.88 1 192.82 192.82 0 0150.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 010 .16 310.72 310.72 0 01-64.12 72.73 2 2 0 00-.15 2.95l19.9 19.89a2 2 0 002.7.13 343.49 343.49 0 0068.64-78.48 32.2 32.2 0 00-.1-34.78z" />
                    <path d="M256 160a95.88 95.88 0 00-21.37 2.4 2 2 0 00-1 3.38l112.59 112.56a2 2 0 003.38-1A96 96 0 00256 160zM165.78 233.66a2 2 0 00-3.38 1 96 96 0 00115 115 2 2 0 001-3.38z" />
                  </svg>
                )}
              </div>
            </div>
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button
              type="submit"
              disabled={isSubmitting}
              className={cx("btn-login")}
            >
              Log In
            </button>
          </form>
        )}
      </Formik>
      <div className={cx("Or")}>Or</div>
      <div className={cx("icon__login")}>
        <a href="#" className={cx("login__fb")}>
          <img src="https://img.icons8.com/color/256/facebook-new.png" alt="" />
        </a>
        <a href="#" className={cx("login__github")}>
          <img src="https://img.icons8.com/fluency/256/github.png" alt="" />
        </a>
      </div>
      <div className={cx("forgot__password")}>
        <a href="#">Forgot Password?</a>
      </div>
    </div>
  );
}

export default Login;
