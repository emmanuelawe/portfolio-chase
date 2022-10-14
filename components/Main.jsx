import React from 'react'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import Link from 'next/link'
import {Cursor, useTypewriter } from 'react-simple-typewriter'

const Main = () => {
    const [text, count] = useTypewriter({
        words: [
            "Hi, I'm Emmanuel",
            "A Front-End Web Developer",
            "<React JS/>"
        ],
        loop: true,
        delaySpeed: 2000
    })

  return (
    <div id='home' className='w-full h-screen text-center'>
    <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex
    justify-center items-center'>
        <div>
        <p className='uppercase pt-24 tracking-widest font-medium text-sm text-[#434346]'>
        Let&apos;s build something legendary together</p>
        {/* <h1 className='py-4 text-[#434346]'>
        Hi, I&apos;m <span className='text-[#0e61c9]'>Emmanuel</span></h1>
        <h1 className='py-2 text-[#434346]'>
            A Front-End Web Developer
        </h1> */}

        <p className='py-4 mx-auto text-5xl font-bold text-[#0e61c9]'>
        <span>{text}</span>
        <Cursor cursorColor='#434346'/>
        </p>

        <p className='py-4 text-[#434346] max-w-[90%] md:max-w-[65%]  mx-auto font-medium'>I specialize in building & designing
        exceptional user interfaces & digital experiences. Currently, I&apos;m focused on building responsive
        front-end web applications while learning back-end technologies.</p>
        
            <div className='items-center flex justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-sm shadow-gray-400 p-3
            cursor-pointer hover:scale-110 ease-in duration-300'>
            <Link href='https://github.com/emmanuelawe'>
                <FaGithub />
            </Link>
            </div>
            <div className='rounded-full shadow-sm shadow-gray-400 p-3
            cursor-pointer hover:scale-110 ease-in duration-300'>
            <Link href='https://linkedin.com/in/emmanuel-awe'>
                <FaLinkedinIn />
            </Link>
            </div>
            <div className='rounded-full shadow-sm shadow-gray-400 p-3
            cursor-pointer hover:scale-110 ease-in duration-300'>
            <Link href='mailto:aweemmanuelayobami@gmail.com'>
                <FiMail/>
            </Link>
            </div>
            </div>

            
        </div>
    </div>
    </div>
  )
}

export default Main