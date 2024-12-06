"use client"
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import BookingBox from './booking-box';
import gsap from 'gsap';

const Hero = () => {



    const heroRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (!heroRef.current) return;
        const ctx = gsap.context(() => {
            gsap.to('#hero', { x: 0, opacity: 1, duration: 0.75, ease: "power2.inOut" });
        })

        return () => ctx.revert()
    }, [])

    return (
        <div className='relative w-full h-svh' ref={heroRef}>
            <Image
                src={'/images/hero/hero-2-reduced-2.jpg'}
                fill
                sizes={'100vw'}
                loading='eager'
                priority
                style={{
                    objectFit: "cover"
                }}
                className='select-none pointer-events-none'
                alt='hero-images'
            />
            <div className="absolute inset-0 size-full bg-black opacity-45" />
            <div className="absolute inset-0 size-full flex items-center -translate-x-full opacity-0" id='hero'>
                <div className="w-[90%] md:w-[40%] pl-8 md:ml-20 space-y-5">
                    <p className="text-base text-medium text-gray-200">
                        Your Gateway to Nature
                    </p>
                    <h1 className="text-4xl md:text-6xl font-medium text-balance text-white">
                        Discover the Perfect Blend of Nature and Comfort
                    </h1>
                    <p className="text-base text-medium text-gray-200">
                        Stay Relaxed, Explore More
                    </p>
                </div>
            </div>
            <BookingBox />
        </div>
    );
};

export default Hero;