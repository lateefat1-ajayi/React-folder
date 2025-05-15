import React from 'react'

const Header = () => {
  return (
    <div>
        <header className='bg-blue-400 flex justify-end items-center gap-2 p-6 '>
            <img src="" className='h-12 w-12 rounded-full border bg-white' alt="" />
            <div className='flex flex-col gap-1'>
            <p className='font-bold text-sm'>Ajayi Lateefah</p>
            <a href='' className='text-xs hover:underline'>View Profile</a>
            </div>
        </header>
      
    </div>
  )
}

export default Header
