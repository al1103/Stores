import classNames from "classnames/bind";
import style from "./Nav.module.scss";
import { Link, NavLink } from "react-router-dom";
const cx = classNames.bind(style);

function Nav() {
  return (
    <nav>
      <ul className={cx("headerNav")}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#1098B8" : "var(--text-primary)",
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Shop"
            style={({ isActive }) => ({
              color: isActive ? "#00b4d8" : "var(--text-primary)",
            })}
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/AboutUs"
            style={({ isActive }) => ({
              color: isActive ? "#00b4d8" : "var(--text-primary)",
            })}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Error"
            style={({ isActive }) => ({
              color: isActive ? "#00b4d8" : "var(--text-primary)",
            })}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            style={({ isActive }) => ({
              color: isActive ? "#1098B8" : "var(--text-primary)",
            })}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
