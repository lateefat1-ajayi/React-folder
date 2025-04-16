import React from 'react'

const Footer = () => {
    const today = new Date();
  return (
    <footer className='bg-blue-800 py-4 flex justify-center items-center'>
      <p className='text-[11px] text-white'>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer
