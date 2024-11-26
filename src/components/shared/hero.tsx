"use client"
import Image from 'next/image';
import React from 'react'
import BookingBox from './booking-box';

const Hero = () => {
    return (
        <div className='relative w-full h-svh'>
            <Image
                unoptimized
                width={0}
                height={0}
                loading='eager'
                priority
                src={'/images/hero/hero-2-reduced-2.jpg'}
                className='w-full h-full object-cover select-none pointer-events-none'
                alt='hero-images'
            />
            <div className="absolute inset-0 size-full bg-black opacity-45" />
            <div className="absolute inset-0 size-full flex items-center">
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