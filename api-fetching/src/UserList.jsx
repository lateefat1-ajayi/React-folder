import React from 'react'

const UserList = ({users, deleteUser,setEditingUser}) => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-4 '>
      <h2 className='font-bold text-3xl'>👯Users</h2>
      {users.map((user) => (
        <div key={user.id} className='border p-3 flex flex-col items-center justify-center gap-2 rounded-3xl hover:-translate-y-1.5 duration-500 shadow-xl'>
            <strong>{user.name}</strong>- {user.email}

            <button  className='bg-green-800 p-2 rounded-md text-white w-full ' onClick={() => setEditingUser(user)}>Edit</button>
            <button  className='bg-red-600 p-2 rounded-md text-white w-full' onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default UserList
