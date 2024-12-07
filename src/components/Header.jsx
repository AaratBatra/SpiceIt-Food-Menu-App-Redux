import React from 'react'
import SearchBar from './granular/SearchBar'

const Header = () => {
  return (
    <header className='px-12 h-20 w-full bg-white sticky top-0 z-20 max-md:px-0'>
      <div className='h-full w-full flex items-center justify-between max-md:flex-col max-md:py-2'>
        <img className='w-32 object-contain max-md:w-24' src="/swiggy-logo.png" alt="swiggy-logo" />
        <SearchBar />
      </div>
    </header>
  )
}

export default Header
