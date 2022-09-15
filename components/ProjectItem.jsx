import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, bgImage, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full
    shadow-lg shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#0e61c9] to-[#0289d8]'>
    <Image className='rounded-xl group-hover:opacity-20' src={bgImage} alt='' />
    <div className='hidden group-hover:block absolute top-[10%] left-[10%] translate-x-[45%] translate-y-[25%] md:translate-x-[70%] md:translate-y-[40%]'>
        <h3 className='text-2xl text-white tracking-widest text-center'>Netflix Clone</h3>
        <p className='pb-4 pt-2 text-white text-center'>Next JS</p>
        <Link href={projectUrl}>
        <p className='text-center py-2 md:py-3 uppercase rounded-lg bg-white text-[#434346] text-lg font-bold cursor-pointer'>
        More info</p>
        </Link>
    </div>
    </div>
  )
}

export default ProjectItem