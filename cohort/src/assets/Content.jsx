import {useState} from 'react'
import CohortList from './CohortList'

function Content({handleAttendance, cohorts, handleDelete}) {


  return (
     <main className='h-[85vh]'>
      {cohorts.length? (
        <CohortList handleAttendance={handleAttendance} 
        handleDelete={handleDelete}
        cohorts={cohorts}/>
      ): 
      
      (<p>No cohorts listed </p>)
    }
    </main>
      )
}

export default Content