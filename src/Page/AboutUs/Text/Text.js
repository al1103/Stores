import React from "react";
import Nasa from "./Nasa.png";
import Roman from "./roman.jpg";
import styles from "./Text.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Text() {
  return (
    <div className={cx("container")}>
      <div className={cx("text")}>
        <h1>THE WALT ATOMIC COMPANY</h1>
      </div>
      <div className={cx("exchange_rate")}>
        $98.00
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <title>Arrow Up</title>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="48"
              d="M112 244l144-144 144 144M256 120v292"
            />
          </svg>
        </span>
        <span> +4.40 (+4.44 %)</span>
      </div>
      <div className={cx("new")}>
        <h1>RECENT NEWS</h1>
        <div className={cx("new_items")}>
          <div className={cx("new_item")}>
            <div className={cx("content")}>
              <div className={cx("thumbnail")}>
                <img src={Roman} alt="img" />
              </div>
              <div className={cx("entry_header")}>
                <div className={cx("entry_meta")}>
                  <span className={cx("poster_on")}>JANUARY 01, 2023</span>
                </div>
                <h2>
                  Mark Parker to Be Named Chairman of The Walt Disney Company
                </h2>
              </div>
            </div>
            <div className={cx("content")}>
              <div className={cx("thumbnail")}>
                <img src={Roman} alt="img" />
              </div>
              <div className={cx("entry_header")}>
                <div className={cx("entry_meta")}>
                  <span className={cx("poster_on")}>JANUARY 11, 2023</span>
                </div>
                <h2>The Walt Disney Company Wins 9 Golden Globe® Awards</h2>
              </div>
            </div>
          </div>
          <div className={cx("new_item", "item")}>
            <div className={cx("content")}>
              <div className={cx("thumbnail_img")}>
                <img src={Roman} alt="img" />
              </div>
              <div className={cx("entry_header")}>
                <div className={cx("entry_meta")}>
                  <span className={cx("poster_on")}>JANUARY 23, 2023</span>
                </div>
                <h2 className={cx("Content_middle")}>
                  Disney+ Debuts ‘Star Wars: The Mandalorian’ Season 3 Trailer
                </h2>
              </div>
            </div>
          </div>
          <div className={cx("new_item")}>
            <div className={cx("content")}>
              <div className={cx("thumbnail")}>
                <img src={Roman} alt="img" />
              </div>
              <div className={cx("entry_header")}>
                <div className={cx("entry_meta")}>
                  <span className={cx("poster_on")}>JANUARY 17, 2023</span>
                </div>
                <h2>
                  Marvel Studios Debuts ‘Ant-Man and The Wasp: Quantumania’
                  Trailer
                </h2>
              </div>
            </div>
            <div className={cx("content")}>
              <div className={cx("thumbnail")}>
                <img src={Roman} alt="img" />
              </div>
              <div className={cx("entry_header")}>
                <div className={cx("entry_meta")}>
                  <span className={cx("poster_on")}>JANUARY 5, 2023</span>
                </div>
                <h2>Disney and Make-A-Wish Team Up for a Magical First Pass</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("round")}>
        <div className={cx("about")}>
          <div className={cx("about_img")}>
            <img src={Roman} alt="" />
          </div>
          <div className={cx("about_text")}>
            <h3>INVESTOR RELATIONS</h3>
            <p>
              Our commitment to creativity, technology and innovation generates
              unparalleled experiences that drive long-term value for our
              shareholders.
            </p>
            <button className={cx("about_btn")}>VIEW MORE</button>
          </div>
        </div>
        <div className={cx("about")}>
          <div className={cx("img_middle")}>
            <img src={Roman} alt="" />
          </div>
          <div className={cx("about_text", "text_middle")}>
            <h3>CAREERS</h3>
            <p>
              Explore a variety of opportunities to start a new chapter in your
              career at Atomic.
            </p>
            <button className={cx("about_btn")}>VIEW MORE</button>
          </div>
        </div>
        <div className={cx("about")}>
          <div className={cx("about_img")}>
            <img src={Roman} alt="" />
          </div>
          <div className={cx("about_text")}>
            <h3>SOCIAL RESPONSIBILITY</h3>
            <p>
              Our approach to corporate social responsibility is built upon the
              Company’s long and enduring legacy of engagement in our workplaces
              and communities and our actions to protect the environment.
            </p>
            <button className={cx("about_btn")}>VIEW MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Text;
