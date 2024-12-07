import React from 'react'
import SearchBar from './granular/SearchBar'

const Header = () => {
  return (
    <header className='px-12 h-20 w-full bg-white sticky top-0 z-20'>
      <div className='h-full w-full flex items-center justify-between'>
        <img className='w-32 object-contain' src="/swiggy-logo.png" alt="swiggy-logo" />
        <SearchBar />
      </div>
    </header>
  )
}

export default Header
