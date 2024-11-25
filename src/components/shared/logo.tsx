import { TentTree } from 'lucide-react'
import React from 'react'

const Logo = () => {
    return (
        <div className='flex items-center justify-center gap-2'>
            <TentTree className='w-7 h-7 shrink-0 text-white' />
            <h1 className="text-xl font-bold text-balance">
                Campora
            </h1>
        </div>
    )
}

export default Logo