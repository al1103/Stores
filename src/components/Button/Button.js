import classNames from "classnames/bind";
import style from "./Button.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);
function Button({
  shoppingCart,
  buttonSize,
  children,
  onClick,
  href,
  to,
  primary,
  small,
  medium,
  large,
  handle,
  ...prev
}) {
  const props = {
    ...prev,
  };
  var Comp = "button";
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  if (buttonSize) {
    if (buttonSize === "small") {
      small = true;
    } else if (buttonSize === "medium") {
      medium = true;
    } else if (buttonSize === "large") {
      large = true;
    } else {
      return;
    }
  }

  const className = cx("Button", {
    primary,
    small,
    medium,
    large,
    shoppingCart,
  });
  return (
    <Comp className={className} onClick={onClick} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
