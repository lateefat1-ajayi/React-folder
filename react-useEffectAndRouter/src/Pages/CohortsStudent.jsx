import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';

const CohortsStudent = ({cohorts}) => {
  const {id} = useParams();

  const [students, setStudents] = useState([]);

  useEffect(() => {
    if (students.length)return;
    const parseNum =  parseInt(id)

    const filteredCohort = cohorts?.filter(
      (cohort) => cohort.id === parseNum)

    if(filteredCohort && filteredCohort.length) 
      setStudents(filteredCohort[0]?.students)
  }, [cohorts.length])

  return (
    <div className='bg-blue-100 flex flex-col items-center gap-[20px] h-screen '>
      <h1 className=' text-center text-4xl font-sans font-bold'>List of students</h1>
      <table className='border-2  border-black '>
        <thead className='border-2 border-black'>
          <tr>
          <th>S/N</th>
          <th>Name</th>
          <th>Age</th>
          <th>Height</th>
          </tr>
        </thead>

        <tbody className='border-2 border-black'>
        {
          students?.map((student, index) => (
            <tr key={index}>
              <td>{index +1}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.height}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  )
}

export default CohortsStudent
