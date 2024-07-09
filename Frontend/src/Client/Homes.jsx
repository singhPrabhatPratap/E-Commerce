// import React, { useContext, useEffect, useState } from 'react'
// import axios from 'axios'
// import { Home, BarChart, Copy, Bookmark, Users, Settings } from 'lucide-react'
// import Usercontext from '../context/Usercontext'
// import { useNavigate } from 'react-router-dom'
// import Carousel from './Carousel'

// export default function Homes() {
//   let option = [
//     {img:"",category:"",offers:''}
//   ]
//   let navigation = useNavigate()
//   let [data,setData]=useState([])
//   let{clientlog} =useContext(Usercontext)
//   let{ setCount } =useContext(Usercontext)
//   let{ total,setTotal } =useContext(Usercontext)

//   async function getData(){
//     let result = await axios.get('http://localhost:3000/api/getData')
//     setData(result.data)
//   }
//   useEffect(()=>{
//     getData()
//   },[])
//   async function getCart() {
//     let result = await axios.get(
//       `http://localhost:3000/clientTable/getCart/${clientlog}`
//     );
//     setCount(result.data.length)
//     let single = 0
//     result.data.map((price) => {
//       let prices = parseFloat(price.productPrice);
//      single = single+prices
//     });
//     setTotal(single)
//   }

//  async function handleadd(product){
//   if(clientlog){
//   await axios.post(`http://localhost:3000/clientTable/insertCleintTable/${clientlog}`,{
//     productBrand:product.productBrand,
//     productRating:product.productRating,
//     productPrice:product.productPrice,
//     productType:product.productType
//   })
//   getCart()
// }
//  else{
//   navigation("/clientlogin")
//  }
// }

//   return (
//  <>
  
//    <div className='flex flex-row'>
//    <div>
//     <Carousel/>
//    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
//     {data.map((product)=>(
//         <div className="rounded-md border">
         
//           <img
//             src={`http://localhost:3000/${product.image}`}
//             className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
//           />
//           <div className="p-4">
//             <h1 className="inline-flex items-center text-lg font-semibold">₹{product.productPrice}</h1>
//             <p className="mt-3 text-sm text-gray-600">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
//             </p>
//             <div className="mt-5 flex items-center space-x-2">
//               <span className="block text-sm font-semibold">Size : </span>
//               <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
//                 8 UK
//               </span>
//               <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
//                 9 UK
//               </span>
//               <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
//                 10 UK
//               </span>
//             </div>
//             <button
//             onClick={()=>handleadd(product)}
//               type="button"
//               className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//  ))} 
//     </div>
//    </div>
//   </div>
//  </>

//   )
// }

import React, { useContext } from 'react'
import Carousel from './Carousel'
import Usercontext from '../context/Usercontext'
import { useNavigate } from 'react-router-dom'

export default function Homes() {
  let {setCartcat}=useContext(Usercontext) 
  let navigation = useNavigate()
  let option = [
        {img:"https://i.pinimg.com/originals/f8/78/97/f8789762ab4735293d2a44fc66125ff4.jpg",category:"Kids-Boys",offers:'40-50% OFF'},
        {img:"https://th.bing.com/th/id/OIP.TVYCyEjxpsOJTT4IhPFC4AHaHa?rs=1&pid=ImgDetMain",category:"Kids-Girls",offers:'40-50% OFF'},
        {img:"https://th.bing.com/th/id/OIP.Dy9HjZta6eUlFWSk4wqUoAHaKZ?rs=1&pid=ImgDetMain",category:"Womens",offers:'40-50% OFF'},
        {img:"https://th.bing.com/th/id/R.2407691bdd5762180943c9cf9317e255?rik=bFHHfyAcwJRb5Q&riu=http%3a%2f%2fmedia.gq.com%2fphotos%2f5964e0bddaa87a18cb2cac96%2fmaster%2fpass%2fNY-SS18-Street-Style-Dan-Roberts-21.jpg&ehk=IHOo9f3Slt88t2oQhHqbGuNTrfiJR4DM3gNWub%2b4xoU%3d&risl=1&pid=ImgRaw&r=0",category:"Mens",offers:'40-50% OFF'},
        {img:"https://th.bing.com/th/id/OIP.u212LfA11ebqafh_hd9F3QHaHa?rs=1&pid=ImgDetMain",category:"Jewellery",offers:'40-50% OFF'},
        {img:"https://th.bing.com/th/id/OIP.WLTmIsuNTp3UwU6Qmef9_wHaE7?rs=1&pid=ImgDetMain",category:"Electronics",offers:'40-50% OFF'},
        {img:"https://th.bing.com/th/id/OIP.-UDTc7RsHCeD6hrTpIhYyAHaHa?rs=1&pid=ImgDetMain",category:"Watches",offers:'40-50% OFF'},
        {img:"https://i.pinimg.com/originals/4d/a6/7b/4da67bb079d2399637117a074e97e9e1.png",category:"ladies",offers:'40-50% OFF'},
      {img:'https://i5.walmartimages.com/seo/Home-Decor-A-Z-Last-Name-Heart-Shaped-Front-Door-Sign-Wreath-26-Letter-Farmhouse-With-Spring-Wreaths-For-Outside-Hanging_3dedd5e1-5604-426a-92e5-0df55687610e.eab282f0aa6cf0a526fd62cf6efa0e62.jpeg',category:"Home-Decor",offers:'40-50% OFF'},
      {img:'https://th.bing.com/th/id/OIP.zrEf13UQGgyhaKyPRUxfcwHaEo?rs=1&pid=ImgDetMain',category:"Eye-Wear",offers:'40-50% OFF'},
      {img:'https://www.popoptiq.com/wp-content/uploads/2019/01/4-25-1-870x646.jpg',category:"Foot-Wear",offers:'40-50% OFF'},
      {img:'https://th.bing.com/th/id/OIP.MTeRXDzgBaa7656tfn-k8wAAAA?rs=1&pid=ImgDetMain',category:"Bags",offers:'40-50% OFF'}
  
    ]
    function handleclick(category){
      setCartcat(category)
navigation("/cards")
    }

  return (
   <div className='mt-5'>
    <Carousel/>
    <div className='p-10 flex flex-row flex-wrap'>
   {option.map((card)=>(

      <div
      onClick={()=>handleclick(card.category)}
      className="relative h-[400px] w-[250px] rounded-md m-4">
     <img
       src={card.img}
        alt="AirMax Pro"
       className="z-0 h-full w-full rounded-md object-cover"
     />
     <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
     <div className="absolute bottom-4 left-4 text-left">
       <h1 className="text-lg font-semibold text-white">{card.category}</h1>
       <h1 className="text-lg text-white font-bold">{card.offers}</h1>
       
       <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
         SHOP NOW &rarr;
       </button>
     </div>
   </div>
   ))}
   </div>
   </div>
  )
}

