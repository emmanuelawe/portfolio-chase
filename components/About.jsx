import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='pt-40 w-full md:h-screen p-2 flex items-center py-16'>
    <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
    <div className='col-span-2'>
    <p className='uppercase text-xl tracking-widest text-center font-medium text-[#0e61c9]'>About</p>
    <h2 className='py-4'>Who I Am</h2>
    <p className='py-2 text-[#434346]'>I&apos;m not your average developer.</p>
    <p className='py-2 text-[#434346]'>
    Growing up, I&apos;ve always had a passion to learn how anything related to technology works - whether 
    hardware or software. Initially, it began with my love for creating designs and user interfaces. Then my curious
    mind wanted to bring those designs to live, so I started off by learning HTML & CSS.
    </p>
    <p className='py-2 text-[#434346]'>
    Fascinated with how intricate programming can be, I was quickly drawn
            to learn more. I moved on to learn javascript and then discovered the amazing things that 
            could be done using React JS. Now I spend my time building projects with React JS, Next JS, Tailwind CSS, Firebase, and a bunch of other technologies.
    </p>
    <Link href='/#projects'>
    <p className='link py-2 tracking-wide cursor-pointer text-[#434346]'>Check out some of my latest projects</p>
    </Link>
    </div>

    <div className='w-full h-auto m-auto flex items-center 
    justify-center p-4 hover:scale-105 ease-in duration-500 pt-6'>
        <Image  src='https://github.com/emmanuelawe/portfolio-chase/blob/main/public/assets/Chasepfp.png?raw=true' alt='' 
        width='350' height="350" objectFit='cover' />
    </div>

    </div>
    </div>
  )
}

export default About