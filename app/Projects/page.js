import Navbar from '@/components/navbar'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import { PROJECTS } from '@/constants/constants'
import { Github } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export default function page() {
  return (
    <div className='h-full'>
        <Navbar/>
        <div className='px-20 py-10'>
          <h1 className='text-4xl font-bold py-2'>Projects</h1>
          <p>These projects demostate my ability to think outside of the box and use these AI models in  cool and new intersting ways</p>

          <div className='flex flex-col gap-5 p-4'>
              {PROJECTS.map((proj,index)=>(
                <Card key={index} className='proj-card'>
                    <CardHeader className=' flex py-6 font-medium'>
                      <span className='flex'>
                        <p>{proj.name}</p>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a href={proj.link} target='_blank' rel='noreferrer' className='ml-auto mr-6 p-2 rounded-full bg-blue-100 hover:bg-slate-200 transition-colors ease-in-out'>
                              <Github className='text-zinc-800 hover:text-blue-600 transition-colors ease-in-out'/>
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View on GitHub</p>
                          </TooltipContent>
                        </Tooltip>
                        
                      </span>
                    </CardHeader>
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
