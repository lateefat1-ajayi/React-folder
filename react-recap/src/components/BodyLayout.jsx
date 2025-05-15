import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
const BodyLayout = ({children}) => {
  return (
    <div className=''>
      <Header/>
      <div >
        <Outlet/>
      </div>
      <SideBar/>
    </div>
  )
}

export default BodyLayout
