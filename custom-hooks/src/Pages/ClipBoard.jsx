import React from 'react'
import useClipboard from '../Hooks/useClipboard'

const ClipBoard = () => {


    const {copied, copy} = useClipboard()
  return (
    <button className='bg-blue-500 text-white p-2 rounded-md border-2 hover:bg-blue-600' onClick={() => copy("Hello world")}>
        {copied ? "copied to clipboard" : "copy text"}
    </button>
  )
}

export default ClipBoard