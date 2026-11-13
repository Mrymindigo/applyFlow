import React from 'react'

interface MainTitleProps{
    title:string
}

export default function Title({title}:MainTitleProps) {
    return (
        <h1 className="capitalize font-bold pt-2 px-4">
           {title}
        </h1>
    )
}
