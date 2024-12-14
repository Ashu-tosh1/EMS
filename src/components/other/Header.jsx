import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='flex items-end justify-between text-2xl text-white font-semibold'>
        <h1>Hello <br /> Ashutosh </h1>
        <button className='bg-red-400 text-white rounded-md p-2 text-lg'>Logout</button>
      </div>
    </div>
  )
}

export default Header
