import { Route, Routes, Navigate } from "react-router-dom";
import React, { createContext, useEffect, useRef, useState } from "react";
import Home from "./Page/Home/Home";
import AboutUs from "./Page/AboutUs/AboutUs";
import Login from "./Page/Login/Login";
import Items from "./components/Items/Items";
import SignUp from "./Page/SignUp/SignUp";
import isMobile from "./CheckScreen";
import Contact from "./Page/Contact/Contact";
import Shop from "./Page/Shop/Shop";
import Cart from "./components/Gio/gio";
import SearchItems from "./components/SearchItems/SearchItems";
import useLocalStorage from "use-local-storage";
import "./App.css";
import Scroll from "./components/scroll/Scroll";
import Profile from "./components/Profile/Profile";
import Error from "./Page/Error/Error";
import Notification from "./components/Notification/Notification";
import Popup from "./components/Popup_check_login/Popup";
export const Bags = createContext();
function App() {
  //c1:
  const ref = useRef();
  const [popup, setPopup] = useState(false);

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const storedAccount = localStorage.getItem("account");
  const [account, setAccount] = useState(
    storedAccount ? JSON.parse(storedAccount) : null
  );
  const [showBag, setShowBag] = useState(false);
  const Bag = {
    Bag: [showBag, setShowBag],
    theme: [theme, setTheme],
    account: [account, setAccount],
    popup: [popup, setPopup],
    ref: [ref],
  };
  // if (isLoading) {
  //   return null;
  // }
  return (
    <div data-theme={theme}>
      <Bags.Provider value={Bag}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route
            path="/Login"
            element={account ? <Navigate to="/" /> : <Login />}
          ></Route>
          <Route path="/items/:id" element={<Items />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/gio" element={<Cart />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Search/:id" element={<SearchItems />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
          <Route path="/Error" element={<Error />}></Route>
        </Routes>
        <Popup></Popup>
        <Notification ref={ref}></Notification>
      </Bags.Provider>
      <Scroll />
    </div>
  );
}

export default App;
