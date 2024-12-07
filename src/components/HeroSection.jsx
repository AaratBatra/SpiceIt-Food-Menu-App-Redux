import React from 'react'
import ImageSlider from './granular/ImageSlider'
import { useSelector } from 'react-redux'

const HeroSection = () => {
  const {carouselMenu} = useSelector(state => state.foodMenu);

  return (
    <div className='flex items-center justify-between p-2 shadow-sm my-2 max-md:flex-col max-md:items-start'>
      <h1 className='text-8xl font-bold text-orange-600 kavoon max-md:text-xl'>Spice It Right!</h1>
      <div className="w-1/2 max-md:mx-auto max-md:w-full">
        <ImageSlider images={carouselMenu} />
      </div>
    </div>
  )
}

export default HeroSection
