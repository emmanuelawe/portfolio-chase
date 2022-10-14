import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Netflix from '../public/Netflix.png'
import Apple from '../public/Apple.png'
import Spotify from '../public/Spotify.png'
import Blog from '../public/Blog.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className=' pt-10 w-full'>
    <div className='max-w-[1152px] 2xl:max-w-[1240px] mx-auto px-2 py-16'>
    <p className='uppercase tracking-[15px] text-center text-2xl font-medium pb-10 text-[#0e61c9]'>Projects</p>

    <div className='grid md:grid-cols-2 gap-8'>

   <ProjectItem title='Netflix UI' 
   bgImage={Netflix} projectUrl='/netflix'/>

    <ProjectItem title='Apple UI' 
   bgImage={Apple} projectUrl='/apple'/>

    <ProjectItem title='Spotify UI' 
   bgImage={Spotify} projectUrl='/spotify'/>

    <ProjectItem title='Blog' 
   bgImage={Blog} projectUrl='/blog'/>

    </div>

    </div>
    </div>
  )
}

export default Projects