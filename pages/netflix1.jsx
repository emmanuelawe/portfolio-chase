import Image from 'next/image'
import React from 'react'
import Netflix from '../public/assets/projects/NETFLIX.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import {IoArrowBackCircleSharp} from 'react-icons/io5'
import Link from 'next/link'

const netflix1 = () => {
  return (
    <div className='w-full'>
    <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
    <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
    <Image className='absolute z-1' layout='fill' objectFit='cover' src={Netflix} alt='' />
    <div className='absolute top-[90%] max-w-[1240px] left-[30%] translate-x-[-50%] translate-y-[-100%] 
    z-10 p-2 text-white md:translate-x-[-90%] md:translate-y-[-90%] md:left-[22%] md:top-[80%]'>
        <h2 className='py-2'>Netflix Clone</h2>
        <h3>Next JS / TypeScript / Firebase</h3>
    </div>
    </div>

    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
    <div className='col-span-4'>
    <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using React JS and is hosted on Firebase. Users
            are able to search properties based on an Address, City, or ZIP code
            to retrieve a list of active properties currently for sale. You will
            be able to view property information as well as the specific
            location of the property integrated with the Google Maps API. User
            authentication is available so you can signup and signin to your
            account with an email address in order to save your favorite
            properties. This is made possible with Zillow API.
          </p>
          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          <button className='px-8 py-2 mt-4'>Code</button>
    </div>

    <div className='col-span-4 md:col-span-1 shadow-lg shadow-gray-400 rounded-xl p-4'>
    <div className='p-2'>
    <p className='text-center font-bold pb-2'>Technologies</p>
    <div className='grid grid-cols-3 md:grid-cols-1'>
        <p className='text-[#434346] py-2 flex items-center'><RiRadioButtonFill/> Next JS</p>
        <p className='text-[#434346] py-2 flex items-center'><RiRadioButtonFill/> TypeScript</p>
        <p className='text-[#434346] py-2 flex items-center'><RiRadioButtonFill/> Tailwind CSS</p>
        <p className='text-[#434346] py-2 flex items-center'><RiRadioButtonFill/> Firebase</p>
    </div>
    </div>
    </div>
    <Link href='/#projects'>
    <p className='cursor-pointer w-[100px] py-2 flex bg-[#434346] text-white rounded-xl items-center justify-center px-6'>
    <IoArrowBackCircleSharp className='mr-1'/>Back</p>
    </Link>
    </div>
    
    </div>
  )
}

export default netflix1