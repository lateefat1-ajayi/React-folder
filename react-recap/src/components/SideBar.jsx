import React from 'react'

const SideBar = () => {
  return (
    <div className='w-[240px] bg-amber-50 p-4 pt-30 h-screen flex flex-col gap-4 z-10 fixed top-0 left-0 '>
      <a href="/body/dashboard" className='font-bold hover:underline'>Dash Board</a>
      <a href="/body/about" className='font-bold hover:underline'>About</a>
      <a href="/body/students" className='font-bold hover:underline'>Students</a>
    </div>
  )
}

export default SideBar
