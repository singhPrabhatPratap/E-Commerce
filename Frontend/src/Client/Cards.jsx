import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Star, ChevronDown } from "lucide-react";
import Usercontext from "../context/Usercontext";
import { Link, useNavigate } from "react-router-dom";
import Filter from "./Filter";

export default function Cards() {
  let navigation = useNavigate();
  let [data, setData] = useState([]);
  let { clientlog, cartcat, fil} = useContext(Usercontext);
  let { setCount } = useContext(Usercontext);
  let { total, setTotal } = useContext(Usercontext);

  async function getData() {
    
    if (cartcat == "ALL") {
      let result = await axios.get(`http://localhost:3000/api/getData`);
      if (fil) {
        setData(result.data.filter((dat)=>dat.productBrand === fil));
      }
     else{
      setData(result.data);
     }
    } else {
      let result = await axios.get(`http://localhost:3000/api/getData`);
     if(cartcat){
      let catdata=result.data.filter((element) => element.productType == cartcat);
      if(fil){
        setData(catdata.filter((dat)=>dat.productBrand === fil));
      }
      else{
        setData(catdata)
      }
     }
     else{
      setData(result.data)
     }
     
    }
  }
  useEffect(() => {
    getData();
  }, [cartcat, fil]);
  async function getCart() {
    let result = await axios.get(
      `http://localhost:3000/clientTable/getCart/${clientlog}`
    );
    setCount(result.data.length);
    let single = 0;
    result.data.map((price) => {
      let prices = parseFloat(price.productPrice);
      single = single + prices;
    });
    setTotal(single);
  }
  async function handleadd(e,product) {
    e.stopPropagation()
    console.log(product)
    if (clientlog) {
      await axios.post(
        `http://localhost:3000/clientTable/insertCleintTable/${clientlog}`,
        {
          productBrand: product.productBrand,
          productRating: product.productRating,
          productPrice: product.productPrice,
          productType: product.productType,
          productimage: product.image,
        }
      );
      getCart();
    } else {
      navigation("/clientlogin");
    }
  }
  // function showdetail(product){
  //   navigation('/carddet')
  //   setShow(product)
  // }

  return (
    <div className="flex">
      <div className="h-screen top-0">
        <Filter/>
      </div>
        <div
        className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
          {data.map((product) => (
            
            <div className="rounded-md border shadow-xl" >
              
              <img
                src={`http://localhost:3000/${product.image}`}
                className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div className="flex mt-2">
                {[...Array(product.productRating)].map((i) => (
                  <Star key={i} size={16} className="text-yellow-500" />
                ))}
              </div>
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                  {product.productBrand}
                </h1>
                <br />
                <h1 className="inline-flex items-center text-lg font-semibold">
                  ₹ {product.productPrice}
                </h1>
                <p className="mt-3 text-sm text-gray-600">
                  {product.productDesc}
                </p>
                <button
                  onClick={(e) => handleadd(e,product)}
                  type="button"
                  className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}
