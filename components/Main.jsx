import React from 'react'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
    <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex
    justify-center items-center'>
        <div>
        <p className='uppercase pt-40 tracking-widest font-medium text-sm text-[#434346]'>
        Let`&apos;`s build something legendary together</p>
        <h1 className='py-4 text-[#434346]'>
        Hi, I`&apos;`m <span className='text-[#0e61c9]'>Emmanuel</span></h1>
        <h1 className='py-2 text-[#434346]'>
            A Front-End Web Developer
        </h1>
        <p className='py-4 text-[#434346] max-w-[70%] m-auto font-medium'>I`&apos;`m a front-end web developer specializing in building (and occasionally designing)
        exceptional digital experiences. Currently, I`&apos;`m focused on building responsive
        front-end web applications while learning back-end technologies.</p>
        
            <div className='items-center flex justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-sm shadow-gray-400 p-3
            cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
            </div>
            <div className='rounded-full shadow-sm shadow-gray-400 p-3
            cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
            </div>
            <div className='rounded-full shadow-sm shadow-gray-400 p-3
            cursor-pointer hover:scale-110 ease-in duration-300'>
                <FiMail/>
            </div>
            <div className='rounded-full shadow-sm shadow-gray-400 p-3
            cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
            </div>
            </div>

            
        </div>
    </div>
    </div>
  )
}

export default Main