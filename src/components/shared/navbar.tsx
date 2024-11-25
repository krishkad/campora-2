import React from 'react'
import { NAVLINKS } from '@/constants/index.c';
import Link from 'next/link';
import { Button } from '../ui/button';
import Logo from './logo';
import { AlignJustify, ArrowRight } from 'lucide-react';

const Navbar = () => {
    return (
        <div
            className='fixed top-0 inset-x-0 max-w-wrapper h-20 z-30 flex items-center justify-between'
        >
            <div className="text-white">
                <Logo />
            </div>
            <div className="hidden md:flex items-center justify-center gap-12">
                {NAVLINKS.map((link, i) => {
                    return <Link
                        className='font-medium text-base text-balance text-gray-200 hover:text-white'
                        href={link.href}
                        key={i}
                    >
                        {link.label}
                    </Link>
                })}
                <Button
                    variant={'outline'}
                    className='py-2 px-6 rounded-full bg-transparent text-gray-200 border-2 border-gray-200 hover:border-white'
                >
                    Book a room
                    <ArrowRight className='inline ml-1' />
                </Button>
            </div>
            <div className="block md:hidden">
                <AlignJustify className='text-white' />
            </div>
        </div>
    )
}

export default Navbar;