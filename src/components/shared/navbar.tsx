"use client"
import React, { useEffect, useRef } from 'react'
import { NAVLINKS } from '@/constants/index.c';
import Link from 'next/link';
import { Button } from '../ui/button';
import Logo from './logo';
import { AlignJustify, ArrowRight } from 'lucide-react';
import gsap from 'gsap';


const Navbar = () => {

    const navbarRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (!navbarRef.current) return;
        const ctx = gsap.context(() => {
            gsap.to('.navbar', { y: 0, opacity: 1, duration: 0.75, ease: 'power2.inOut' });
        })

        return () => ctx.revert()
    }, [])

    return (
        <div
            className='fixed top-0 inset-x-0 max-w-wrapper h-20 z-30 flex items-center justify-between -translate-y-full opacity-0 navbar'
            id='navbar'
            ref={navbarRef}
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