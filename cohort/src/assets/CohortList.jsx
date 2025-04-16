import React from 'react'
import Cohort from './Cohort'

const CohortList = ({handleAttendance, handleDelete ,cohorts}) => {
  return (
    <div>
      <ul className='flex flex-col items-start gap-4'>
        {cohorts.map((cohort) => (
          <Cohort handleAttendance={handleAttendance} 
          handleDelete={handleDelete} cohort={cohort} />
        ))}
      </ul>
    </div>
  )
}

export default CohortList
