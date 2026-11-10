import React from 'react'
import Image from 'next/image'
import { RiNotification2Line } from "react-icons/ri";

interface HeaderProps {
  src: string,
  alt: string,
  height: number,
  width: number,
  name: string
}

export default function Profile({ src , alt , name , height , width }: HeaderProps) {
  return (
    <div className='flex gap-2 items-center'>
        <div className='bg-text-muted text-primary-light p-2 rounded-full'>
          <RiNotification2Line />
        </div>
        <span className=''></span>
        <div className='flex gap-2 items-center'>
          <Image
            src={src}
            alt={alt}
            height={height}
            width={width}
            className='rounded-full'
          />
          <span className='text-text-primary'>{name}</span>
        </div>
      </div>
  )
}
