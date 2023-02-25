// import React, { Fragment, useState, useEffect } from "react";
// import CardProduct from "../../General/Main/Product/CardProduct";
// import Tab from "../Tab/Tab";
// import styles from "./Selection.module.scss";
// import classNames from "classnames/bind";
// import { useLocation } from "react-router-dom";
// import { Katana } from "./api";

// const cx = classNames.bind(styles);

// function Selection() {
//   const [productsItem, setProductsItem] = useState([]);
//   const [productsItem2, setProductsItem2] = useState([]);
//   const [productsItem3, setProductsItem3] = useState([]);
//   const [productsItem4, setProductsItem4] = useState([]);

//   const [cartItem, setCartItem] = useState(
//     localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
//   );
//   function handleAdd(product) {
//     addToCart(product);
//   }
//   // const Content = [
//   //   {
//   //     id: 1,
//   //     image:
//   //       "https://previews.dropbox.com/p/thumb/ABxcVN3UJ4iWeV4SjXJHpfmFEUxHljkkZ3-dha0Nqwh9h1-Q-GlVPB2UeWu0NnyHNmumjeoU__5kMmqnzGgKs9GEQLKDfUcCW5HuQst5AsKm-ie9c0HyBhtcbCmVmQhgq1CcTLcXLD5wlpOAm2qWB_kLzA4j1xHf_QpPENn2j6xHgEknPnOLg_7OFG-331Z63VAQPrYXwv5xS6N5b5hUVoIXw6DAn8cV43CuedEdXAO6brVvnVq0wW8GwqsOO75ABakJrfidpPzLF85hCtLy0S2b9ezNeK_WHopq_AD6pdIsBHj8_2MdBe0O3HtKQJiCrnmv_rWvZzNqCLM1-JS5kBmZcpdygvG1W1vD7vHKcZlmylZebZoLiGYr7XU2dDLZipM/p.png",
//   //     name: " Axe Tutorial",
//   //     priceSale: "1909",
//   //     sale: "2000",
//   //     numberStar: 5,
//   //     price: "1000",
//   //     description:
//   //       "KR Electric Axe by Jindo Apply firm pressure to trigger upon entry into the frontal lobe.",
//   //   },
//   //   {
//   //     id: 2,
//   //     image:
//   //       "https://previews.dropbox.com/p/thumb/ABwZBxWFMl-eU14TwexkOg9gnecTW30Yjf9XlVtXWywBX292TqFCXkf4SAKMlwL7W6oBJOCus0g52sdeEaw8i-3l3sZfwQtXW8mrSo2qPu-yvctchF6DRvNWKgcvikq-w4cexPCD2l28Sph3f9i-2IvHQ7FHanWaRnfX_D5PCUSZVfeqDX77qwdF_Rs8EabgRQrSZnYKJfBTVYObOsBCini3sMMFZ48wegDTDRkSt8k-bzwrY7zraWLSwOEG6LLWfQUfX3UMBlH1wnkm-XJI0udSOMwc-_mBTUXeHKAmev4sqO0m-n3hlGzVJmkCBppXG-I-jway5-0yuO9IrS3Oc5XbcqhphgupNfh7nqEiFb-I9NEpeW3vRwjUrSoYcjLVg0I/p.png",
//   //     name: "Tomahawk | M48 Destroyer Tactical, Eloi Farriol",
//   //     priceSale: "1700",
//   //     sale: "2000",
//   //     numberStar: 5,
//   //     price: "1000",
//   //     description:
//   //       "Just a Tomahawk with a cool name. Modelled in 3ds Max | Baked in Marmoset Toolbag 3 | Textured in Substance Painter | Rendered in Marmoset Toolbag 3 3930 tris. This is a project done during Florida Replay's master degree.",
//   //   },
//   //   {
//   //     id: 3,
//   //     image:
//   //       "https://previews.dropbox.com/p/thumb/ABxKSnD-nYYk1L5yBnAH9QmecLi5Ow9O72zEI8c0wV44UyQXGib8W89rXgX21izB-RXm6nNOHH4v5u33Q9F5Cwf_9iXcp3ugsXFIpzIr0TrcVt4xs8Coj1p4PjA5UtYtU9RZxoR-4COTvAPtyl6X6E4o8a_L01MWC_0J7vaFW-yezL8ImKjfhfdWjno89g41uhbViy_r0nttIPxSnNYXL5dlCzm4SPhjHzakvqVRPKf_qSyxTwOfNwAoqRFSg4xeFz7__U7ogNv6imlP6qG7JBv60Sst1BXZeTY-eCppg_ZFEMQcCnBKpkjqQ9H2sWPK71LnJbt5I09k-58V_zbLax81VKAkFHGXYZ-az6zgNrlyDkUk-CoWMhexOph3DJ7sdCE/p.png",
//   //     name: "Guns Knives Gear",
//   //     priceSale: "2000",
//   //     sale: "2000",
//   //     numberStar: 4,
//   //     price: "1000",
//   //     description: "Shrike Tomahawk.",
//   //   },
//   //   {
//   //     id: 4,
//   //     image:
//   //       "https://previews.dropbox.com/p/thumb/ABwZBxWFMl-eU14TwexkOg9gnecTW30Yjf9XlVtXWywBX292TqFCXkf4SAKMlwL7W6oBJOCus0g52sdeEaw8i-3l3sZfwQtXW8mrSo2qPu-yvctchF6DRvNWKgcvikq-w4cexPCD2l28Sph3f9i-2IvHQ7FHanWaRnfX_D5PCUSZVfeqDX77qwdF_Rs8EabgRQrSZnYKJfBTVYObOsBCini3sMMFZ48wegDTDRkSt8k-bzwrY7zraWLSwOEG6LLWfQUfX3UMBlH1wnkm-XJI0udSOMwc-_mBTUXeHKAmev4sqO0m-n3hlGzVJmkCBppXG-I-jway5-0yuO9IrS3Oc5XbcqhphgupNfh7nqEiFb-I9NEpeW3vRwjUrSoYcjLVg0I/p.png",
//   //     name: "Tomahawk | M48 Destroyer Tactical, Eloi Farriol",
//   //     priceSale: "1060",
//   //     sale: "2000",
//   //     numberStar: 5,
//   //     price: "1000",
//   //     description: "Just a Tomahawk with a cool name.",
//   //   },
//   //   {
//   //     id: 5,
//   //     image:
//   //       "https://previews.dropbox.com/p/thumb/ABwZBxWFMl-eU14TwexkOg9gnecTW30Yjf9XlVtXWywBX292TqFCXkf4SAKMlwL7W6oBJOCus0g52sdeEaw8i-3l3sZfwQtXW8mrSo2qPu-yvctchF6DRvNWKgcvikq-w4cexPCD2l28Sph3f9i-2IvHQ7FHanWaRnfX_D5PCUSZVfeqDX77qwdF_Rs8EabgRQrSZnYKJfBTVYObOsBCini3sMMFZ48wegDTDRkSt8k-bzwrY7zraWLSwOEG6LLWfQUfX3UMBlH1wnkm-XJI0udSOMwc-_mBTUXeHKAmev4sqO0m-n3hlGzVJmkCBppXG-I-jway5-0yuO9IrS3Oc5XbcqhphgupNfh7nqEiFb-I9NEpeW3vRwjUrSoYcjLVg0I/p.png",
//   //     name: "bomahawk | M48 Destroyer Tactical, Eloi Farriol",
//   //     priceSale: "1000",
//   //     sale: "2000",
//   //     numberStar: 5,
//   //     price: "1000",
//   //     description: "Just a Tomahawk with a cool name.",
//   //   },
//   //   {
//   //     id: 6,
//   //     image:
//   //       "https://previews.dropbox.com/p/thumb/ABwZBxWFMl-eU14TwexkOg9gnecTW30Yjf9XlVtXWywBX292TqFCXkf4SAKMlwL7W6oBJOCus0g52sdeEaw8i-3l3sZfwQtXW8mrSo2qPu-yvctchF6DRvNWKgcvikq-w4cexPCD2l28Sph3f9i-2IvHQ7FHanWaRnfX_D5PCUSZVfeqDX77qwdF_Rs8EabgRQrSZnYKJfBTVYObOsBCini3sMMFZ48wegDTDRkSt8k-bzwrY7zraWLSwOEG6LLWfQUfX3UMBlH1wnkm-XJI0udSOMwc-_mBTUXeHKAmev4sqO0m-n3hlGzVJmkCBppXG-I-jway5-0yuO9IrS3Oc5XbcqhphgupNfh7nqEiFb-I9NEpeW3vRwjUrSoYcjLVg0I/p.png",
//   //     name: "comahawk | M48 Destroyer Tactical, Eloi Farriol",
//   //     priceSale: "1800",
//   //     sale: "2000",
//   //     numberStar: 5,
//   //     price: "1000",
//   //     description: "Just a Tomahawk with a cool name.",
//   //   },
//   //   {
//   //     id: 7,
//   //     image:
//   //       "https://previews.dropbox.com/p/thumb/ABwZBxWFMl-eU14TwexkOg9gnecTW30Yjf9XlVtXWywBX292TqFCXkf4SAKMlwL7W6oBJOCus0g52sdeEaw8i-3l3sZfwQtXW8mrSo2qPu-yvctchF6DRvNWKgcvikq-w4cexPCD2l28Sph3f9i-2IvHQ7FHanWaRnfX_D5PCUSZVfeqDX77qwdF_Rs8EabgRQrSZnYKJfBTVYObOsBCini3sMMFZ48wegDTDRkSt8k-bzwrY7zraWLSwOEG6LLWfQUfX3UMBlH1wnkm-XJI0udSOMwc-_mBTUXeHKAmev4sqO0m-n3hlGzVJmkCBppXG-I-jway5-0yuO9IrS3Oc5XbcqhphgupNfh7nqEiFb-I9NEpeW3vRwjUrSoYcjLVg0I/p.png",
//   //     name: "hawk | M48 Destroyer Tactical, Eloi Farriol",
//   //     priceSale: "1500",
//   //     sale: "2000",
//   //     numberStar: 5,
//   //     price: "1000",
//   //     description: "Just a Tomahawk with a cool name.",
//   //   },
//   //   {
//   //     id: 8,
//   //     image:
//   //       "https://previews.dropbox.com/p/thumb/ABwZBxWFMl-eU14TwexkOg9gnecTW30Yjf9XlVtXWywBX292TqFCXkf4SAKMlwL7W6oBJOCus0g52sdeEaw8i-3l3sZfwQtXW8mrSo2qPu-yvctchF6DRvNWKgcvikq-w4cexPCD2l28Sph3f9i-2IvHQ7FHanWaRnfX_D5PCUSZVfeqDX77qwdF_Rs8EabgRQrSZnYKJfBTVYObOsBCini3sMMFZ48wegDTDRkSt8k-bzwrY7zraWLSwOEG6LLWfQUfX3UMBlH1wnkm-XJI0udSOMwc-_mBTUXeHKAmev4sqO0m-n3hlGzVJmkCBppXG-I-jway5-0yuO9IrS3Oc5XbcqhphgupNfh7nqEiFb-I9NEpeW3vRwjUrSoYcjLVg0I/p.png",
//   //     name: "omahawk | M48 Destroyer Tactical, Eloi Farriol",
//   //     priceSale: "1001",
//   //     sale: "2000",
//   //     numberStar: 5,
//   //     price: "1000",
//   //     description: "Just a Tomahawk with a cool name.",
//   //   },
//   //   {
//   //     id: 9,
//   //     image:
//   //       "https://previews.dropbox.com/p/thumb/ABwZBxWFMl-eU14TwexkOg9gnecTW30Yjf9XlVtXWywBX292TqFCXkf4SAKMlwL7W6oBJOCus0g52sdeEaw8i-3l3sZfwQtXW8mrSo2qPu-yvctchF6DRvNWKgcvikq-w4cexPCD2l28Sph3f9i-2IvHQ7FHanWaRnfX_D5PCUSZVfeqDX77qwdF_Rs8EabgRQrSZnYKJfBTVYObOsBCini3sMMFZ48wegDTDRkSt8k-bzwrY7zraWLSwOEG6LLWfQUfX3UMBlH1wnkm-XJI0udSOMwc-_mBTUXeHKAmev4sqO0m-n3hlGzVJmkCBppXG-I-jway5-0yuO9IrS3Oc5XbcqhphgupNfh7nqEiFb-I9NEpeW3vRwjUrSoYcjLVg0I/p.png",
//   //     name: "Tomahawk | M48 Destroyer Tactical, Eloi Farriol",
//   //     priceSale: "9000",
//   //     sale: "2000",
//   //     numberStar: 5,
//   //     price: "1000",
//   //     description: "Just a Tomahawk with a cool name.",
//   //   },
//   //   {
//   //     id: 10,
//   //     image:
//   //       "https://previews.dropbox.com/p/thumb/ABwZBxWFMl-eU14TwexkOg9gnecTW30Yjf9XlVtXWywBX292TqFCXkf4SAKMlwL7W6oBJOCus0g52sdeEaw8i-3l3sZfwQtXW8mrSo2qPu-yvctchF6DRvNWKgcvikq-w4cexPCD2l28Sph3f9i-2IvHQ7FHanWaRnfX_D5PCUSZVfeqDX77qwdF_Rs8EabgRQrSZnYKJfBTVYObOsBCini3sMMFZ48wegDTDRkSt8k-bzwrY7zraWLSwOEG6LLWfQUfX3UMBlH1wnkm-XJI0udSOMwc-_mBTUXeHKAmev4sqO0m-n3hlGzVJmkCBppXG-I-jway5-0yuO9IrS3Oc5XbcqhphgupNfh7nqEiFb-I9NEpeW3vRwjUrSoYcjLVg0I/p.png",
//   //     name: "zomahawk | M48 Destroyer Tactical, Eloi Farriol",
//   //     priceSale: "1040",
//   //     sale: "2000",
//   //     numberStar: 5,
//   //     price: "1000",
//   //     description: "Just a Tomahawk with a cool name.",
//   //   },
//   // ];
//   // const Content1 = [
//   //   {
//   //     id: 1,
//   //     image:
//   //       "https://github.com/al1103/-/blob/main/ArtStation%20-%20Explore_clipdrop-background-removal.png?raw=true",
//   //     name: " Axe Tutorial",

