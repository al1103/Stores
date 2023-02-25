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
export const Bags = createContext();

function App() {
  //c1:
  const ref = useRef();

  // const [isLoading, setLoading] = useState(true);
  // function someRequest() {
  //   return new Promise((resolve) => setTimeout(() => resolve(), 2000));
  // }

  // useEffect(() => {
  //   someRequest().then(() => {
  //     const loaderElement = document.querySelector(".loading");
  //     if (loaderElement) {
  //       loaderElement.style.visibility = "hidden";
  //       setLoading(!isLoading);
  //     }
  //   });
  // }, []);

  //c2
  // const [playAnimation, setPlayAnimation] = useState(false);
  // useEffect(() => {
  //   const onPageLoad = () => {
  //     setPlayAnimation(true);
  //   };

  // Check if the page has already loaded
  //   if (document.readyState === "complete") {
  //     onPageLoad();
  //   } else {
  //     window.addEventListener("load", onPageLoad);
  //     const loaderElement = document.querySelector(".loading");
  //     loaderElement.style.visibility = "hidden";

  //     // Remove the event listener when component unmounts
  //     return () => window.removeEventListener("load", onPageLoad);
  //   }
  // }, []);
  // useEffect(() => {
  //   window.onload = function () {
  //     function stopScroll() {
  //       document.body.style.overflow = "hidden";
  //       ref.current.style.top = window.scrollY + "px";
  //       ref.current.style.visibility = "visible";
  //       const scroll = setTimeout(() => {
  //         ref.current.style.visibility = "hidden";

  //         startScroll();
  //       }, 1000);
  //       return () => {
  //         clearTimeout(scroll);
  //       };
  //     }

  //     function startScroll() {
  //       document.body.style.overflow = "auto";
  //     }
  //   };
  // }, []);

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const [account, setAccount] = useState([]);
  const [showBag, setShowBag] = useState(false);

  const Bag = {
    Bag: [showBag, setShowBag],
    theme: [theme, setTheme],
    account: [account, setAccount],
    ref: [ref],
  };
  console.log(account);
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
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/Error" element={<Error />}></Route>
        </Routes>
      </Bags.Provider>
      <Scroll />
      <Notification ref={ref}></Notification>
    </div>
  );
}

export default App;
