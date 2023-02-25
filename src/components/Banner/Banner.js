import classNames from "classnames/bind";
import Button from "../Button/Button";
import style from "./GlobalNav.module.scss";
import KatanaClipdrop from "../Content/Image/Katana_clipdrop.png";
const cx = classNames.bind(style);
function banner() {
  const handleScroll = () => {
    document.body.scrollTo({
      top: 800,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={cx("globals")}>
      <div className={cx("globalNav")}>
        <div className={cx("img")}>
          <img src={KatanaClipdrop} alt="anh katana" />
        </div>
        <div className={cx("writeText")}>
          <p>Beat Solo</p>
          <h4>Damage</h4>
          <h1>WEAPON OF WAR</h1>
        </div>
        <span className={cx("buttonShop")}>
          <Button large>Store By </Button>
        </span>
        <div className={cx("textContent")}>
          <h6>DESRUCTER</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
            neque maxime laborum non perspiciatis architecto
          </p>
        </div>
      </div>
      <div className={cx("scroll")} onClick={handleScroll}>
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.0006 10.9409L9.53062 8.46979L8.46973 9.53021L12.0006 13.0626L15.5315 9.53021L14.4706 8.46979L12.0006 10.9409Z"
            fill="#1F2328"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.0006 14.9409L9.53062 12.4698L8.46973 13.5302L12.0006 17.0626L15.5315 13.5302L14.4706 12.4698L12.0006 14.9409Z"
            fill="#1F2328"
          />
        </svg>
      </div>
    </div>
  );
}

export default banner;
