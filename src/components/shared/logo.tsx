import { cn } from '@/lib/utils'
import { TentTree } from 'lucide-react'
import React from 'react'

const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center justify-center gap-2', className)}>
            <TentTree className='w-7 h-7 shrink-0 text-white' />
            <h1 className="text-xl font-bold text-balance">
                Campora
            </h1>
        </div>
    )
}

export default Logo