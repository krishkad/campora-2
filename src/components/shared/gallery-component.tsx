import Image from 'next/image';
import React from 'react'

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
        }
    ];

    return (
        <div className="relative w-full h-[550px] mt-14">
            <div className="absolute top-0 inset-x-0 w-full h-20 bg-primary/25 z-10" />
            <div className="absolute bottom-0 inset-x-0 w-full h-20 bg-primary/25 z-10" />
            <div className="size-full grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="size-full bg-slate-100 space-y-6 overflow-y-scroll">
                    {images.map((li, i) => {
                        return <div className="relative w-full h-[350px] p-3 rounded-md" key={i}>
                            <Image src={li.link} fill sizes='100%' priority style={{ objectFit: 'cover' }} alt='images' />
                        </div>
                    })}
                </div>
                <div className="size-full bg-slate-100 space-y-6 overflow-y-scroll max-sm:hidden">
                    {images.map((li, i) => {
                        return <div className="relative w-full h-[350px] p-3 rounded-md" key={i}>
                            <Image src={li.link} fill sizes='100%' priority style={{ objectFit: 'cover' }} alt='images' />
                        </div>
                    })}
                </div>
                <div className="size-full bg-slate-100 space-y-6 overflow-y-scroll max-sm:hidden">
                    {images.map((li, i) => {
                        return <div className="relative w-full h-[350px] p-3 rounded-md" key={i}>
                            <Image src={li.link} fill sizes='100%' priority style={{ objectFit: 'cover' }} alt='images' />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default GalleryComponent