"use client"
import React, { useEffect, useRef, useState } from 'react'
import { NAVLINKS } from '@/constants/index.c';
import Link from 'next/link';
import { Button, buttonVariants } from '../ui/button';
import Logo from './logo';
import { AlignJustify, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useWindowScroll } from 'react-use';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from '@/lib/utils';


const Navbar = () => {

    const navbarRef = useRef<HTMLDivElement | null>(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const { y: currentScrollY } = useWindowScroll();


    // useEffect(() => {
    //     if (!navbarRef.current) return;
    //     const ctx = gsap.context(() => {
    //         gsap.to(navbarRef.current, { y: 0, opacity: 1, duration: 0.75, ease: 'power2.inOut' });
    //     })

    //     return () => ctx.revert()
    // }, [isVisible])

    useEffect(() => {
        if (!navbarRef.current) return;
        gsap.to(navbarRef.current, {
            y: isVisible ? 0 : -100,
            opacity: isVisible ? 1 : 0,
            duration: 0.75,
            transition: "all",
            ease: 'power2.inOut'
        });


    }, [isVisible])

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






    return (
        <div
            className='fixed top-0 inset-x-0 max-w-wrapper h-20 z-30 flex items-center justify-between -translate-y-full opacity-0'
            ref={navbarRef}
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
                <Sheet  >
                    <SheetTrigger asChild>
                        <AlignJustify className='text-white' />
                        {/* <Button variant="outline">Open</Button> */}
                    </SheetTrigger>
                    <SheetContent side={'top'} className={'h-full bg-black/60 text-white border-gray-600'} onOpenAutoFocus={(e: Event) => e.preventDefault()}>
                        <SheetHeader className='border-b border-gray-600 pb-5'>
                            <SheetTitle className={"text-white"}>Menu</SheetTitle>
                            <SheetDescription>
                                {' '}
                            </SheetDescription>
                        </SheetHeader>
                        <div className="space-y-8 py-4 flex flex-col justify-center items-center pt-20">
                            {NAVLINKS.map((link, i) => {
                                return <Link
                                    className='font-semibold text-base text-balance text-white'
                                    href={link.href}
                                    key={i}
                                >
                                    {link.label}
                                </Link>
                            })}
                        </div>
                        <div className="w-full py-4 pt-8">
                            <Link
                                href={'/'}
                                className={cn(buttonVariants({ size: 'lg', variant: 'ghost' }), 'w-full dark font-semibold underline underline-offset-[5px] border-gray-500')}
                            >
                                Book Now
                                {/* <ArrowRight className='w-5 h-5 shrink-0 inline' /> */}
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}

export default Navbar;