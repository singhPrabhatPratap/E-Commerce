import React, { useState, useEffect } from 'react'

export default function Carousel() {
  const [cu, setCu] = useState(0)
  const [fade, setFade] = useState(false)
  const image = [
    "https://assets.mspimages.in/gear/wp-content/uploads/2021/10/Flipkart-Big-billion-days-2021-featured-image-1.jpeg",
    "https://cdn.grabon.in/gograbon/images/merchant/1633239459493.jpg",
    "https://couponswala.com/blog/wp-content/uploads/2021/09/Flipkart-Big-Billion-Days-Sale-2022-696x392.jpg",
    "https://www.advertgallery.com/wp-content/uploads/2018/10/flipkart-big-billion-days-upto-90-off-on-fashion-ad-times-of-india-mumbai-10-10-2018.png"
  ]

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setFade(true)
      setTimeout(() => {
        i = (i + 1) % image.length
        setCu(i)
        setFade(false)
      }, 500)
    }, 2000)

    return () => clearInterval(interval)
  },[])

  return (
    <div className='w-full flex items-center justify-center'>
      <img className={`w-11/12 h-[400px] shadow-2xl transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`} src={image[cu]} alt="Carousel" />
    </div>
  )
}
