import Image from 'next/image'
import React from 'react'
import Apple from '../public/Apple.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import {IoArrowBackCircleSharp} from 'react-icons/io5'
import {MdOutlineRadioButtonChecked} from 'react-icons/md'
import Link from 'next/link'

const netflix1 = () => {
  return (
    <div className='w-full'>
    <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
    <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
    <Image className='absolute z-1' layout='fill' objectFit='cover' src={Apple} alt='' />
    <div className='absolute  max-w-[1240px]  translate-x-10 translate-y-[130%]
    z-10 p-2 text-white'>
        <h2 className='py-2'>Apple UI</h2>
        <h3>Next JS / TypeScript / Stripe</h3>
    </div>
    </div>

    <div className='max-w-[1240px] mx-10 p-2 grid md:grid-cols-5 gap-8 pt-8'>
    <div className='col-span-4'>
          <h2>Project Overview</h2>
          <p className='pt-6'>
            This build was modelled after Apple&apos;s website. It&apos;s an ecommerce website 
            that uses Google authentication for signin and Stripe payment gateway for processing 
            payments. 
          </p>
          <p className='pt-2'>
            It was built using Next JS, Typescript and Redux to make the overall experience while 
            using the web app seamless.
          </p>
          <Link href='https://apple-chase.vercel.app'>
          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </Link>
          <Link href='https://github.com/emmanuelawe/apple-chase'>
          <button className='px-8 py-2 mt-4'>Code</button>
          </Link>
    </div>

    <div className='col-span-4 md:col-span-1 shadow-lg shadow-gray-400 rounded-xl p-4'>
    <div className='p-2'>
    <p className='text-center font-bold pb-2'>Technologies</p>
    <div className='grid grid-cols-2 md:grid-cols-1'>
        <p className='text-[#434346] py-2 flex items-center'><MdOutlineRadioButtonChecked/> Next JS</p>
        <p className='text-[#434346] py-2 flex items-center'><MdOutlineRadioButtonChecked/> TypeScript</p>
        <p className='text-[#434346] py-2 flex items-center'><MdOutlineRadioButtonChecked/> Tailwind CSS</p>
        <p className='text-[#434346] py-2 flex items-center'><MdOutlineRadioButtonChecked/> Sanity</p>
        <p className='text-[#434346] py-2 flex items-center'><MdOutlineRadioButtonChecked/> Redux</p>
        <p className='text-[#434346] py-2 flex items-center'><MdOutlineRadioButtonChecked/> Stripe</p>
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

export default netflix1