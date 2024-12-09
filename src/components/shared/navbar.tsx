"use client"
import React, { useEffect, useRef, useState } from 'react'
import { NAVLINKS } from '@/constants/index.c';
import Link from 'next/link';
import { Button } from '../ui/button';
import Logo from './logo';
import { AlignJustify, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useWindowScroll } from 'react-use';


const Navbar = () => {

    const navbarRef = useRef<HTMLDivElement | null>(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const { y: currentScrollY } = useWindowScroll();


    useEffect(() => {
        if (!navbarRef.current) return;
        const ctx = gsap.context(() => {
            gsap.to(navbarRef.current, { y: 0, opacity: 1, duration: 0.75, ease: 'power2.inOut' });
        })

        return () => ctx.revert()
    }, [])

    useEffect(() => {
        if (!navbarRef.current) return;
        if (currentScrollY === 0) {
            setIsVisible(true);
            navbarRef.current.classList.remove('floating-nav');
        } else if (currentScrollY > lastScrollY) {
            setIsVisible(false);
            navbarRef.current.classList.add("floating-nav");
        } else if (currentScrollY < lastScrollY) {
            setIsVisible(true);
            navbarRef.current.classList.add("floating-nav");
        }
        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);

    useEffect(() => {
        gsap.to(navbarRef.current, {
            y: isVisible ? 0 : -100,
            opacity: isVisible ? 1 : 0,
            duration: 0.2
        })


    }, [isVisible])




    return (
        <div
            ref={navbarRef}
            className='fixed top-0 inset-x-0 max-w-wrapper h-20 z-30 flex items-center justify-between -translate-y-full opacity-0 transition-all duration-300'
        >
            <div className="text-white">
                <Logo />
            </div>
            <div className="hidden md:flex items-center justify-center gap-12">
                {NAVLINKS.map((link, i) => {
                    return <Link
                        className='font-medium text-base text-balance text-gray-200 hover:text-white nav-links'
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