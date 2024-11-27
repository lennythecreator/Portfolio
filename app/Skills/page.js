import Navbar from '@/components/navbar'
import React from 'react'
import { TECHNICAL_SKILLS } from '@/constants/constants'
import { Badge } from '@/components/ui/badge'
export default function page() {
  return (
    <div className='h-full'>
        <Navbar/>
        <div className='flex flex-col gap-4 px-20'>
            <h1>My Skills</h1>
            <span className='flex gap-3'>
                {TECHNICAL_SKILLS.languages.map((lang,index)=>(
                    <Badge key={index}>{lang}</Badge>
                ))}
            </span>
            
            <div>
                <h2 className='text-xl font-medium my-2'>Web Dev</h2>
                <span className='flex gap-3 py-2'>
                    {TECHNICAL_SKILLS.webDevelopment.map((web,index)=>(
                        <Badge key={index}>{web}</Badge>
                    ))}
                </span>
            </div>

            <div>
                <h2 className='text-xl font-medium my-2'>Frameworks</h2>
                <span className='flex gap-3 py-2'>
                    {TECHNICAL_SKILLS.frameworks.map((frame,index)=>(
                        <Badge key={index}>{frame}</Badge>
                    ))}
                </span>
            </div>

            <div>
                <h2 className='text-xl'>Dev Tools</h2>
                <span className='flex gap-3'>
                    {TECHNICAL_SKILLS.tools.map((tool,index)=>(
                        <Badge key={index}>{tool}</Badge>
                    ))}
                </span>
            </div>
            
        </div>
    </div>
  )
}
