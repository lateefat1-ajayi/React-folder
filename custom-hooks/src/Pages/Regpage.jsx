import React from 'react'
import useForm from '../Hooks/useForm'
import { toast } from 'react-toastify';


const Regpage = () => {
    const {values,errors, handleChange, isValid} = useForm({
        name: "",
        email: ""
    },
    {
        name: (v)=> v.length < 3? "name must be at least three characters!" : null,
        email: (v) => /\S+@\S+\.\S+/.test(v) ? null: "invalid email!"
    }
);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isValid()){
            toast.success(JSON.stringify(values))
        }
    }
    
  return (
    <form className='pt-8 flex flex-col gap-4 items-start pl-4' onSubmit={handleSubmit} >
       
      <input className='p-2 outline-none border border-gray-500 text-center rounded-md' type="text" name='name' value={values.name} onChange={handleChange} placeholder='Name...'/>

      {errors.name && <p className='text-rose-500'>{errors.name}</p> }

      <input className='p-2 outline-none border border-gray-500 text-center rounded-md' name='email' value={values.email} onChange={handleChange} placeholder='Email...' />

      {errors.email && <p>{errors.email}</p> }

        <button className='bg-cyan-600 rounded-md p-2 border' type="submit">Submit</button>
    </form>
  )
}

export default Regpage
