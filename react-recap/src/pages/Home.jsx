import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='bg-blue-200 flex items-center justify-center h-screen'>
      <Link to="/body" className='p-2 border-2 font-semibold rounded-md bg-white' >To DashBoard➡️</Link>
    </div>
  )
}

export default Home
