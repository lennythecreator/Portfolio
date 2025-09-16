import Navbar from '@/components/navbar'
import React from 'react'
import { TECHNICAL_SKILLS } from '@/constants/constants'
import { Badge } from '@/components/ui/badge'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-8">
          My Skills
        </h1>

        {/* Wrapper grid for skill categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Languages */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-700 mb-4">
              Languages
            </h2>
            <div className="flex flex-wrap gap-3">
              {TECHNICAL_SKILLS.languages.map((lang, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>

          {/* Web Dev */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-700 mb-4">
              Web Development
            </h2>
            <div className="flex flex-wrap gap-3">
              {TECHNICAL_SKILLS.webDevelopment.map((web, index) => (
                <Badge key={index} variant={"secondary"} className="text-sm">
                  {web}
                </Badge>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-700 mb-4">
              Frameworks & Libraries
            </h2>
            <div className="flex flex-wrap gap-3">
              {TECHNICAL_SKILLS.frameworks.map((frame, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {frame}
                </Badge>
              ))}
            </div>
          </div>

          {/* Dev Tools */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-700 mb-4">
              Developer Tools
            </h2>
            <div className="flex flex-wrap gap-3">
              {TECHNICAL_SKILLS.tools.map((tool, index) => (
                <Badge key={index} variant={"secondary"} className="text-sm">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
