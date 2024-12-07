import React from 'react'

const FooterSection = () => {
  return (
    <footer className='w-full bg-black flex py-2 px-[25%] items-center justify-between gap-4 max-md:px-4'>
      <img src="./swiggy-logo.png" alt="swiggy-logo" className='w-20' />
      <div>
        <h1 className='text-white text-sm'>&copy; 2024 Swiggy</h1>
        <p className='text-white text-sm'>Developed by <a className='text-orange-500' href="https://www.linkedin.com/in/aaratbatra">Aarat Batra</a></p>
      </div>
    </footer>
  )
}

export default FooterSection
