import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./SearchItems.module.scss";
import classNames from "classnames/bind";
import Header from "../Header/Header";
import CardProduct from "../Items/Product/CardProduct";

const cx = classNames.bind(style);
function SearchItems() {
  let { id } = useParams();
  const [ItemSearch, setItemSearch] = useState([]);
  const Search = async (id) => {
    let response = await fetch(
      `https://api-by-zilong.onrender.com/armor?q=${id}`,
      {
        method: "GET",
      }
    );
    let data = await response.json();
    setItemSearch(data);
    console.log(data);
  };
  useEffect(() => {
    Search(id);
  }, [id]);

  if (ItemSearch.length === 0) {
    return (
      <div>
        <Header></Header>
        <div>
          <h1>Không có sản phẩm nào</h1>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Header></Header>
      <div className={cx("Render_Search_Items")}>
        {ItemSearch.map((item) => {
          return (
            <CardProduct item={item} key={item.id} props={item}></CardProduct>
          );
        })}
      </div>
    </div>
  );
}

export default SearchItems;