//   //     priceSale: "1109",
//   //     sale: "2000",
//   //     numberStar: 5,
//   //     price: "1000",
//   //     description:
//   //       "KR Electric Axe by Jindo Apply firm pressure to trigger upon entry into the frontal lobe.",
//   //   },
//   //   {
//   //     id: 2,
//   //     image:
//   //       "https://previews.dropbox.com/p/thumb/ABwZBxWFMl-eU14TwexkOg9gnecTW30Yjf9XlVtXWywBX292TqFCXkf4SAKMlwL7W6oBJOCus0g52sdeEaw8i-3l3sZfwQtXW8mrSo2qPu-yvctchF6DRvNWKgcvikq-w4cexPCD2l28Sph3f9i-2IvHQ7FHanWaRnfX_D5PCUSZVfeqDX77qwdF_Rs8EabgRQrSZnYKJfBTVYObOsBCini3sMMFZ48wegDTDRkSt8k-bzwrY7zraWLSwOEG6LLWfQUfX3UMBlH1wnkm-XJI0udSOMwc-_mBTUXeHKAmev4sqO0m-n3hlGzVJmkCBppXG-I-jway5-0yuO9IrS3Oc5XbcqhphgupNfh7nqEiFb-I9NEpeW3vRwjUrSoYcjLVg0I/p.png",
//   //     name: "Tomahawk | M48 Destroyer Tactical, Eloi Farriol",
//   //     priceSale: "1700",
//   //     sale: "2000",
//   //     numberStar: 5,
//   //     price: "1000",
//   //     description:
//   //       "Just a Tomahawk with a cool name. Modelled in 3ds Max | Baked in Marmoset Toolbag 3 | Textured in Substance Painter | Rendered in Marmoset Toolbag 3 3930 tris. This is a project done during Florida Replay's master degree.",
//   //   },
//   //   {
//   //     id: 3,
//   //     image:
//   //       "https://previews.dropbox.com/p/thumb/ABxKSnD-nYYk1L5yBnAH9QmecLi5Ow9O72zEI8c0wV44UyQXGib8W89rXgX21izB-RXm6nNOHH4v5u33Q9F5Cwf_9iXcp3ugsXFIpzIr0TrcVt4xs8Coj1p4PjA5UtYtU9RZxoR-4COTvAPtyl6X6E4o8a_L01MWC_0J7vaFW-yezL8ImKjfhfdWjno89g41uhbViy_r0nttIPxSnNYXL5dlCzm4SPhjHzakvqVRPKf_qSyxTwOfNwAoqRFSg4xeFz7__U7ogNv6imlP6qG7JBv60Sst1BXZeTY-eCppg_ZFEMQcCnBKpkjqQ9H2sWPK71LnJbt5I09k-58V_zbLax81VKAkFHGXYZ-az6zgNrlyDkUk-CoWMhexOph3DJ7sdCE/p.png",
//   //     name: "Guns Knives Gear",
//   //     priceSale: "2020",
//   //     sale: "2000",
//   //     numberStar: 4,
//   //     price: "1000",
//   //     description: "Shrike Tomahawk.",
//   //   },
//   //   {
//   //     id: 4,
//   //     image:
//   //       "https://previews.dropbox.com/p/thumb/ABwZBxWFMl-eU14TwexkOg9gnecTW30Yjf9XlVtXWywBX292TqFCXkf4SAKMlwL7W6oBJOCus0g52sdeEaw8i-3l3sZfwQtXW8mrSo2qPu-yvctchF6DRvNWKgcvikq-w4cexPCD2l28Sph3f9i-2IvHQ7FHanWaRnfX_D5PCUSZVfeqDX77qwdF_Rs8EabgRQrSZnYKJfBTVYObOsBCini3sMMFZ48wegDTDRkSt8k-bzwrY7zraWLSwOEG6LLWfQUfX3UMBlH1wnkm-XJI0udSOMwc-_mBTUXeHKAmev4sqO0m-n3hlGzVJmkCBppXG-I-jway5-0yuO9IrS3Oc5XbcqhphgupNfh7nqEiFb-I9NEpeW3vRwjUrSoYcjLVg0I/p.png",
//   //     name: "Tomahawk | M48 Destroyer Tactical, Eloi Farriol",
//   //     priceSale: "2060",
//   //     sale: "2000",
//   //     numberStar: 5,
//   //     price: "1000",
//   //     description: "Just a Tomahawk with a cool name.",
//   //   },
//   //   {
//   //     id: 5,
//   //     image:
//   //       "https://previews.dropbox.com/p/thumb/ABwZBxWFMl-eU14TwexkOg9gnecTW30Yjf9XlVtXWywBX292TqFCXkf4SAKMlwL7W6oBJOCus0g52sdeEaw8i-3l3sZfwQtXW8mrSo2qPu-yvctchF6DRvNWKgcvikq-w4cexPCD2l28Sph3f9i-2IvHQ7FHanWaRnfX_D5PCUSZVfeqDX77qwdF_Rs8EabgRQrSZnYKJfBTVYObOsBCini3sMMFZ48wegDTDRkSt8k-bzwrY7zraWLSwOEG6LLWfQUfX3UMBlH1wnkm-XJI0udSOMwc-_mBTUXeHKAmev4sqO0m-n3hlGzVJmkCBppXG-I-jway5-0yuO9IrS3Oc5XbcqhphgupNfh7nqEiFb-I9NEpeW3vRwjUrSoYcjLVg0I/p.png",
//   //     name: "bomahawk | M48 Destroyer Tactical, Eloi Farriol",
//   //     priceSale: "100",
//   //     sale: "2000",
//   //     numberStar: 5,
//   //     price: "1000",
//   //     description: "Just a Tomahawk with a cool name.",
//   //   },
//   //   {
//   //     id: 6,
//   //     image:
//   //       "https://previews.dropbox.com/p/thumb/ABwZBxWFMl-eU14TwexkOg9gnecTW30Yjf9XlVtXWywBX292TqFCXkf4SAKMlwL7W6oBJOCus0g52sdeEaw8i-3l3sZfwQtXW8mrSo2qPu-yvctchF6DRvNWKgcvikq-w4cexPCD2l28Sph3f9i-2IvHQ7FHanWaRnfX_D5PCUSZVfeqDX77qwdF_Rs8EabgRQrSZnYKJfBTVYObOsBCini3sMMFZ48wegDTDRkSt8k-bzwrY7zraWLSwOEG6LLWfQUfX3UMBlH1wnkm-XJI0udSOMwc-_mBTUXeHKAmev4sqO0m-n3hlGzVJmkCBppXG-I-jway5-0yuO9IrS3Oc5XbcqhphgupNfh7nqEiFb-I9NEpeW3vRwjUrSoYcjLVg0I/p.png",
//   //     name: "comahawk | M48 Destroyer Tactical, Eloi Farriol",
//   //     priceSale: "1800",
//   //     sale: "2000",
//   //     numberStar: 5,
//   //     price: "1000",
//   //     description: "Just a Tomahawk with a cool name.",
//   //   },
//   //   {
//   //     id: 7,
//   //     image:
//   //       "https://previews.dropbox.com/p/thumb/ABwZBxWFMl-eU14TwexkOg9gnecTW30Yjf9XlVtXWywBX292TqFCXkf4SAKMlwL7W6oBJOCus0g52sdeEaw8i-3l3sZfwQtXW8mrSo2qPu-yvctchF6DRvNWKgcvikq-w4cexPCD2l28Sph3f9i-2IvHQ7FHanWaRnfX_D5PCUSZVfeqDX77qwdF_Rs8EabgRQrSZnYKJfBTVYObOsBCini3sMMFZ48wegDTDRkSt8k-bzwrY7zraWLSwOEG6LLWfQUfX3UMBlH1wnkm-XJI0udSOMwc-_mBTUXeHKAmev4sqO0m-n3hlGzVJmkCBppXG-I-jway5-0yuO9IrS3Oc5XbcqhphgupNfh7nqEiFb-I9NEpeW3vRwjUrSoYcjLVg0I/p.png",
//   //     name: "hawk | M48 Destroyer Tactical, Eloi Farriol",
//   //     priceSale: "1500",
//   //     sale: "2000",
//   //     numberStar: 5,
//   //     price: "1000",
//   //     description: "Just a Tomahawk with a cool name.",
//   //   },
//   //   {
//   //     id: 8,
//   //     image:
//   //       "https://previews.dropbox.com/p/thumb/ABwZBxWFMl-eU14TwexkOg9gnecTW30Yjf9XlVtXWywBX292TqFCXkf4SAKMlwL7W6oBJOCus0g52sdeEaw8i-3l3sZfwQtXW8mrSo2qPu-yvctchF6DRvNWKgcvikq-w4cexPCD2l28Sph3f9i-2IvHQ7FHanWaRnfX_D5PCUSZVfeqDX77qwdF_Rs8EabgRQrSZnYKJfBTVYObOsBCini3sMMFZ48wegDTDRkSt8k-bzwrY7zraWLSwOEG6LLWfQUfX3UMBlH1wnkm-XJI0udSOMwc-_mBTUXeHKAmev4sqO0m-n3hlGzVJmkCBppXG-I-jway5-0yuO9IrS3Oc5XbcqhphgupNfh7nqEiFb-I9NEpeW3vRwjUrSoYcjLVg0I/p.png",
//   //     name: "omahawk | M48 Destroyer Tactical, Eloi Farriol",
//   //     priceSale: "1101",
//   //     sale: "2000",
//   //     numberStar: 5,
//   //     price: "1000",
//   //     description: "Just a Tomahawk with a cool name.",
//   //   },
//   //   {
//   //     id: 9,
//   //     image:
//   //       "https://previews.dropbox.com/p/thumb/ABwZBxWFMl-eU14TwexkOg9gnecTW30Yjf9XlVtXWywBX292TqFCXkf4SAKMlwL7W6oBJOCus0g52sdeEaw8i-3l3sZfwQtXW8mrSo2qPu-yvctchF6DRvNWKgcvikq-w4cexPCD2l28Sph3f9i-2IvHQ7FHanWaRnfX_D5PCUSZVfeqDX77qwdF_Rs8EabgRQrSZnYKJfBTVYObOsBCini3sMMFZ48wegDTDRkSt8k-bzwrY7zraWLSwOEG6LLWfQUfX3UMBlH1wnkm-XJI0udSOMwc-_mBTUXeHKAmev4sqO0m-n3hlGzVJmkCBppXG-I-jway5-0yuO9IrS3Oc5XbcqhphgupNfh7nqEiFb-I9NEpeW3vRwjUrSoYcjLVg0I/p.png",
//   //     name: "Tomahawk | M48 Destroyer Tactical, Eloi Farriol",
//   //     priceSale: "9000",
//   //     sale: "2000",
//   //     numberStar: 5,
//   //     price: "1000",
//   //     description: "Just a Tomahawk with a cool name.",
//   //   },
//   //   {
//   //     id: 10,
//   //     image:
//   //       "https://previews.dropbox.com/p/thumb/ABwZBxWFMl-eU14TwexkOg9gnecTW30Yjf9XlVtXWywBX292TqFCXkf4SAKMlwL7W6oBJOCus0g52sdeEaw8i-3l3sZfwQtXW8mrSo2qPu-yvctchF6DRvNWKgcvikq-w4cexPCD2l28Sph3f9i-2IvHQ7FHanWaRnfX_D5PCUSZVfeqDX77qwdF_Rs8EabgRQrSZnYKJfBTVYObOsBCini3sMMFZ48wegDTDRkSt8k-bzwrY7zraWLSwOEG6LLWfQUfX3UMBlH1wnkm-XJI0udSOMwc-_mBTUXeHKAmev4sqO0m-n3hlGzVJmkCBppXG-I-jway5-0yuO9IrS3Oc5XbcqhphgupNfh7nqEiFb-I9NEpeW3vRwjUrSoYcjLVg0I/p.png",
//   //     name: "zomahawk | M48 Destroyer Tactical, Eloi Farriol",
//   //     priceSale: "1140",
//   //     sale: "2000",
//   //     numberStar: 5,
//   //     price: "1000",
//   //     description: "Just a Tomahawk with a cool name.",
//   //   },
//   // ];
//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await fetch("https://api-by-zilong.onrender.com/spear", {
//         method: "GET",
//       });
//       const data = await result.json();
//       return setProductsItem(data);
//     };
//     const fetchData2 = async () => {
//       const result = await fetch("https://api-by-zilong.onrender.com/gun", {
//         method: "GET",
//       });
//       const data = await result.json();
//       return setProductsItem2(data);
//     };
//     fetchData();
//     fetchData2();
//   }, []);
//   const Sort = (e, Array, setItem) => {
//     if (e === 1) {
//       setItem(
//         Array.sort((a, b) => {
//           return a.priceSale - b.priceSale;
//         })
//       );
//     } else if (e === 2) {
//       setItem(
//         Array.sort((a, b) => {
//           return b.priceSale - a.priceSale;
//         })
//       );
//     } else if (e === 3) {
//       setItem(
//         Array.sort((a, b) => {
//           return a.name.localeCompare(b.name);
//         })
//       );
//     } else if (e === 4) {
//       setItem(
//         Array.sort((a, b) => {
//           return b.name.localeCompare(a.name);
//         })
//       );
//     }
//   };

