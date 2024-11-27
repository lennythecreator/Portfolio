import Navbar from '@/components/navbar'
import React from 'react'
import { EXPERIENCE } from '@/constants/constants'
import { Dot } from 'lucide-react'
export default function page() {
  const backGround = "I'm a software engineer with a diverse background in different areas of application development. I currently studying Computer Science at Morgan State University with a focus on Machine Learning.\n My current work involves integrating ML models into applications for practical use.\n I currently work at the MINDS lab and CoNA lab developing ML solutions for social good."

  const funFact="A fun fact about me is that I play the guitar and love to draw in my free time."
  return (
    <div className='h-full'>
      <Navbar/>
      <div className='flex flex-col gap-3 p-8 px-20' >
        <header>
          <h1 className='text-3xl font-bold py-5'>Chukwulenyeudo (Lenny) Uwaeme</h1>
          <p><strong>Computer Science Senior</strong> at Morgan State University</p>
        </header>
        
        <p>{backGround}</p>
        <p>{funFact}</p>

        <div>
          <h2 className='text-2xl font-medium'>Experience</h2>
          {EXPERIENCE.map((exp,index)=>(
            <div key={index} className='py-4'>
              <h1 className='text-lg font-medium flex items-center'><Dot className='text-green-500' size={40}/>{exp.title}</h1>
              <p className='mb-3 text-base'>{exp.company}</p>
              <p className='my-2 text-[14px]'>{exp.responsibilities}</p>
              <p className='text-xs'>{exp.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
