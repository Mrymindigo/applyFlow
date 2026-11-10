import React from 'react'
import SidebarMenuItem from './SidebarMenuItem'
// import { LayoutDashboard, BriefcaseBusiness, CalendarDays, Settings } from "lucide-react";
import { LuAlbum } from "react-icons/lu";
import { AiFillRedditCircle } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { VscGitStashApply } from "react-icons/vsc";
import { BiGroup } from "react-icons/bi";
import { IoCalendarNumberOutline , IoSettingsOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";

import { title } from 'process'

function Sidebar() {
  return (
    <aside className='sidebar w-[15%] h-screen sidebar-gradient '>
      <div className="logo flex gap-1 text-primary-light items-center mt-6 ml-4">
        <span className='text-xl'><AiFillRedditCircle /></span>
        <span className='font-logo font-bold'>ApplyFlow</span>
      </div>

      {/* menu */}
      <nav className=' flex flex-col mt-10 ml-4'>
        <SidebarMenuItem title='dashboard' icon={<RxDashboard />}  href='/' />
        <SidebarMenuItem title='application' icon={<VscGitStashApply />} href='/Applications' />
        <SidebarMenuItem title='interview' icon={<BiGroup />} href='/Interviews' />
        <SidebarMenuItem title='calendar' icon={<IoCalendarNumberOutline />} href='/Calendar' />
        <SidebarMenuItem title='setting' icon={<IoSettingsOutline />}  href='/Setting'/>
      </nav>
    </aside>
  )
}

export default Sidebar
