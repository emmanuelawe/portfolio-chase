import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {HiMenu } from 'react-icons/hi'
import {IoClose } from 'react-icons/io5'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { useRouter } from 'next/router'

const Navbar = () => {
  /*   const [isScrolled, setIsScrolled] = useState(false) */
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState('#ecf0f3')
    const [linkColor, setLinkColor] = useState('#434346')
    const router = useRouter()


    useEffect(() => {
        if (router.asPath === '/netflix' || router.asPath === '/netflix1' || router.asPath === '/netflix2' || router.asPath === '/netflix3') {
                setNavBg('transparent')
                setLinkColor('#ecf0f3')
            } else {
                setNavBg('#ecf0f3')
                setLinkColor('#434346')
    
        }
    },[router])



    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else setShadow(false)
        }

            window.addEventListener('scroll', handleShadow)            
    }, [])


    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div 
    style={{backgroundColor: `${navBg}`}}
    className={shadow ? 'fixed w-full h-20 shadow-sm z-[100]' : 'fixed w-full h-20 z-[100]'}>
    <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
    
    <div className='pl-6'>
    <Link href='/#home'>
    <Image src='https://github.com/emmanuelawe/portfolio-chase/blob/main/public/assets/CHASELogo.png?raw=true' 
    alt='Logo' width='100' height='100' objectFit='cover'
     />
     </Link>
    </div>

    <div>
        <ul style={{color: `${linkColor}`}} className='hidden md:flex text-[#434346]'>
            <Link href='/#home'>
                <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/#about'>
                <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/#skills'>
                <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href='/#projects'>
                <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
            </Link>
            <Link href='/#contact'>
                <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
            </Link>
        </ul>

        <div  onClick={handleNav} className='md:hidden'>
        <HiMenu style={{color: `${linkColor}`}} size={25} className='text-[#434346]'/>
    </div>
    </div>
    </div>

    <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/10' : ''}>
    <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] px-8 ease-in duration-500' 
    : 'fixed left-[-100%] top-0 ease-in duration-500'}>
    <div className='flex w-full items-center justify-between'>
    <Link href='/#home'>
        <Image src='https://github.com/emmanuelawe/portfolio-chase/blob/main/public/assets/CHASELogo.png?raw=true' 
        alt='Logo' width='85' height='85' objectFit='cover' />
        </Link>
        <div className=' cursor-pointer'>
        <IoClose onClick={handleNav} className='text-2xl text-[#434346]' /></div>
    
    </div>

    <div className='border-b border-gray-300 my-4'>
        <p className='w-[85%] md:w-[90%] pb-2 font-medium'>Let&apos;s build something legendary together!</p>
    </div>

    <div className='font-semibold flex flex-col space-y-2'>
    <ul className='uppercase text-[#434346]'>
            <Link href='/#home'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
            </Link>
            <Link href='/#about'>
                <li onClick={() => setNav(false)}className='py-4 text-sm'>About</li>
            </Link>
            <Link href='/#skills'>
                <li onClick={() => setNav(false)}className='py-4 text-sm'>Skills</li>
            </Link>
            <Link href='/#projects'>
                <li onClick={() => setNav(false)}className='py-4 text-sm'>Projects</li>
            </Link>
            <Link href='/#contact'>
                <li onClick={() => setNav(false)}className='py-4 text-sm'>Contact</li>
            </Link>
        </ul>
        
        <div className='pt-10 '>
            <p className='uppercase text-[#0e61c9]'>Let&apos;s Connect</p>
            <div className='items-center flex justify-between my-4 w-full sm:w-[80%]'>
            <div className='rounded-full shadow-sm shadow-gray-400 p-3
            cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaLinkedinIn />
            </div>
            <div className='rounded-full shadow-sm shadow-gray-400 p-3
            cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaGithub />
            </div>
            <div className='rounded-full shadow-sm shadow-gray-400 p-3
            cursor-pointer hover:scale-105 ease-in duration-300'>
                <FiMail/>
            </div>
            <div className='rounded-full shadow-sm shadow-gray-400 p-3
            cursor-pointer hover:scale-105 ease-in duration-300'>
                <BsFillPersonLinesFill />
            </div>
            </div>
        </div>
    </div>
    </div>
    

    </div>



    </div>
    
  )
}

export default Navbar