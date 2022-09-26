import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='pt-10 w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-ful'>
    <p className='text-xl uppercase tracking-widest text-center font-medium text-[#0e61c9]'>Contact</p>
    <h2 className='py-4'>Get In Touch</h2>

    <div className='grid lg:grid-cols-5 gap-8'>

    {/* Left */}
    <div className='col-span-3 mx-auto lg:col-span-2 w-full h-full shadow-lg 
    shadow-gray-400 rounded-xl p-4'>
    <div>
        <Image className='rounded-xl hover:scale-105 ease-in duration-300' 
        src='https://github.com/emmanuelawe/portfolio-chase/blob/main/public/assets/contact.jpg?raw=true' alt='' 
        width='450' height='450' objectFit='cover' />
    </div>
    <div >
        <h2 className='py-2'>Emmanuel Awe</h2>
        <p>Front-End Developer</p>
        <p className='py-4'>I&apos;m available for freelance or full-time positions. Contact me and let&apos;s talk.</p>
    </div>

        <div>
            <p className='uppercase pt-8 text-center text-[#0e61c9] font-medium'>Connect with Me</p>
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

    {/* Right */}

    <div className='col-span-3 w-full h-auto shadow-lg shadow-gray-400 rounded-xl lg:p-4'>
    <div className='p-4'>

    <form>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>

        <div className='flex flex-col'>
        <label className='uppercase text-sm py-2 text-[#0e61c9]'>Name</label>
        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' />
        </div>

        <div className='flex flex-col'>
        <label className='uppercase text-sm py-2 text-[#0e61c9]'>Phone Number</label>
        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' />
        </div>
        </div>

        <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2 text-[#0e61c9]'>Email</label>
        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' />
        </div>

        <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2 text-[#0e61c9]'>Subject</label>
        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' />
        </div>

        <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2 text-[#0e61c9]'>Message</label>
        <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' type='text'></textarea>
        </div>

        <button className='w-full p-4 text-gray-100 mt-4 font-medium'>
            Send Message
        </button>

    </form>
    </div>
    </div>
    </div>

        <div className='flex justify-center py-12'>
            <Link href=''>
                <div className='rounded-full shadow-sm shadow-gray-400 p-3
            cursor-pointer hover:scale-110 ease-in duration-300'>
                    <HiOutlineChevronDoubleUp className='text-[#0e61c9]' size={30}/>
                </div>
            </Link>
        </div>
        </div>
    
    </div>
  )
}

export default Contact