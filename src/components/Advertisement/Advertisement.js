import classNames from "classnames/bind";
import style from "./Advertisement.module.scss";
import Representative from "./representative/Representative";
const cx = classNames.bind(style);
function Advertisement() {
  return (
    <div className={cx("representative")}>
      <Representative />
    </div>
  );
}

export default Advertisement;
