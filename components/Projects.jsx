import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ChatGPT from '../public/chatgpt.jpg'
import Instagram from '../public/instagram.jpg'
import Netflix from '../public/Netflix.png'
import Apple from '../public/Apple.png'
import Spotify from '../public/Spotify.png'
import Blog from '../public/Blog.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className=' pt-10 w-full'>
    <div className='max-w-[1240px] mx-auto px-2 py-16'>
    <p className='uppercase tracking-widest text-center text-xl font-medium text-[#0e61c9]'>Projects</p>
    <h2 className='py-4'>What I&apos;ve Built</h2>

    <div className='grid md:grid-cols-2 gap-8'>

    <ProjectItem title='ChatGPT Redesign' 
   bgImage={ChatGPT} projectUrl='/chatgpt'/>

   <ProjectItem title='Netflix Redesign' 
   bgImage={Netflix} projectUrl='/netflix'/>

    <ProjectItem title='Apple Redesign' 
   bgImage={Apple} projectUrl='/apple'/>

    <ProjectItem title='Spotify Redesign' 
   bgImage={Spotify} projectUrl='/spotify'/>

    <ProjectItem title='Blog' 
   bgImage={Blog} projectUrl='/blog'/>

<ProjectItem title='Instagram Redesign' 
   bgImage={Instagram} projectUrl='/instagram'/>

    </div>

    </div>
    </div>
  )
}

export default Projects