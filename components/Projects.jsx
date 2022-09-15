import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Netflix from '../public/assets/projects/NETFLIX.png'
import Netflix1 from '../public/assets/projects/NETFLIX1.png'
import Netflix2 from '../public/assets/projects/NETFLIX2.png'
import Netflix3 from '../public/assets/projects/NETFLIX3.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className=' pt-10 w-full'>
    <div className='max-w-[1240px] mx-auto px-2 py-16'>
    <p className='uppercase tracking-widest font-medium text-[#0e61c9]'>Projects</p>
    <h2 className='py-4'>What I've Built</h2>

    <div className='grid md:grid-cols-2 gap-8'>

   <ProjectItem title='Netflix Clone' 
   bgImage={Netflix} projectUrl='/netflix'/>

    <ProjectItem title='Netflix Clone' 
   bgImage={Netflix1} projectUrl='/netflix1'/>

    <ProjectItem title='Netflix Clone' 
   bgImage={Netflix2} projectUrl='/netflix2'/>

    <ProjectItem title='Netflix Clone' 
   bgImage={Netflix3} projectUrl='/netflix3'/>

    </div>

    </div>
    </div>
  )
}

export default Projects