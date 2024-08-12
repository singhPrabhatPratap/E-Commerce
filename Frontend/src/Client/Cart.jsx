import React, { useContext, useEffect, useState } from "react";
import { Trash, Heart } from "lucide-react";
import Usercontext from "../context/Usercontext";
import axios from "axios";
import { Link } from "react-router-dom";
// http://localhost:3000/clientTable/getCart/unique      get cartdata
// http://localhost:3000/clientTable/deleteCart/unique/id

export default function Cart() {
  // let total = 0;
  let [data, setData] = useState([]);
  let { clientlog } = useContext(Usercontext);
  let { setCount} = useContext(Usercontext);
  let { total,setTotal } = useContext(Usercontext);
  
  async function getCart() {
    let result = await axios.get(
      `http://localhost:3000/clientTable/getCart/${clientlog}`
    );
    setData(result.data);
    setCount(result.data.length)
  }
  
  async function deleteCart(id) {
    await axios.delete(
      `http://localhost:3000/clientTable/deleteCart/${clientlog}/${id}`
    );
    getCart();
  }

  let cost  = data.reduce((acc , curent)=> acc + JSON.parse(curent.productPrice) ,0)
  
  useEffect(() => {
    getCart();
  }, []);
  console.log(data)
  return (
    <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
      <h2 className="text-3xl font-bold">Your cart</h2>
      
      <ul className="flex flex-col divide-y divide-gray-200">
        {data.map((product) => (
          <li
            key={product.id}
            className="flex flex-col py-6 sm:flex-row sm:justify-between"
          >
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                src={`http://localhost:3000/${product.productimage}`}
                // alt={product.name}
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                      {product.productBrand}
                    </h3>
                    <p className="text-sm">{product.productType}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">
                    ₹ {product.productPrice}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">
                      Rating:{product.productRating}
                    </p>
                  </div>
                </div>
                <div className="flex divide-x text-sm">
                  <button
                    type="button"
                    className="flex items-center space-x-2 px-2 py-1 pl-0"
                  >
                    <Trash size={16} />
                    <button onClick={() => deleteCart(product.id)}>
                      Remove
                    </button>
                  </button>
                  <button
                    type="button"
                    className="flex items-center space-x-2 px-2 py-1"
                  >
                    <Heart size={16} />
                    <span>Add to favorites</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="space-y-1 text-right">
        <p>
          Total amount:
          <span className="font-semibold">₹{cost}</span>
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <Link
        to={'/'}
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Back to shop
        </Link>
        <button
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
