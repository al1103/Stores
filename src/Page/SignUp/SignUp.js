import React, { useContext, useState } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { Bags } from "../../App";

import classNames from "classnames/bind";
import styles from "./SignUp.module.scss";

const cx = classNames.bind(styles);
function SignUp() {
  const [notification] = useContext(Bags).ref;

  let navigate = useNavigate();
  const [account, setAccount] = useContext(Bags).account;
  const [id_user] = useState(uuidv4());
  const paste = () => {
    document
      .getElementById("confirmPassword")
      .addEventListener("paste", function (e) {
        e.preventDefault();
      });
  };
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
  async function handleSubmit(values) {
    try {
      fetch("https://api-by-zilong.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    } catch (err) {
      console.log(err);
    }
  }
  console.log(id_user);
  return (
    <div className={cx("body")}>
      <div className={cx("Sign__Up")}>
        <div className={cx("Sign__Up__Title")}>Sign Up</div>
        <div className={cx("Sign__Up__Form")}>
          <Formik
            className={cx("form")}
            initialValues={{
              Image: "",
              bio: "",
              firstname: "",
              lastname: "",
              email: "",
              password: "",
              id_user: id_user,
              products: [],
            }}
            validateOnChange={false} // disable
            validateOnBlur={false} // disable
            validationSchema={Yup.object({
              firstname: Yup.string()
                .lowercase()
                .trim()
                .max(
                  15,
                  <div className={cx("error", "firstname__error")}>
                    Must be 15 characters or less
                  </div>
                )
                .required(
                  <div className={cx("error", "firstname__error")}>
                    không được để trống
                  </div>
                ),
              password: Yup.string()
                .min(
                  8,
                  <div className={cx("error", "password__error")}>
                    nhập mật khẩu nhiều hơn 8 số
                  </div>
                )
                .required(
                  <div className={cx("error", "password__error")}>
                    không được để trống
                  </div>
                ),
              lastname: Yup.string()
                .lowercase()
                .trim()
                .max(
                  15,
                  <div className={cx("error", "lastname__error")}>
                    Must be 15 characters or less
                  </div>
                )
                .required(
                  <div className={cx("error", "lastname__error")}>
                    không được để trống
                  </div>
                ),
              email: Yup.string()
                .email(
                  <div className={cx("error", "email__error")}>
                    email không hợp lệ
                  </div>
                )
                .required(
                  <div className={cx("error", "email__error")}>
                    không được để trống
                  </div>
                )
                .test(
                  <div className={cx("email_check")}>uniqueEmail</div>,
                  <div className={cx("email_check")}>Email already in use</div>,
                  async function (value) {
                    const response = await fetch(
                      `https://api-by-zilong.onrender.com/users?email=${value}`,
                      {
                        method: "GET",
                        headers: {
                          "Content-Type": "application/json",
                        },
                      }
                    );
                    const data = await response.json();
                    return data.length === 0;
                  }
                ),
              confirmPassword: Yup.string()
                .oneOf(
                  [Yup.ref("password"), null],
                  <div className={cx("error", "confirmPassword__error")}>
                    Mật khẩu không khớp
                  </div>
                )
                .required(
                  <div className={cx("error", "confirmPassword__error")}>
                    không được để trống
                  </div>
                ),
              rules: Yup.boolean()
                .oneOf([true])
                .required(
                  <div className={cx("error", "rules__error")}>
                    Must Accept Terms and Conditions
                  </div>
                ),
            })}
            onSubmit={(values, { setSubmitting }) => {
              handleSubmit(values);
              setAccount(values);
              show();
              localStorage.setItem("account", JSON.stringify(values));
              setTimeout(() => {
                setSubmitting(false);
                navigate("/");
              }, 1000);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              onFocus,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div className={cx("form__group")}>
                  <div>
                    <input
                      type="text"
                      name="firstname"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstname}
                      placeholder="First Name"
                      className={cx("firstname")}
                    />
                    {errors.firstname && touched.firstname && errors.firstname}
                  </div>
                  <input
                    type="text"
                    name="lastname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastname}
                    placeholder="Last Name"
                    className={cx("lastname")}
                  />
                  {errors.lastname && touched.lastname && errors.lastname}
                </div>
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
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={cx("password")}
                  placeholder="Password"
                />
                {errors.password && touched.password && errors.password}
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  id="confirmPassword"
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  onFocus={paste}
                  placeholder="Confirm Password"
                  className={cx("confirmPassword")}
                />
                {errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword}
                <input
                  type="checkbox"
                  name="rules"
                  id="rules"
                  className={cx("rules")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.rules}
                />
                {errors.rules && touched.rules && errors.rules}
                <span className={cx("rules__text")}>
                  I agree to the terms and conditions
                </span>
                <button
                  className={cx("btn__submit")}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
