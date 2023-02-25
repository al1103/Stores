import Card from "./Card/Card";
import classNames from "classnames/bind";
import style from "./Content.module.scss";
import { useViewport } from "../../CheckScreen/index";
import {
  keyInformation1,
  keyInformation2,
  keyInformation3,
  keyInformation4,
  keyInformation5,
  keyInformation6,
} from "./Information";
const cx = classNames.bind(style);

function Content() {
  return (
    <div className={cx("Content")}>
      {useViewport().width < 480 ? (
        <div className={cx("HomeContent")}>
          <div className={cx("itemCard")}>
            <Card small keyInformation={keyInformation1}>
              Browse
            </Card>
          </div>
          <div className={cx("itemCard")}>
            <Card small keyInformation={keyInformation2}>
              Browse
            </Card>
          </div>
          <div className={cx("itemCard")}>
            <Card small keyInformation={keyInformation3}>
              Browse
            </Card>
          </div>
          <div className={cx("itemCard")}>
            <Card small keyInformation={keyInformation4}>
              Browse
            </Card>
          </div>
          <div className={cx("itemCard")}>
            <Card small keyInformation={keyInformation5}>
              Browse
            </Card>
          </div>
          <div className={cx("itemCard")}>
            <Card small keyInformation={keyInformation6}>
              Browse
            </Card>
          </div>
        </div>
      ) : (
        <div className={cx("HomeContent")}>
          <div className={cx("itemCard")}>
            <Card small keyInformation={keyInformation1}>
              Browse
            </Card>
          </div>
          <div className={cx("itemCard")}>
            <Card small keyInformation={keyInformation2}>
              Browse
            </Card>
          </div>
          <div className={cx("itemCard")}>
            <Card medium keyInformation={keyInformation3}>
              Browse
            </Card>
          </div>
          <div className={cx("itemCard")}>
            <Card medium keyInformation={keyInformation4}>
              Browse
            </Card>
          </div>
          <div className={cx("itemCard")}>
            <Card small keyInformation={keyInformation5}>
              Browse
            </Card>
          </div>
          <div className={cx("itemCard")}>
            <Card small keyInformation={keyInformation6}>
              Browse
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}

export default Content;
