"use client";
import Image from 'next/image';
import React from 'react';



function splitArray<T>(array: Array<T>, numParts: number) {
    const result: Array<Array<T>> = []

    for (let i = 0; i < array.length; i++) {
        const index = i % numParts
        if (!result[index]) {
            result[index] = []
        }
        result[index].push(array[i])
    }

    return result
}




const GalleryComponent = () => {
    const images = [
        {
            link: '/images/gallery/1.jpg'
        },
        {
            link: '/images/gallery/2.jpg'
        },
        {
            link: '/images/gallery/3.jpg'
        },
        {
            link: '/images/gallery/4.jpg'
        },
        {
            link: '/images/gallery/5.jpg'
        },
        {
            link: '/images/gallery/6.jpg'
        },
        {
            link: '/images/gallery/7.jpg'
        },
        {
            link: '/images/gallery/8.jpg'
        },
        {
            link: '/images/gallery/9.jpg'
        },
        {
            link: '/images/gallery/10.jpg'
        },
        {
            link: '/images/gallery/11.jpg'
        },
    ];


    return (
        <div className="relative w-full h-[550px] mt-14">
            <div className="absolute -top-1 inset-x-0 w-full h-32 bg-gradient-top-bottom z-10" />
            <div className="absolute -bottom-1 inset-x-0 w-full h-32 bg-gradient-bottom-top z-10" />
            <div className="size-full grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="size-full space-y-10 overflow-y-scroll">
                    {images.map((li, i) => {
                        return <div className="relative w-full h-[400px] p-3 rounded-md" key={i}>
                            <Image src={li.link} fill sizes='100%' priority style={{ objectFit: 'cover' }} className='rounded-xl' alt='images' />
                        </div>
                    })}
                </div>
                <div className="size-full space-y-10 overflow-y-scroll max-sm:hidden">
                    {images.map((li, i) => {
                        return <div className="relative w-full h-[400px] p-3 rounded-md" key={i}>
                            <Image src={li.link} fill sizes='100%' priority style={{ objectFit: 'cover' }} className='rounded-xl' alt='images' />
                        </div>
                    })}
                </div>
                <div className="size-full space-y-10 overflow-y-scroll max-sm:hidden">
                    {images.map((li, i) => {
                        return <div className="relative w-full h-[400px] p-3 rounded-md" key={i}>
                            <Image src={li.link} fill sizes='100%' priority style={{ objectFit: 'cover' }} className='rounded-xl' alt='images' />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default GalleryComponent;