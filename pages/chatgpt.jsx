import Image from 'next/image'
import React from 'react'
import ChatGPT from '../public/chatgpt.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'
import {IoArrowBackCircleSharp} from 'react-icons/io5'
import {MdOutlineRadioButtonChecked} from 'react-icons/md'
import Link from 'next/link'

const chatgpt = () => {
  return (
    <div className='w-full'>
    <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
    <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
    <Image className='absolute z-1' layout='fill' objectFit='cover' src={ChatGPT} alt='' />
    <div className='absolute  max-w-[1240px]  translate-x-10 translate-y-[130%]
    z-10 p-2 text-white'>
        <h2 className='py-2'>ChatGPT</h2>
        <h3>Next JS 13 / TypeScript / Firebase</h3>
    </div>
    </div>

    <div className='max-w-[1240px] mx-10 p-2 grid md:grid-cols-5 gap-8 pt-8'>
    <div className='col-span-4'>
          <h2>Project Overview</h2>
          <p className='pt-6'>
            This build was modelled after OpenAI&apos;s ChatGPT. It was built using Next JS 13 and uses Google 
            authentication to make sign in easy. The OpenAI Api used is connected to Firebase which stores the chats as well as ChatGPT responses.
          </p>
          <p className='pt-2'>
            It was built using Next JS 13, Typescript and Firebase to make the overall experience while 
            using the web app seamless.
          </p>

        
          <Link href='https://chatgpt-chase.vercel.app'>
          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </Link>
          <Link href='https://github.com/emmanuelawe/chatgpt-chase'>
          <button className='px-8 py-2 mt-4'>Code</button>
          </Link>
    </div>

    <div className='col-span-4 md:col-span-1 shadow-lg shadow-gray-400 rounded-xl p-4'>
    <div className='p-2'>
    <p className='text-center font-bold pb-2'>Technologies</p>
    <div className='grid grid-cols-2 md:grid-cols-1'>
        <p className='text-[#434346] py-2 flex items-center'><MdOutlineRadioButtonChecked/> Next JS 13</p>
        <p className='text-[#434346] py-2 flex items-center'><MdOutlineRadioButtonChecked/> TypeScript</p>
        <p className='text-[#434346] py-2 flex items-center'><MdOutlineRadioButtonChecked/> Tailwind CSS</p>
        <p className='text-[#434346] py-2 flex items-center'><MdOutlineRadioButtonChecked/> Firebase</p>
        <p className='text-[#434346] py-2 flex items-center'><MdOutlineRadioButtonChecked/> OpenAI Api</p>
    </div>
    </div>
    </div>
    <Link href='/#projects'>
    <p className='cursor-pointer w-[100px] py-2 flex bg-[#434346] text-white rounded-xl items-center justify-center px-6'>
    <IoArrowBackCircleSharp className='mr-[0.1rem]'/>Back</p>
    </Link>
    </div>
    
    </div>
  )
}

export default chatgpt