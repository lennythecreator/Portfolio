import Navbar from '@/components/navbar'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import { PROJECTS } from '@/constants/constants'
export default function page() {
  return (
    <div className='h-full'>
        <Navbar/>
        <div className='px-20 py-10'>
          <h1 className='text-4xl font-bold py-2'>Projects</h1>
          <p>These projects demostate my ability to think outside of the box and use these ML models in  cool and new intersting ways</p>

          <div className='flex flex-col gap-5 p-4'>
              {PROJECTS.map((proj,index)=>(
                <Card key={index} className='proj-card'>
                    <CardHeader className='py-6 font-medium'>{proj.name}</CardHeader>
                    <CardDescription className='flex gap-2 px-6 pb-6'>{proj.technologies.map((tech,index)=>(
                      <span key={index}>{tech}</span>
                    ))}</CardDescription>
                    <CardContent className='text-sm'>{proj.description}</CardContent>
                    <CardFooter className='text-slate-800 text-xs'>{proj.date}</CardFooter>
                </Card>
              ))}
          </div>
        </div>
    </div>
  )
}
