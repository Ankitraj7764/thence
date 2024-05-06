import React from 'react'


const Navbar = () => {
  return (
    <div><div className='flex justify-between mx-12 mt-4' >
      <div>
        <img src='./logo.png' alt=""  />
      </div>
      <div className='flex'>
        <button className='rounded-full border px-8 mx-4'>
         <a href="/regfrom">
         Get Project
         </a>
        </button>
        <button className='rounded-full border px-8 bg-black text-white'>
          Onboard Talent
        </button>
      </div>
    </div></div>
  )
}

export default Navbar