//   // var [content, setContent] = useState([]);
//   // thêm 1 tham số vào funtion và gọi nó ra thay thế mac dinh thành 1 funtion khác  const handleSort = (e, cia)
//   const handleSort = (e, Array) => {
//     if (Array === 0) {
//       Sort(e, ProductsItem, setProductsItem);
//     }
//     if (Array === 1) {
//       Sort(e, ProductsItem, setProductsItem2);
//     }
//     if (Array === 2) {
//       Sort(e, ProductsItem);
//     }
//     if (Array === 3) {
//       Sort(e, ProductsItem);
//     }
//   };

//   function addToCart(product) {
//     const newCart = [...cartItem];

//     const Items = ProductsItem.find((item) => item.id === product.id);
//     if (Items) {
//       const index = newCart.findIndex((item) => item.id === product.id);
//       if (index < 0) {
//         newCart.push({
//           ...Items,
//           quantity: 1,
//         });
//       } else {
//         newCart[index].quantity += 1;
//       }
//       //
//       setCartItem(newCart);
//     }
//   }
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cartItem));
//     setProductsItem(ProductsItem);
//     setProductsItem2(ProductsItem);
//     // setProductsItem3(Content2);
//     // setProductsItem4(Content3);
//   }, [cartItem]);

//   const contents = [
//     {
//       svg: "https://i.pinimg.com/564x/b2/5a/99/b25a99e87e816562958ca5760a172f7f.jpg",
//       title: "Section1",
//       content: (
//         <Fragment>
//           {productsItem.map((item, index) => {
//             return (
//               <CardProduct
//                 key={index}
//                 props={item}
//                 onClick={() => handleAdd(item)}
//               />
//             );
//           })}
//         </Fragment>
//       ),
//     },
//     {
//       svg: "https://i.pinimg.com/564x/b2/5a/99/b25a99e87e816562958ca5760a172f7f.jpg",
//       title: "Section2",
//       content: (
//         <Fragment>
//           {productsItem2.map((item, index) => {
//             return (
//               <CardProduct
//                 key={index}
//                 props={item}
//                 onClick={() => handleAdd(item)}
//               />
//             );
//           })}
//         </Fragment>
//       ),
//     },
//     {
//       svg: "https://i.pinimg.com/564x/b2/5a/99/b25a99e87e816562958ca5760a172f7f.jpg",
//       title: "Section3",
//       content: (
//         <Fragment>
//           {Content.map((item, index) => {
//             return <div key={index} className={styles.selection__item}></div>;
//           })}
//         </Fragment>
//       ),
//     },
//     {
//       svg: "https://i.pinimg.com/564x/b2/5a/99/b25a99e87e816562958ca5760a172f7f.jpg",
//       title: "Section 4",
//       content: (
//         <Fragment>
//           {Content.map((item, index) => {
//             return <div key={index} className={styles.selection__item}></div>;
//           })}
//         </Fragment>
//       ),
//     },
//   ];
//   return (
//     <div className="App">
//       <h2>Tab Content</h2>
//       <p>Click on each section to change the tab's content</p>

//       <Tab input={contents} handleSort={handleSort} />
//     </div>
//   );
// }
// export default Selection;
