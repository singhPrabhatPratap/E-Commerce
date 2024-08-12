import React, { useContext } from "react";
import Carousel from "./Carousel";
import Usercontext from "../context/Usercontext";
import { useNavigate } from "react-router-dom";

export default function Homes() {
  let { setCartcat } = useContext(Usercontext);
  let navigation = useNavigate();
  let option = [
    {
      img: "https://i.pinimg.com/originals/f8/78/97/f8789762ab4735293d2a44fc66125ff4.jpg",
      category: "Kids-Boys",
      offers: "40-50% OFF",
    },
    {
      img: "https://th.bing.com/th/id/OIP.TVYCyEjxpsOJTT4IhPFC4AHaHa?rs=1&pid=ImgDetMain",
      category: "Kids-Girls",
      offers: "40-50% OFF",
    },
    {
      img: "https://th.bing.com/th/id/OIP.Dy9HjZta6eUlFWSk4wqUoAHaKZ?rs=1&pid=ImgDetMain",
      category: "Womens",
      offers: "40-50% OFF",
    },
    {
      img: "https://th.bing.com/th/id/R.2407691bdd5762180943c9cf9317e255?rik=bFHHfyAcwJRb5Q&riu=http%3a%2f%2fmedia.gq.com%2fphotos%2f5964e0bddaa87a18cb2cac96%2fmaster%2fpass%2fNY-SS18-Street-Style-Dan-Roberts-21.jpg&ehk=IHOo9f3Slt88t2oQhHqbGuNTrfiJR4DM3gNWub%2b4xoU%3d&risl=1&pid=ImgRaw&r=0",
      category: "Mens",
      offers: "40-50% OFF",
    },
    {
      img: "https://th.bing.com/th/id/OIP.u212LfA11ebqafh_hd9F3QHaHa?rs=1&pid=ImgDetMain",
      category: "Jewellery",
      offers: "40-50% OFF",
    },
    {
      img: "https://th.bing.com/th/id/OIP.WLTmIsuNTp3UwU6Qmef9_wHaE7?rs=1&pid=ImgDetMain",
      category: "Electronics",
      offers: "40-50% OFF",
    },
    {
      img: "https://th.bing.com/th/id/OIP.-UDTc7RsHCeD6hrTpIhYyAHaHa?rs=1&pid=ImgDetMain",
      category: "Watches",
      offers: "40-50% OFF",
    },
    {
      img: "https://i.pinimg.com/originals/4d/a6/7b/4da67bb079d2399637117a074e97e9e1.png",
      category: "ladies",
      offers: "40-50% OFF",
    },
    {
      img: "https://i5.walmartimages.com/seo/Home-Decor-A-Z-Last-Name-Heart-Shaped-Front-Door-Sign-Wreath-26-Letter-Farmhouse-With-Spring-Wreaths-For-Outside-Hanging_3dedd5e1-5604-426a-92e5-0df55687610e.eab282f0aa6cf0a526fd62cf6efa0e62.jpeg",
      category: "Home-Decor",
      offers: "40-50% OFF",
    },
    {
      img: "https://th.bing.com/th/id/OIP.zrEf13UQGgyhaKyPRUxfcwHaEo?rs=1&pid=ImgDetMain",
      category: "Eye-Wear",
      offers: "40-50% OFF",
    },
    {
      img: "https://www.popoptiq.com/wp-content/uploads/2019/01/4-25-1-870x646.jpg",
      category: "Foot-Wear",
      offers: "40-50% OFF",
    },
    {
      img: "https://th.bing.com/th/id/OIP.MTeRXDzgBaa7656tfn-k8wAAAA?rs=1&pid=ImgDetMain",
      category: "Bags",
      offers: "40-50% OFF",
    },
  ];
  function handleclick(category) {
    setCartcat(category);
    navigation("/cards");
  }

  return (
    <div className="mt-5">
      <Carousel />
      <div className="p-10 grid grid-cols-1 xl:grid-cols-5  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {option.map((card) => (
          <div
            onClick={() => handleclick(card.category)}
            className="relative h-[400px] w-[240px] rounded-md m-4 justify-self-center"
          >
            <img
              src={card.img}
              alt="AirMax Pro"
              className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
              <h1 className="text-lg font-semibold text-white">
                {card.category}
              </h1>
              <h1 className="text-lg text-white font-bold">{card.offers}</h1>

              <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                SHOP NOW &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
