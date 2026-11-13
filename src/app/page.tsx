
'use client'

import Image from "next/image";
import { useState } from 'react'
import HeaderCalendar from '@/components/layout/dashboard/HeaderCalendar'
import ApplicationStatics from '@/components/layout/dashboard/ApplicationStatics'
import JobAppliedChart from '@/components/layout/dashboard/JobAppliedChart'
import UpcomingInterview from '@/components/layout/dashboard/UpcomingInterview'

import { useApplications } from "@/context/ApplicationsContext";


type Applications = {
  id: number;
  company: string;
  status: "Applied" | "Interview" | "Rejected";
};


export default function Home() {

  return (
    <main className="mt-8 mx-8">
      <div className="titleHeader flex items-center justify-between mb-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl text-text-primary">
            Dashboard
          </h1>
          <p className="capitalize text-xs text-text-secondary">
            take's a look at your monthly job search application
          </p>
        </div>

        <div className="calendar">
          <HeaderCalendar />
        </div>
      </div>

      {/* user status charts */}
      <div className="flex items-center w-full justify-center gap-16 h-[70%]">
         <div className="w-[35%] h-full">
          <ApplicationStatics />
        </div>

        <div className="w-[25%] h-full">
          <JobAppliedChart />
        </div>

        <div className="w-[40%] h-full">
          <UpcomingInterview href="/" />
        </div>
      </div>

      {/* recent application history table */}
      <div>
        table
      </div>
    </main>
  );
}
