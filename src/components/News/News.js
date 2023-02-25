import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import classNames from "classnames/bind";
import style from "./News.module.scss";
import { useViewport } from "../../CheckScreen/index";
import NewCard from "./NewCard";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  Autoplay,
} from "swiper";

const cx = classNames.bind(style);
function News() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api-by-zilong.onrender.com/products?_limit=5",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <>
      {useViewport().width < 480 ? (
        <div className={cx("swiper")}>
          <Swiper
            className={cx("swiper__container")}
            modules={[
              Mousewheel,
              Pagination,
              Scrollbar,
              A11y,
              Autoplay,
              Navigation,
            ]}
            spaceBetween={50}
            slidesPerView={2}
            autoplay={(true, { delay: 2000 })}
            grid={{ rows: 2, fill: "row" }}
            loop={true}
            pagination={{ clickable: true }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index} className={cx("swiper__slide")}>
                <NewCard item={item}></NewCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className={cx("swiper")}>
          <Swiper
            className={cx("swiper__container")}
            modules={[
              Mousewheel,
              Pagination,
              Scrollbar,
              A11y,
              Autoplay,
              Navigation,
            ]}
            spaceBetween={50}
            slidesPerView={3}
            autoplay={(true, { delay: 2000 })}
            grid={{ rows: 2, fill: "row" }}
            loop={true}
            pagination={{ clickable: true }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index} className={cx("swiper__slide")}>
                <NewCard item={item}></NewCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}

export default News;
