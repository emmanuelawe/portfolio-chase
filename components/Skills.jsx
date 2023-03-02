import Image from 'next/image'
import React from 'react'
import Figma from '../public/assets/skills/figma.png'

const Skills = () => {
  return (
    <div id='skills' className='pt-36 w-full lg:h-screen p-2 '>
    <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
    <p className='text-xl tracking-widest uppercase text-center font-medium text-[#0e61c9]'>Skills</p>
    <h2 className='py-4'>What I Can Do</h2>

    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8'>

    <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    <div className='m-auto'>
    <Image src='https://github.com/emmanuelawe/portfolio-chase/blob/main/public/assets/skills/html.png?raw=true' alt=''
    width='64' height='64px' />
    </div>
    <div className='flex flex-col items-center justify-center'>
    <h3>HTML</h3>
    </div>
    </div>
    </div>

    <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    <div className='m-auto'>
    <Image src='https://github.com/emmanuelawe/portfolio-chase/blob/main/public/assets/skills/css.png?raw=true' alt=''
    width='64' height='64px' />
    </div>
    <div className='flex flex-col items-center justify-center'>
    <h3>CSS</h3>
    </div>
    </div>
    </div>

    <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    <div className='m-auto'>
    <Image src='https://github.com/emmanuelawe/portfolio-chase/blob/main/public/assets/skills/javascript.png?raw=true' alt=''
    width='64' height='64px' />
    </div>
    <div className='flex flex-col text-md items-center justify-center'>
    <h3>JavaScript</h3>
    </div>
    </div>
    </div>

    <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    <div className='m-auto'>
    <Image src='https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' alt=''
    width='64' height='64px' />
    </div>
    <div className='flex flex-col items-center justify-center'>
    <h3>TypeScript</h3>
    </div>
    </div>
    </div>


    <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    <div className='m-auto'>
    <Image src='https://github.com/emmanuelawe/portfolio-chase/blob/main/public/assets/skills/react.png?raw=true' alt=''
    width='64' height='64px' />
    </div>
    <div className='flex flex-col items-center justify-center'>
    <h3>React JS</h3>
    </div>
    </div>
    </div>

    <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    <div className='m-auto'>
    <Image src='https://github.com/emmanuelawe/portfolio-chase/blob/main/public/assets/skills/nextjs.png?raw=true' alt=''
    width='64' height='64px' />
    </div>
    <div className='flex flex-col items-center justify-center'>
    <h3>Next JS</h3>
    </div>
    </div>
    </div>

    <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    <div className='m-auto'>
    <Image src='https://github.com/emmanuelawe/portfolio-chase/blob/main/public/assets/skills/node.png?raw=true' alt=''
    width='64' height='64px' />
    </div>
    <div className='flex flex-col items-center justify-center'>
    <h3>Node JS</h3>
    </div>
    </div>
    </div>

    <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    <div className='m-auto'>
    <Image src='https://github.com/emmanuelawe/portfolio-chase/blob/main/public/assets/skills/tailwind.png?raw=true' alt=''
    width='64' height='64px' />
    </div>
    <div className='flex flex-col items-center justify-center'>
    <h3>Tailwind CSS</h3>
    </div>
    </div>
    </div>

    <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    <div className='m-auto'>
    <Image src='https://github.com/emmanuelawe/portfolio-chase/blob/main/public/assets/skills/chakra.png?raw=true' alt=''
    width='64' height='64px' />
    </div>
    <div className='flex flex-col items-center justify-center'>
    <h3>Chakra UI</h3>
    </div>
    </div>
    </div>
    
    <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    <div className='m-auto'>
    <Image src='https://github.com/emmanuelawe/portfolio-chase/blob/main/public/assets/skills/github1.png?raw=true' alt=''
    width='64' height='64px' />
    </div>
    <div className='flex flex-col items-center justify-center'>
    <h3>GitHub</h3>
    </div>
    </div>
    </div>

    <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    <div className='m-auto'>
    <Image src='/assets/skills/redux.png' alt=''
    width='64' height='64px' />
    </div>
    <div className='flex flex-col items-center justify-center'>
    <h3>Redux</h3>
    </div>
    </div>
    </div>

    <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    <div className='m-auto'>
    <Image src='https://github.com/emmanuelawe/portfolio-chase/blob/main/public/assets/skills/firebase.png?raw=true' alt=''
    width='64' height='64px' />
    </div>
    <div className='flex flex-col items-center justify-center'>
    <h3>Firebase</h3>
    </div>
    </div>
    </div>



    <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    <div className='m-auto'>
    <Image src='/assets/skills/sanity.png' alt=''
    width='64' height='64px' />
    </div>
    <div className='flex flex-col items-center justify-center'>
    <h3>Sanity</h3>
    </div>
    </div>
    </div>
    

    <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    <div className='m-auto'>
    <Image src='https://github.com/emmanuelawe/portfolio-chase/blob/main/public/assets/skills/mongo.png?raw=true' alt=''
    width='64' height='64px' />
    </div>
    <div className='flex flex-col items-center justify-center'>
    <h3>Mongo DB</h3>
    </div>
    </div>
    </div>


    <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    <div className='m-auto'>
    <Image src={Figma} alt=''
    width='64' height='64px' />
    </div>
    <div className='flex flex-col items-center justify-center'>
    <h3>Figma</h3>
    </div>
    </div>
    </div>


    


    

    </div>

    </div>
    </div>
  )
}

export default Skills