import React from 'react'
import Heading from '../Components/Heading'
import WorkComp from '../Components/WorkComp'
import { WorkComponentData } from '../../Data/constant'
import { PackageData } from '../../Data/package'
import Package from '../Components/Package'

const Home = () => {
    return (
        <div className='text-white flex flex-col p-3 md:p-6 gap-4 md:gap-6'>
            <header className='flex flex-col gap-4 md:gap-8'>
                <Heading >A turn-key approach to continous user discovery</Heading>
                <p className='mb-2'>You've got a lot to take on, so we take user research your plate</p>
            </header>

            <h2 className='text-2xl md:text-3xl font-semibold'>HOW WE WORK</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5'>
                {WorkComponentData.map((work, index) => (
                    <WorkComp {...work} key={index} />
                ))}
            </div>
            
            <Heading>Let's get moving.</Heading>
            <br />
            <br />
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5'>
                {PackageData.map((work, index) => (
                    <Package  
                        {...work} 
                        key={index} 
                        otherStyles={index === 0 ? "gradientColor" : "bg-[#2c2c30]"}
                        disc={index === 2 ? "list-none": "list-disc"} 
                    />
                ))}
            </div>


            <footer>
                <div className='flex items-center'>
                <img src="/Images/userhivelogo.svg" alt="" className='h-8 w-8 ' /> 
                <h3 className='font-bold text-2xl '>Userhive</h3>
                </div>
                <small>Copyright © 2023 Userhive. All rights reserved.</small>
            </footer>


        </div>
    )
}

export default Home