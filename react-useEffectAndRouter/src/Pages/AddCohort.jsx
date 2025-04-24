import React, { useState } from 'react'

const AddCohort = () => {
   
    const [form, setForm] = useState(false)
    const addBttn = () => setForm(true)

  return (
    <div className='bg-blue-50 h-screen gap-[20px] flex flex-col '>
      <h1 className='text-center font-extrabold text-3xl '>Add cohort page</h1>

      <button onClick={addBttn} className=' border-2 w-40 border-gray-500 rounded-md bg-green-400 text-white '>Add cohort</button>

      <form key={form}>

        <div className='flex flex-col gap-2 '>
        <label>Name: </label>
        <input className='border-2 w-[200px] border-black p-2 rounded-sm ' type="text" placeholder='Name..'/>

        <label>Age: </label>
        <input className='border-2 w-[200px] border-black p-2 rounded-sm' type="number" placeholder='Age..'/>

        <label>Height: </label>
        <input className='border-2 w-[200px] border-black p-2 rounded-sm ' type="number" placeholder='Height..'/>
        </div>
        
      </form>


      
    </div>
  )
}

export default AddCohort
