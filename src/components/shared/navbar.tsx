"use client"
import React, { Fragment, useEffect, useRef, useState } from 'react'
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
    const containerRef = useRef<HTMLDivElement | null>(null);
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
            ease: 'power2.inOut'
        });


    }, [isVisible]);

    useEffect(() => {
        if (!navbarRef.current) return;
        if (!containerRef.current) return;
        if (currentScrollY === 0) {
            setIsVisible(true);
            containerRef.current.classList.remove('floating-nav');
        } else if (currentScrollY > lastScrollY) {
            setIsVisible(false);
            containerRef.current.classList.add("floating-nav");
        } else if (currentScrollY < lastScrollY) {
            setIsVisible(true);
            containerRef.current.classList.add("floating-nav");
        }
        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);






    return (
        <div
            className='fixed top-0 inset-x-0 h-20 z-30 -translate-y-full opacity-0'
            ref={navbarRef}
        >
            <div className='h-full  max-w-wrapper transition-all duration-700 flex items-center justify-between' ref={containerRef}>


                <div className="text-white">
                    <Logo />
                </div>
                <div className="hidden md:flex items-center justify-center gap-12">
                    {NAVLINKS.map((link, i) => {
                        if (link.label === "Booking") return;
                        return <Link
                            className='font-medium text-base text-balance text-gray-200 hover:text-white nav-links'
                            href={link.href}
                            key={i}
                        >
                            {link.label}
                        </Link>
                    })}
                    <div className="flex justify-center items-center gap-3">
                        <Link
                            href={"/booking"}
                            className={cn(buttonVariants({ variant: "outline" }), 'py-2 px-6 rounded-full bg-transparent text-gray-200 border-2 border-gray-200 hover:border-white')}
                        >
                            Book Now
                            <ArrowRight className='inline ml-1' />
                        </Link>
                        <Link
                            href={"/operator/dashboard"}
                            className={cn(buttonVariants({ variant: "outline" }), 'py-2 px-6 rounded-full bg-transparent text-gray-200 border-2 border-gray-200 hover:border-white')}
                        >
                            Operator
                            <ArrowRight className='inline ml-1' />
                        </Link>
                    </div>
                </div>
                <div className="block md:hidden">
                    <Sheet  >
                        <SheetTrigger asChild>
                            <AlignJustify className='text-white' />
                            {/* <Button variant="outline">Open</Button> */}
                        </SheetTrigger>
                        <SheetContent side={'top'} className={'h-full bg-black/60 text-white border-gray-600'} onOpenAutoFocus={(e: Event) => e.preventDefault()}>
                            <SheetHeader className='border-b border-gray-600 pb-5'>
                                <SheetTitle className={"text-white"}>
                                    <Logo />
                                </SheetTitle>
                                <SheetDescription>
                                    {' '}
                                </SheetDescription>
                            </SheetHeader>
                            <div className="space-y-8 py-4 flex flex-col justify-center items-center pt-20">
                                {NAVLINKS.map((link, i) => {
                                    if (link.label === "Booking") return;
                                    return <SheetClose asChild key={i}>
                                        <Link
                                            className='font-semibold text-base text-balance text-white'
                                            href={link.href}
                                        >
                                            {link.label}
                                        </Link>
                                    </SheetClose>
                                })}
                            </div>
                            <div className="w-full space-y-6 py-4 pt-8">
                                <SheetClose asChild>
                                    <Link
                                        href={'/booking'}
                                        className={cn(buttonVariants({ size: 'lg', variant: 'default' }), 'w-full dark font-semibold')}
                                    >
                                        Book Now
                                        {/* <ArrowRight className='w-5 h-5 shrink-0 inline' /> */}
                                    </Link>
                                </SheetClose>
                                <SheetClose asChild>

                                    <Link
                                        href={'/operator/dashboard'}
                                        className={cn(buttonVariants({ size: 'lg', variant: 'ghost' }), 'w-full dark font-semibold underline underline-offset-[5px] border-gray-500')}
                                    >
                                        Operator
                                        {/* <ArrowRight className='w-5 h-5 shrink-0 inline' /> */}
                                    </Link>
                                </SheetClose>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    )
}

export default Navbar;