import React, { useEffect } from "react";
import className from "classnames/bind";
import styles from "./Error.module.scss";
const cx = className.bind(styles);
function Error() {
  function lengthText(n, t) {
    var str = document.getElementsByTagName("code")[n].innerHTML.toString();
    console.log(str);
    var i = 0;
    setTimeout(function () {
      var se = setInterval(function () {
        i++;
        // document.getElementsByTagName("code")[n].innerHTML =
        //   str.slice(0, i) + "|";
        if (i === str.length) {
          clearInterval(se);
          document.getElementsByTagName("code")[n].innerHTML = str;
          console.log("done");
        }
      }, 50);
    }, t);
  }
  useEffect(() => {
    lengthText(0, 100);
    lengthText(1, 1000);
    lengthText(2, 2000);
  }, []);
  return (
    <div className={cx("a404")}>
      <p className={cx("p")}>
        HTTP:<span>404</span>
      </p>
      <code className={cx("code")}>
        <span>this_page</span>.<em>not_found</em> = true;
      </code>
      <code className={cx("code")}>
        <span>if</span> (<b>you_spelt_it_wrong</b>)
        <span>&#123; try_again() &#125;</span>;
      </code>
      <code className={cx("code")}>
        <span>
          else if (<b>we_screwed_up</b>)
        </span>
        <span>
          <em> alert(</em>
          <i>"We're really sorry about that.")</i>
        </span>
        <span>window</span>.<em>location</em>= home;&#125;
      </code>
      <center>
        <a href="/" className={cx("a")}>
          <span>Go back to the homepage</span>
        </a>
      </center>
    </div>
  );
}

export default Error;
