import React from 'react'
import { ChevronRight } from 'lucide-react'

const Badge = ({ text }) => {
    return (
        <div className='border-2 border-gray-700 rounded-full px-2 py-1 h-fit w-fit bg-gray-900/50 flex'>
            <h1 className='flex items-center gap-2 font-light text-zinc-400'>{text} <ChevronRight className='w-4 h-4' /> </h1>
        </div>
    )
}

export default Badge

