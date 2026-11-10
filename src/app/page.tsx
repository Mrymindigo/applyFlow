
'use client'

import Image from "next/image";
import { useState } from 'react'
import HeaderCalendar from '../components/layout/HeaderCalendar'
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { RiVideoOnAiFill } from "react-icons/ri";

export default function Home() {

  const [applications, setApplications] = useState([
    { id: 1, company: "Google", status: "Applied" },
    { id: 2, company: "Meta", status: "Interview" },
    { id: 3, company: "Amazon", status: "Applied" },
  ]);

  const totalApplications = applications.length;

  const totalInterviews = applications.filter(
    (app) => app.status === "Interview"
  ).length;


  return (
    <main className="mt-8 mx-8">

      {/* first section */}
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
      <div className="flex items-center w-full justify-center gap-16">
        {/* 1 */}
        <div className="flex gap-4 w-[35%] result-box-gradient min-h-60 justify-center items-center rounded-3xl">
          <div className="flex flex-col gap-4 items-center">
            <div className=" flex items-center justify-center bg-[#76a9b0] rounded-full w-[60px] h-[60px]">
              <MdOutlineMarkEmailRead size={36} />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <span className="text-6xl font-bold text-text-primary">
                {totalApplications}
              </span>
              <span className="text-xs text-text-secondary">
                Total jobs applied
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="flex items-center justify-center bg-[#f1ad54] rounded-full w-[60px] h-[60px]">
              <RiVideoOnAiFill size={36} />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <span className="text-6xl font-bold text-text-primary">
                {totalInterviews}
              </span>
              <span className="text-xs text-text-secondary">
                Interviewed
              </span>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="w-[25%] bg-amber-300">
          chart
        </div>

        {/* 3 */}
        <div className="w-[40%] bg-amber-900">
          upcoming interview
        </div>
      </div>

      {/* recent application history table */}
      <div>
        table
      </div>
    </main>
  );
}
