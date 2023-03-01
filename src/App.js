import { Route, Routes, Navigate } from "react-router-dom";
import React, {
  createContext,
  useEffect,
  useRef,
  useState,
  lazy,
  Suspense,
} from "react";
import useLocalStorage from "use-local-storage";
import "./App.css";
import Login from "./Page/Login/Login";
import Home from "./Page/Home/Home";
import Loading from "./components/Loading/Loading";
const AboutUs = lazy(() => import("./Page/AboutUs/AboutUs"));
const Items = lazy(() => import("./components/Items/Items"));
const SignUp = lazy(() => import("./Page/SignUp/SignUp"));
const isMobile = lazy(() => import("./CheckScreen"));
const Contact = lazy(() => import("./Page/Contact/Contact"));
const Shop = lazy(() => import("./Page/Shop/Shop"));
const Cart = lazy(() => import("./components/Gio/gio"));
const SearchItems = lazy(() => import("./components/SearchItems/SearchItems"));
const Scroll = lazy(() => import("./components/scroll/Scroll"));
const Profile = lazy(() => import("./components/Profile/Profile"));
const Error = lazy(() => import("./Page/Error/Error"));
const Notification = lazy(() =>
  import("./components/Notification/Notification")
);
const Popup = lazy(() => import("./components/Popup_check_login/Popup"));

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
        <Suspense
          fallback={
            <div>
              <Loading></Loading>
            </div>
          }
        >
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
        </Suspense>
      </Bags.Provider>
      <Scroll />
    </div>
  );
}

export default App;
