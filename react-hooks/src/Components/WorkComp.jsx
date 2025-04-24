import React from 'react'

const WorkComp = ({img, title, description }) => {
  return (
    <div className='p-4 flex flex-col gap-3 rounded-lg hover:bg-white/10'>
     <img src={img}
     className='h-10 w-10 bg-primaryBlue p-1.5 rounded-full' />
     <h3 className='font-bold text-xl'>{title}</h3>
     <p className=''>{description}</p>
    </div>
  )
}

export default WorkComp