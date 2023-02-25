import classNames from "classnames/bind";
import style from "./Shop.module.scss";
import Header from "../../components/Header/Header";
import Synthetic from "./Synthetic/Synthetic";
// import Selection from "./Selection/Selection";
const cx = classNames.bind(style);

function Shop() {
  return (
    <div className={cx("Shop")}>
      <Header></Header>
      <Synthetic></Synthetic>
      {/* <Selection></Selection> */}
    </div>
  );
}

export default Shop;
