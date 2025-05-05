import React from 'react'

const Confirm = ({isOpen, onConfirm, onCancel}) => {

    if(!isOpen) return;
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/40 '>
      <div className='bg-white p-8 rounded shadow-md text-center'>
        <h2 className='text-xl font-bold mb-4'>Confirm Delete</h2>
        <p className='mb-6'>Are you sure you want to delete?</p>
        <div className='flex justify-center space-x-4'>
                <button className='px-4 py-2 bg-red-500 border text-white rounded' onClick={onConfirm}>Delete</button>
                <button className=' bg-white border-2 border-green-400 px-4 py-2 rounded' onClick={onCancel}>cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Confirm
