import React from "react";
import classNames from "classnames/bind";
import style from "./Home.module.scss";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Advertisement from "../../components/Advertisement/Advertisement";
import Content from "../../components/Content/Content";
import Main from "../../components/Main/Main";
import Freeship from "../../components/Advertisement/representative/Freeship/Freeship";
import News from "../../components/News/News";
import Cart from "../../components/Cart/Cart";
import Footer from "../../components/Footer/Footer";
import Profile from "../../components/Profile/Profile";
// eslint-disable-next-line
const cx = classNames.bind(style);
function Home() {
  return (
    <div>
      <div className="App">
        <Header></Header>
        <Cart></Cart>
        <Banner></Banner>
        <Content></Content>
        <Freeship></Freeship>
        <Advertisement></Advertisement>
        <Main></Main>
        <Advertisement></Advertisement>
        <News></News>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
