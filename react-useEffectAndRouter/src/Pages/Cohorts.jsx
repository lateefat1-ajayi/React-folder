import React from 'react'
import { useNavigate} from 'react-router-dom'

const Cohorts = ({cohorts}) => {

  const navigate = useNavigate()
  return (
    <div className='w-[100%] items-center gap-10 flex flex-col justify-center mt-5 '>
      <h1 className=' w-[100%] text-center font-sans text-blue-700 font-bold text-2xl underline '>All cohorts</h1>
      <div>
        <ul className=' flex flex-wrap gap-9 items-center'>
            {cohorts?.map((cohort) => (
                <li className='border-[1px] shadow-md text-center p-5 rounded-sm bg-slate-100 ' key={cohort?.id}>
                    <span> {`Cohort name: ${cohort.name}`}</span>
                    <ul>
                        <li className='text-gray-600'>{ `Mentor: ${cohort.mentor}` }</li>
                        <li className='text-gray-600' >{`Total students: ${cohort.studentsNum}` }</li>
                    </ul>
                    <button onClick={() => navigate(`/cohort/${cohort?.id}`)} className=' border border-gray-700 bg-blue-400 px-2 rounded-sm mt-2 hover:bg-blue-500 duration-300 transition-colors '>View Students</button>
                </li>

            ))}
        </ul>
      </div>
    </div>
  )
}

export default Cohorts
