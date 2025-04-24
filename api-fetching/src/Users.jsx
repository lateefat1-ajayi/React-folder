import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserForm from './UserForm'
import UserList from './UserList'

const API_URL = "https://jsonplaceholder.typicode.com/users"

const Users = () => {
    const [users, setUsers] = useState([])
    const [editingUsers, setEditingUsers] = useState(null);

    useEffect(() => {
        axios.get(API_URL).then((res) => setUsers(res.data))
    }, [])
    console.log(users)

    const addUser = (user) =>{
        axios.post(API_URL, user).then((res)=> {setUsers([res.data, ...users])})
    }

    const updateUser = (updatedUser) =>{
        axios.put(`${API_URL}/${updatedUser.id}`, updatedUser).then((res) => {
            setUsers(users.map ((user) => (user.id === updatedUser.id? res.data: user)))
            setEditingUsers(null)
        })
    }

    const deleteUser = (id) =>{
        axios.delete(`${API_URL}/${id}`).then(() => {
            setUsers(users.filter((user) =>   user.id !== id ))
        })
    }


  return (
    <div className='flex h- flex-col items-center justify-center gap-6 pt-9'>
      <h1  className="text-4xl font-bold text-center text-gray-800 mb-8">User Management App</h1>
      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        editingUser={editingUsers}
        setEditinguser={setEditingUsers}
      />

      <UserList
        users={users}
        deleteUser={deleteUser}
        setEditinguser={setEditingUsers}
      />
    </div>
  )
}

export default Users
