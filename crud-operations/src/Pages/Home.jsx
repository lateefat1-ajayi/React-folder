import React from 'react'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <div className='text-center bg-black flex flex-col items-center justify-center gap-8 h-screen'>
      <h1 className='font-bold text-4xl text-white'>Welcome to my page</h1>
      <Link to="/products"
      className="bg-yellow-400 px-8 py-3 text-white rounded-xl" >Go to Product Page</Link>
    </div>
  )
}

export default Home
