import React, { useState, useEffect } from 'react'
/**
 * 
 * @param {1} images is an array of image urls 
 * @returns carousel component
 */
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 2000) // Change slide every 2 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-full h-[220px] md:h-[280px] overflow-hidden rounded-lg shadow-lg">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-600 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}

export default ImageSlider