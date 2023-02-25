import React from "react";
import style from "./Footer.module.scss";
import classNames from "classnames/bind";
import Logo from "./Logo.png";
const cx = classNames.bind(style);
function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className={cx("footer")}>
      <footer className={cx("_3i9c9", "_1hzRB")}>
        <div className={cx("_1kgI")}>
          <div className={cx("_15HQJ")}>
            <a href="/" title="Zilong - Homepage">
              <img src={Logo} alt="Zilong" className={cx("logo")} />
              <div className={cx("_2DrPH", "_3BxPJ")}>
                <span className={cx("_17Thb", "_3OOLf")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="0"
                    height="0"
                    viewBox="0 0 100 167"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path d=" M100 0 L99.96 0 L99.95 0 L71.32 0 L68.26 3.04 L53.67 30.89 L49.41 33.35 L0 33.35 L0 74.97 L26.40 74.97 L29.15 77.72 L0 133.36 L0 166.5 L0 166.61 L0 166.61 L28.70 166.6 L31.77 163.55 L46.39 135.69 L50.56 133.28 L100 133.28 L100 91.68 L73.52 91.68 L70.84 89 L100 33.33 "></path>
                  </svg>
                </span>
                <span className={cx("ZRoSy", "DqC2X")}></span>
              </div>
            </a>
          </div>
          <div className={cx("D-eM")}>
            <div className={cx("_bYps")}>
              <div>
                <a href="/Error" title="About">
                  About
                </a>
              </div>
              <div>
                <a href="/Error" title="Contact">
                  Contact
                </a>
              </div>
              <div>
                <a href="/Error" title="Core Membership">
                  Core Membership
                </a>
              </div>
              <div>
                <a href="/Error" title="DeviantArt Protect">
                  ZIlong Protect
                </a>
              </div>
              <div>
                <a href="/Error" title="Developers">
                  Developers
                </a>
              </div>
              <div>
                <a href="/Error" title="Advertise">
                  Advertise
                </a>
              </div>
              <div>
                <a href="/Error" title="Terms of Service">
                  Terms of Service
                </a>
              </div>
              <div>
                <a href="/Error" title="Etiquette">
                  Etiquette
                </a>
              </div>
              <div>
                <a href="/Error" title="Careers">
                  Careers
                </a>
              </div>
              <div>
                <a href="/Error" title="Privacy Policy">
                  Privacy Policy
                </a>
              </div>
              <div>
                <a
                  href="https://www.deviantart.com/about/policy/copyright/"
                  title="Copyright Policy"
                >
                  Copyright Policy
                </a>
              </div>
              <div>
                <a href="/Error" title="Help and FAQ">
                  Help and FAQ
                </a>
              </div>
            </div>
          </div>
          <div className={cx("_34M1k")}>
            <a
              className={cx("_RuXD")}
              href="/Error"
              title="DeviantArt Facebook"
            >
              <span className={cx("_20Nv2")}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <title>Logo Facebook</title>
                  <path
                    d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
            </a>
            <a
              className={cx("_RuXD")}
              href="/Error"
              title="DeviantArt Instagram"
            >
              <span className={cx("_20Nv2")}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <title>Logo Instagram</title>
                  <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                  <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
                </svg>
              </span>
            </a>
            <a className={cx("_RuXD")} href="/Error" title="DeviantArt Twitter">
              <span className={cx("_20Nv2")}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <title>Logo Twitter</title>
                  <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className={cx("_1dJPs", "_2eRnc")}>
          <div>{`© ${year} Zilong`}</div>
          <div className={cx("ssncW")}></div>
          <div>All rights reserved</div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
