import React from "react";
import classNames from "classnames/bind";
import styles from "./ContentContact.module.scss";
const cx = classNames.bind(styles);

function ContentContact() {
  return (
    <div className={cx("body")}>
      <div className={cx("Name")}>
        <h1>
          <em className={cx("zilong")}>ZILONG</em>
        </h1>
        <hr />
        <p>For any questions or inquiries, please contact us at:</p>
      </div>
      <hr className={cx("line")} />
      <div className={cx("content")}>
        <div className={cx("middle")}>
          <div className={cx("left")}>
            <em>VARIUS ET CONSEQUAT SAPIEN</em>
          </div>
          <div className={cx("right")}>
            <p>
              Aenean ornare lacus ac varius enim ullamcorper eu. Proin aliquam
              facilisis ante interdum congue. Integer nisl erat egestas sapien
              ac quam. Lorem ipsum dolor nullam feugiat sit nisl tempus magna et
              euismod consequat.
            </p>
            <form action="./" method="post">
              <div className={cx("inner")}>
                <div className={cx("field")}>
                  <input type="email" placeholder="Email" />
                </div>
                <div className={cx("actions")}>
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Thank you for subscribing to our newsletter!");
                    }}
                    className={cx("button")}
                  >
                    subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr className={cx("line")} />
      <div className={cx("network")}>
        <div className={cx("network_text")}>REACH OUT</div>
        <hr className={cx("line_horizontal")} />
        <div className={cx("icon")}>
          <div>
            <ul className={cx("icon1")}>
              <li className={cx("icon_style")}>
                <a href="face">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <title>Logo Facebook</title>
                    <path
                      d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li className={cx("icon_style")}>
                <a href="git">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <title>Logo Github</title>
                    <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                  </svg>
                </a>
              </li>
              <li className={cx("icon_style")}>
                <a href="gmail">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <title>Mail</title>
                    <rect
                      x="48"
                      y="96"
                      width="416"
                      height="320"
                      rx="40"
                      ry="40"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M112 160l144 112 144-112"
                    />
                  </svg>
                </a>
              </li>
              <li className={cx("icon_style")}>
                <a href="twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <title>Logo Twitter</title>
                    <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
                  </svg>
                </a>
              </li>
              <li className={cx("icon_style")}>
                <a href="youtube">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <title>Logo Youtube</title>
                    <path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z" />
                  </svg>
                </a>
              </li>
              <li className={cx("icon_style")}>
                <a href="dis">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <title>Logo Discord</title>
                    <path d="M464 66.52A50 50 0 00414.12 17L97.64 16A49.65 49.65 0 0048 65.52V392c0 27.3 22.28 48 49.64 48H368l-13-44 109 100zM324.65 329.81s-8.72-10.39-16-19.32C340.39 301.55 352.5 282 352.5 282a139 139 0 01-27.85 14.25 173.31 173.31 0 01-35.11 10.39 170.05 170.05 0 01-62.72-.24 184.45 184.45 0 01-35.59-10.4 141.46 141.46 0 01-17.68-8.21c-.73-.48-1.45-.72-2.18-1.21-.49-.24-.73-.48-1-.48-4.36-2.42-6.78-4.11-6.78-4.11s11.62 19.09 42.38 28.26c-7.27 9.18-16.23 19.81-16.23 19.81-53.51-1.69-73.85-36.47-73.85-36.47 0-77.06 34.87-139.62 34.87-139.62 34.87-25.85 67.8-25.12 67.8-25.12l2.42 2.9c-43.59 12.32-63.44 31.4-63.44 31.4s5.32-2.9 14.28-6.77c25.91-11.35 46.5-14.25 55-15.21a24 24 0 014.12-.49 205.62 205.62 0 0148.91-.48 201.62 201.62 0 0172.89 22.95s-19.13-18.15-60.3-30.45l3.39-3.86s33.17-.73 67.81 25.16c0 0 34.87 62.56 34.87 139.62 0-.28-20.35 34.5-73.86 36.19z" />
                    <path d="M212.05 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.8 0 24.7-11.83 24.7-26.57.25-14.76-10.9-26.57-24.7-26.57zM300.43 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.81 0 24.7-11.83 24.7-26.57S314 218 300.43 218z" />
                  </svg>
                </a>
              </li>
              <li className={cx("icon_style")}>
                <a href="tiktok">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <title>Logo Tiktok</title>
                    <path d="M412.19 118.66a109.27 109.27 0 01-9.45-5.5 132.87 132.87 0 01-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14 23.9 350 16 350.13 16h-82.44v318.78c0 4.28 0 8.51-.18 12.69 0 .52-.05 1-.08 1.56 0 .23 0 .47-.05.71v.18a70 70 0 01-35.22 55.56 68.8 68.8 0 01-34.11 9c-38.41 0-69.54-31.32-69.54-70s31.13-70 69.54-70a68.9 68.9 0 0121.41 3.39l.1-83.94a153.14 153.14 0 00-118 34.52 161.79 161.79 0 00-35.3 43.53c-3.48 6-16.61 30.11-18.2 69.24-1 22.21 5.67 45.22 8.85 54.73v.2c2 5.6 9.75 24.71 22.38 40.82A167.53 167.53 0 00115 470.66v-.2l.2.2c39.91 27.12 84.16 25.34 84.16 25.34 7.66-.31 33.32 0 62.46-13.81 32.32-15.31 50.72-38.12 50.72-38.12a158.46 158.46 0 0027.64-45.93c7.46-19.61 9.95-43.13 9.95-52.53V176.49c1 .6 14.32 9.41 14.32 9.41s19.19 12.3 49.13 20.31c21.48 5.7 50.42 6.9 50.42 6.9v-81.84c-10.14 1.1-30.73-2.1-51.81-12.61z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentContact;
