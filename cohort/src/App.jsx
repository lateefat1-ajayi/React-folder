import {useState} from 'react'
import Header from './Header'
import Footer from './assets/Footer'
import Content from './assets/COntent'

const App = () => {

  const [cohorts, setcohorts] = useState([
    {
     id: 1,
     name: "Lateefat",
     gender: "Female",
     attendance: true
    },
    {
     id: 2,
     name: "Dolapo",
     gender: "Male",
     attendance: true
    },
    {
     id: 3,
     name: "Abdullah",
     gender: "Male",
     attendance: false
    },
    {
     id: 4,
     name: "Muiz",
     gender: "Male",
     attendance: true
    },
    {
     id: 5,
     name: "Kabeer",
     gender: "Male",
     attendance: false
    }
 ]);

 const handleAttendance = (id) => {
  const cohortList = cohorts.map((cohort) =>cohort.id === id ? {...cohort, attendance: !cohort.attendance} : cohort)

  setcohorts(cohortList)
  localStorage.setItem("cohortList", JSON.stringify(cohortList));
}

const handleDelete = (id) => {
  const cohortList = cohorts.filter((cohort) => cohort.id !== id);
  setcohorts(cohortList)
  localStorage.setItem("cohortList", JSON.stringify(cohortList))
}
  return (
    <div>
      <Header/>
      <Content cohorts={cohorts} setcohorts={setcohorts} handleAttendance={handleAttendance} handleDelete={handleDelete}/>
      <Footer/>
    </div>
  )
}

export default App
