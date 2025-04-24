import React, { useEffect, useState } from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import cohortsData from './Data-folder/cohortsData'
import Cohorts from './Pages/Cohorts'
import CohortsStudent from './Pages/CohortsStudent'
import AddCohort from './Pages/AddCohort'
import Countries from './Pages/Countries'
import Classwork from './Pages/Classwork'
import Countrydetails from './Pages/Countrydetails'


const App = () => {

  const [cohorts, setCohorts] = useState([]);

  const local_Key = "cohorts-data"

  useEffect(() => {
    const stored = localStorage.getItem(local_Key) || [];

    if (stored?.length) {

      console.log(stored)
      setCohorts(() => JSON.parse(stored))
    } else {
      localStorage.setItem(local_Key, JSON.stringify(cohortsData))
      setCohorts(cohortsData)
    }
  }, [])


  return (
    <div>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Classwork'  element={<Classwork />}/>
        <Route path='/Countrydetails/:code'  element={<Countrydetails  />}/>

        <Route path='/Countries'  element={<Countries />}/>
        <Route path='/cohorts' element={<Cohorts cohorts={cohorts} />} />
        <Route path='/cohort/:id' element={<CohortsStudent  cohorts={cohorts}  />} />
        <Route path='/AddCohort/:id'  element={<AddCohort />}/>
       
      </Routes>
    </div>
  )
}

export default App
