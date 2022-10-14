import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import { useForm } from 'react-hook-form';

const Contact = () => {

const { register, handleSubmit} = useForm();


    const onSubmit = (formData) => {
        window.location.href = `mailto:aweemmanuelayobami@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    }

  return (
    <div id='contact' className='pt-10 w-full lg:h-screen'>
        <div className='max-w-[1152px] 2xl:max-w-[1240px] m-auto px-2 py-16 w-ful'>
    <p className='text-2xl uppercase tracking-[15px] text-center font-medium pb-10 text-[#0e61c9]'>Contact</p>

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
            <p className='uppercase pt-8 text-center text-[#0e61c9] tracking-[5px] font-medium'>Connect with Me</p>
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

    <form onSubmit={handleSubmit(onSubmit)}>
        {/* <div className='grid md:grid-cols-2 gap-4 w-full py-2'>

        <div className='flex flex-col'>
        <label className='uppercase text-sm py-2 text-[#434346]'>Name</label>
        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' />
        </div>

        <div className='flex flex-col'>
        <label className='uppercase text-sm py-2 text-[#434346]'>Phone Number</label>
        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' />
        </div>
        </div> */}

        <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2 text-[#434346]'>Name</label>
        <input {...register('name')} placeholder='Name' className='border-2 rounded-lg p-3 flex border-gray-300' type='text' />
        </div>

        <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2 text-[#434346]'>Email</label>
        <input  {...register('email')} placeholder='Email' className='border-2 rounded-lg p-3 flex border-gray-300' type='email' />
        </div>

        <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2 text-[#434346]'>Subject</label>
        <input  {...register('subject')} placeholder='Subject' className='border-2 rounded-lg p-3 flex border-gray-300' type='text' />
        </div>

        <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2 text-[#434346]'>Message</label>
        <textarea {...register('message')} placeholder='Message' className='border-2 rounded-lg p-3 border-gray-300' rows='5' type='text'></textarea>
        </div>

        <button  className='w-full p-4 text-gray-100 mt-4 font-medium' onSubmit={handleSubmit(onSubmit)}>
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