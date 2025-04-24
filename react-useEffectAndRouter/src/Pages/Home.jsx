import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='flex justify-center flex-col items-center h-screen bg-blue-100 gap-[20px] '>
      <h1 className='font-bold text-3xl font-sans text-blue-700 underline '>Cohort Manager</h1>

        <div className=' flex justify-center items-center gap-[20px] '>
            <button className=' border border-gray-700  px-2 rounded-sm'> <Link to={`/cohorts`} className='text-blue-600'>View cohorts</Link> </button>
            
            <button className=' border border-gray-700 px-2 rounded-sm'> <Link to={`/AddCohort/:id`} className='text-green-500'> Add cohorts</Link></button>
        </div>

    </div>
  )
}

export default Home
