'use client'

import Link from 'next/link'
import React from 'react'

interface SidebarMenuItemProps {
  title: string,
  icon: React.ReactNode,
  href: string
}

function SidebarMenuItem({ title, icon, href }: SidebarMenuItemProps) {
  return (
    <Link
      href={href}
      className={`sidebar-item flex gap-2 items-center p-2 text-primary-light cursor-pointer rounded-l-full hover:bg-background hover:text-primary`}
    >
      {icon}
      <span>{title}</span>
    </Link>
  )

}

export default SidebarMenuItem
