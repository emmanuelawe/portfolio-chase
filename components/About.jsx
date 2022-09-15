import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='pt-40 w-full md:h-screen p-2 flex items-center py-16'>
    <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
    <div className='col-span-2'>
    <p className='uppercase text-xl tracking-widest font-medium text-[#0e61c9]'>About</p>
    <h2 className='py-4'>Who I Am</h2>
    <p className='py-2 text-[#434346]'>I&apos;m not your average developer</p>
    <p className='py-2 text-[#434346]'>
    I have spent the last 12 years in the fire service working as a
            professional firefighter/paramedic. I have always had a knack for
            technology and working with computers. In 2019 I started working
            with HTML and CSS to make some minor edits on a small business
            website that I was operating. What I thought was just a few small
            edits turned into a love for programming.
    </p>
    <p className='py-2 text-[#434346]'>
    Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I then started
            freelancing for e-commerce companies on the Shopify platform. I am
            now spending my time building projects with React JS, Firebase, and
            learning new technologies.
    </p>
    <p className='py-2 text-[#434346] underline cursor-pointer'>Check out some of my latest projects</p>
    </div>

    <div className='w-full h-auto m-auto flex items-center 
    justify-center p-4 hover:scale-105 ease-in duration-500 rounded-full shadow-lg shadow-gray-400'>
        <Image  src='https://github.com/emmanuelawe/portfolio-chase/blob/main/public/assets/Chasepfp.png?raw=true' alt='' 
        width='350' height="350" objectFit='cover' />
    </div>

    </div>
    </div>
  )
}

export default About