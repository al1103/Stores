import Header from "../../components/Header/Header";
import Text from "./Text/Text";
import Footer from "../../components/Footer/Footer";
import classNames from "classnames/bind";
import style from "./AboutUs.module.scss";
const cx = classNames.bind(style);

function AboutUs() {
  return (
    <div className={cx("AboutUs")}>
      <Header></Header>
      <Text></Text>
      <Footer></Footer>
    </div>
  );
}

export default AboutUs;
