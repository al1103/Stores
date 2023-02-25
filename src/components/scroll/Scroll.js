import React, { useEffect, useRef } from "react";
import classNames from "classnames/bind";
import style from "./Scroll.module.scss";
const cx = classNames.bind(style);

function Scroll() {
  const Ref = useRef();
  const toggleVisible = () => {
    if (document.body.scrollTop < 500) {
      Ref.current.style.display = "none";
    } else {
      Ref.current.style.display = "flex";
    }
  };
  document.body.addEventListener("scroll", toggleVisible);
  const handleScroll = () => {
    document.body.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    toggleVisible();
  }, []);

  return (
    <div className={cx("scroll")} ref={Ref} onClick={handleScroll}>
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
          d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
        />
      </svg>
    </div>
  );
}

export default Scroll;
