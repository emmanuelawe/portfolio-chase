import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='pt-36 w-full lg:h-screen p-2 '>
    <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
    <p className='text-xl tracking-widest uppercase font-medium text-[#0e61c9]'>Skills</p>
    <h2 className='py-4'>What I Can Do</h2>

    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

    <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    <div className='m-auto'>
    <Image src='/../public/assets/skills/html.png' alt=''
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
    <Image src='/../public/assets/skills/css.png' alt=''
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
    <Image src='/../public/assets/skills/javascript.png' alt=''
    width='64' height='64px' />
    </div>
    <div className='flex flex-col items-center justify-center'>
    <h3>JavaScript</h3>
    </div>
    </div>
    </div>


    <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    <div className='m-auto'>
    <Image src='/../public/assets/skills/react.png' alt=''
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
    <Image src='/../public/assets/skills/nextjs.png' alt=''
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
    <Image src='/../public/assets/skills/node.png' alt=''
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
    <Image src='/../public/assets/skills/tailwind.png' alt=''
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
    <Image src='/../public/assets/skills/chakra.png' alt=''
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
    <Image src='/../public/assets/skills/github1.png' alt=''
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
    <Image src='/../public/assets/skills/firebase.png' alt=''
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
    <Image src='/../public/assets/skills/mongo.png' alt=''
    width='64' height='64px' />
    </div>
    <div className='flex flex-col items-center justify-center'>
    <h3>Mongo DB</h3>
    </div>
    </div>
    </div>

    </div>

    </div>
    </div>
  )
}

export default Skills