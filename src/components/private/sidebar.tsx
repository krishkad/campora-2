import React from 'react'
import Logo from '../shared/logo'
import { ADMINROUTE } from '@/constants/index.c'
import { Button, buttonVariants } from '../ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const Sidebar = () => {
    return (
        <div className="w-full h-svh space-y-3 p-3 bg-gray-50">
            <div className="w-full py-5 flex justify-start">
                <Logo IconClassName='!text-black' />
            </div>
            <div className="w-full flex items-center justify-center gap-1">

            </div>
            <div className="w-full space-y-3">
                {ADMINROUTE.map((route, routeIndex) => {
                    return <Link href={route.href} className={cn(buttonVariants({ variant: 'ghost' }), "w-full h-14 justify-start")} key={routeIndex}>
                        <route.icon className='w-4 h-4 shrink-0 inline mr-2' />
                        <span className="font-semibold">{route.label}</span>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default Sidebar