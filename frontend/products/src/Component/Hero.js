import React from 'react'
import img from "../image/hero.jpg"

const Hero = () => {
  return (
    <>
    <img src={img} alt="hero img" className='h-[800px] w-[1400px] pt-[20px]'/>
    </>
  )
}

export default Hero