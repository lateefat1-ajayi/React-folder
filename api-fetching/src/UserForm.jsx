import React, { useEffect, useState } from 'react'

const UserForm = ({addUser ,updateUser, editingUser, setEditinguser}) => {

    const [user, setUser] = useState({name: "", email: ""});

    useEffect(() => {
        if(editingUser){
            setUser(editingUser)
        }
    }, [editingUser])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingUser){
            updateUser(user)
        }else{
            addUser(user)
        }
        setEditinguser({name: "", email: ""})
    }
  return (
    <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
       <input className='border outline-none p-2' type="text" placeholder='Name' value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} />
       <input className='border outline-none p-2' type="email" placeholder='Email' value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
       <button  className='bg-green-800 p-2 rounded-md text-white ' type='submit'>  {editingUser? "Update": "Add"} User</button>
       {editingUser && <button className='bg-orange-800 p-2 rounded-md text-white ' onClick={() => setEditinguser(null)}>Cancel </button> }
    </form>
  ) 
}

export default UserForm
