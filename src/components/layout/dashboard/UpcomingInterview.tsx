'use client'

import React from 'react'
import Link from 'next/link'
import Title from '@/components/layout/Title'
import InterviewCalendar from '@/components/layout/dashboard/InterviewCalendar'

interface InterviewSituationProps {
  href: string
}

export default function UpcomingInterview({ href }: InterviewSituationProps) {
  return (
    <div className='flex flex-col gap-8 px-4 w-full h-full bg-background shadow-[0_8px_30px_rgba(139,92,246,0.18)] p-2 rounded-3xl'>
      <Title title='upcoming Interview' />
      <div className="flex flex-col gap-8 px-4">
        <div className='flex flex-col gap-2'>
          <InterviewCalendar />
          <div className="interviewProfil">
            interview profile
          </div>
        </div>
        <Link href={href}>
          view scaduals
        </Link>


      </div>
    </div>

  )
}
