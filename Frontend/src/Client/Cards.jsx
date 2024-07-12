import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Star, ChevronDown } from 'lucide-react'
// import { Home, BarChart, Copy, Bookmark, Users, Settings } from 'lucide-react'
import Usercontext from '../context/Usercontext'
import { useNavigate } from 'react-router-dom'

export default function Cards() {
  let navigation = useNavigate()
  let [data,setData]=useState([])
  let{clientlog,cartcat} =useContext(Usercontext)
  let{ setCount } =useContext(Usercontext)
  let{ total,setTotal } =useContext(Usercontext)

  async function getData(){
   if(cartcat == 'ALL'){
    let result = await axios.get(`http://localhost:3000/api/getData`)
    setData(result.data)
   }
   else{
    let result = await axios.get(`http://localhost:3000/api/getData`)
    setData(result.data.filter((element)=>element.productType==cartcat))
   }
  }
  useEffect(()=>{
    getData()
  },[cartcat])
  async function getCart() {
    let result = await axios.get(
      `http://localhost:3000/clientTable/getCart/${clientlog}`
    );
    setCount(result.data.length)
    let single = 0
    result.data.map((price) => {
      let prices = parseFloat(price.productPrice);
     single = single+prices
    });
    setTotal(single)
  }

 async function handleadd(product){
  if(clientlog){
  await axios.post(`http://localhost:3000/clientTable/insertCleintTable/${clientlog}`,{
    productBrand:product.productBrand,
    productRating:product.productRating,
    productPrice:product.productPrice,
    productType:product.productType
  })
  getCart()
}
 else{
  navigation("/clientlogin")
 }
}

  return (
 <>
   <div>
   
   <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
    {data.map((product)=>(
        <div className="rounded-md border">
         
          <img
            src={`http://localhost:3000/${product.image}`}
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
          />
          <div className='flex mt-2'>
              {[...Array(product.productRating)].map((i)=>(
                <Star key={i} size={16} className="text-yellow-500" />
              ))}
            </div>
          <div className="p-4">
            
            <h1 className="inline-flex items-center text-lg font-semibold">{product.productBrand}</h1><br />
            <h1 className="inline-flex items-center text-lg font-semibold">₹ {product.productPrice}</h1>
            <p className="mt-3 text-sm text-gray-600">
             {product.productDesc}
            </p>
            <button
            onClick={()=>handleadd(product)}
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
 
 </>

  )
}
