import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import { ArrowRight } from 'lucide-react'

export default function Update() {
    let {id}=useParams()
  let navigation = useNavigate()
    let [data,setData]=useState({
        productBrand:"",
        productType:"",
        productRating:"",
        productPrice:"",
    })
    let {productBrand,productType,productRating,productPrice}=data

    function handleChange(e){
      e.preventDefault()
        setData({...data,[e.target.name]:e.target.value})
    }

async function handleGet(){
 let result= await axios.get(`http://localhost:3000/api/getDatabyid/${id}`)
 setData(result.data[0])
}
useEffect(()=>{
    handleGet()
},[])
    async function handleSubmit(e){
      e.preventDefault()
      await axios.put(`http://localhost:3000/api/updateData/${id}`,data)
     navigation('/')
    }

  return (
    <section>
      <div className="grid grid-cols-1">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    {' '}
                    productBrand{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      name='productBrand'
                      onChange={handleChange}
                      value={productBrand}
                      placeholder="Full Name"
                      id="name"
                    ></input>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-base font-medium text-gray-900">
                    {' '}
                    product Rating{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="number"
                      value={productRating}
                      onChange={handleChange}
                      name="productRating"
                      placeholder="Product Rating"
                     
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                      {' '}
                      Product Price{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="number"
                      value={productPrice}
                      name="productPrice"
                      onChange={handleChange}
                      placeholder="Password"
                      
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                      {' '}
                      productType{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      value={productType}
                      name="productType"
                      onChange={handleChange}
                      placeholder="Password"
                      id="password"
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                  onClick={handleSubmit}
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Update Product <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
           
          </div>
        </div>
      </div>
    </section>
  )
}
