import React from 'react'

const Cohort = ({cohort, handleAttendance, handleDelete}) => {
  return (
    <li key={cohort.id} style={(cohort.attendance) ? {border: "blue 2px solid"}: null} className=' bg-[#b5e2fa] py-[4px] px-8 w-full flex items-center justify-between'>
    <input type="checkbox" onChange={() => handleAttendance(cohort.id)} className='cursor-pointer w-[40px] h-[70px]' checked={(cohort.attendance)? true: null}/>

   <label  onDoubleClick={() => handleAttendance(cohort.id)} 
    className='text-[25px]'>{cohort.name}</label>
    <button className='bg-red-400 rounded-md px-2 text-[25px]'  onClick={() => handleDelete(cohort.id)}>Delete</button>
</li>
  )
}

export default Cohort
