import React, { forwardRef } from "react";
import classNames from "classnames/bind";
import styles from "./Notification.module.scss";
const cx = classNames.bind(styles);
const hidden = () => {
  const notification = document.getElementsByClassName(cx("notification"))[0];
  notification.classList.remove("top-right");
};
function Notification(props, ref) {
  return (
    <div className={cx("notification")} ref={ref}>
      <button onClick={hidden} className={cx("close")}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAZ5JREFUaEPtmk1KAzEYQF+3ohfwKiKuFQ/gCcUTKLgR8Sx6AhF1IRLswFhnku8vnWQwu5bMl/eSL2mTyQa4Bs6AK+CJPsopcAM8boBn4Bh4BS46kEjwt8Ah8JIExl+0LvGHNQmkcgLcAUfAG3AJPDSWTZOMg0DrErMdPBZoVSKbHbsCrUkUU3tKoBWJInwCnRNYWkIEXxJYSkIMLxHYt4QKXiqwLwk1vEagtoQJXitQS8IMbxGIlnDBWwWiJNzwHgGvRAi8V8AqEQYfIaCVCIWPEpBKhMNHCpQkqsBHC8xJfNbc7eX+jSYgSxn39jvwBRzU2qrWEBhG4n4Lnj5/AOc19tn/AhM51nUKTa023Uzi3FLZ/DIqAZTUUa96EZNYA6apK5LxCliALM/MyngEPCCeZ3/JWAUiACJiZA+25oYtpOFtcHcs7Qi4Gyz88KmP9jUCNeAHH3NsqYC5AdFa+FPJ1IZEwBRYAT6uqm6rJKAOaAQ3S6z2eH2Jnt8dPBHD6l4xiawD8lwTIsu0mtesLfa8aE6s4qpB95c9ur5u8w2xbg/QBy/D1wAAAABJRU5ErkJggg=="
          alt=""
        />
      </button>
      <div className={cx("notification__image")}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABFlJREFUWEfFl2tsFFUUx//nznTbxZiWkgj2qYWyaGJsuktZ+lKMSkJUXE01NlFEEzXWpgui0TR+QyMBtdRitCYkCJgQjW3qozZtrKVgH4Q2EgwKVbHiBz/YlpZ0X7NzzMyyQ7ed7e7QNc6nyZxz///fPffOnTOE//kiS/4MasBrLoJUpYKLBDgb4ABBuqQCfwtg8D28eRoETlY3KYA6biwUCO9isEeAchOIXwKoDVD3NdOe8UQgiwJ42ZsVUm1vMLiOCOmJxGLizH4GtShC7G6lPZfjjY0L8Dy/UiypSgcTrbNkPC+ZGWNCqA99QE3nzHRMAZ4L7dwEUtpAInMp5sZYxpRgeD5Ma/p+vt4CgGe4wSHC4UEQZaXE/KoIMU9D4vKP6cBPc3VjAJ5mbxYpwWEIFKfSPKpFKp+X5XBZK7UaeyIGYFvohXdB2PFfmEc1mXnvJ2kfvWpARW9q+dlCodAvILK22y3SMsMvZHIcplb9FTUqUKtsfx+glyzqmaYTCNm0HDM8gyBCC3MYzZ+mHWy4BsCgx5Rt4wTkLRVAQMAl3YmVdBOmeQZ94R/MJP86Jh/K105MvQI1wafKQDyUCvP1UglW0UpdapqvoDfcby7LwvWZ7dBpHeDR0BM7memdpQBoMy+TnMgREXM/AuhXBjDDV+LI0o4vbEebdICH/Y8fgMCL1wugmbul9cgRqwzz48pJfQkWuVrabcfqdYAHgzVHAdReD4BmXi6VIVfcbJj3Kv2JzAHwkS9tnz+pA2wJPHKQgO1mAE6pBIVSAUaVM/hdvRiToplXym7kihz9uY99+E7p09c+8cVHvk5viwBsDmzdTUCj2aAamwfpsOmhQeUUxtTf9HvNvFouR56IfJ1n2YcepTeJmUdciKil09YeWYL7/A/UaQ/MAFaLIlTIG4zQgDKEX9WLuEuuRP5Vcx/70aX0JG2uiTGTtzujY38EILjFpao4Fa9sa6U1qJDdRvgfnsAKyjbK3hnqxmWeTlz1ORkkuLTH1jkaOQkZtCmw+Q8A+fEhilEll8eEtTX/JtSFKY7bb5jKqcB4X3rXLcZBpGVVzd7fTMT1i03DIRWjOq1SP78186+C32KSpyzNXEtWGftPLOv26nshOnrj7D25ArgAgn0xxSLpVhSIPIwqP1oue2Tt4ScSjpP2ntiPkRbc6K/eC6ZdlqdkaQC/PWA//np0SEw/4Jy4N1Oy+YYhaK0lzSSTCfgZ9tCGIRoyduyClszlr3BAVQeBFLdk4EkSkns448T5ubymTWmJz303MbcBSFFfyJMgyTNqH+ibX6y4bXmpv3SNEhYdBNyWZIVN05j5gsy8deTGkeTb8qiSc8KZGcjgRqhcD6IMKyAqs4+EaA745LfGVlxb86QrMDfxdp+zAGHlZWZ4iOIfVpHXjMeJqF2I8L6zy87+mQg6qX9DQ4RB62bvKGVWq5iwmpmW64cJ8SQxjQkS/eduODOSyDThJrQisNTcfwHyRpMw5szFqQAAAABJRU5ErkJggg=="
          alt=""
        />
      </div>
      <div className={cx("notification__right")}>
        <p className={cx("notification__title")}>Success</p>
        <p className={cx("notification__message")}>
          You will be notification as soon as it is processed by a mode rator
        </p>
      </div>
    </div>
  );
}
const NotificationRef = forwardRef(Notification);
export default NotificationRef;
