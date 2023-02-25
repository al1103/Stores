import React, { useState, useEffect, createRef } from "react";
import style from "./Tab.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
function Tab({ input, handleSort }) {
  const [tabIndex, setTabIndex] = useState(0);
  // var [content, setContent] = useState([]);
  const refTabContents = [];
  const changeTabIndex = (index) => {
    setTabIndex(index);
  };
  input.forEach(() => {
    refTabContents.push(createRef());
  });

  const updateTabContent = () => {
    refTabContents.forEach((refTab, index) => {
      const elmTab = refTab.current;

      if (tabIndex === index) {
        elmTab.style.maxHeight = elmTab.scrollHeight + "px";
        elmTab.style.display = "block";
      } else {
        elmTab.style.maxHeight = "0px";
        elmTab.style.display = "none";
      }
    });
  };
  useEffect(() => {
    // setContent(
    //   input.sort((a, b) => {
    //     return b.priceSale - a.priceSale;
    //   })
    // );
    updateTabContent();
    window.addEventListener("resize", updateTabContent);
    return () => {
      window.removeEventListener("resize", updateTabContent);
    };
  }, [tabIndex]);

  return (
    <div className={cx("lp-tab-content")}>
      <div className={cx("tab")}>
        {input.map((tabContent, index) => {
          return (
            <button
              key={index}
              className={cx("tab-link", "")}
              onClick={() => changeTabIndex(index)}
            >
              <img src={tabContent.svg} alt="" />
            </button>
          );
        })}
      </div>
      <div className={cx("containers")}>
        <div className={cx("menu")}>
          <button className={cx("toggle")}>Topics</button>
          <ul className={cx("list")}>
            <li
              className={cx("list-item")}
              onMouseDown={() => {
                handleSort(1, tabIndex);
              }}
            >
              Giá tăng dần
            </li>
            <li
              className={cx("list-item")}
              onMouseDown={() => {
                handleSort(2, tabIndex);
              }}
            >
              Giá giảm dần
            </li>
            <li
              className={cx("list-item")}
              onMouseDown={() => {
                handleSort(3, tabIndex);
              }}
            >
              A-Z
            </li>
            <li
              className={cx("list-item")}
              onMouseDown={() => {
                handleSort(4, tabIndex);
              }}
            >
              Z-A
            </li>
          </ul>
        </div>
        <div className={cx("tab-content")}>
          <div className={cx("tab-wrapper")}>
            {input.map((tabContent, index) => {
              return (
                <div
                  ref={refTabContents[index]}
                  className={cx("around")}
                  key={index}
                >
                  <div className={cx("contents")}>{tabContent.content}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tab;
