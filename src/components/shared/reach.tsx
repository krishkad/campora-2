import Image from 'next/image'
import React from 'react'
import Phone from './phone'

const Reach = () => {
    return (
        <div className='w-full'>
            <div className="w-full">
                <div className="relative w-full h-[400px]">
                    <Image src={'/images/gallery.jpg'} fill sizes='100%' className='object-cover' alt='gallery' />
                    <div className="absolute inset-0 bg-black/45 z-[5]" />
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">

                        <h1 className="text-4xl md:text-6xl font-semibold text-center text-gray-200">
                            How to Reach
                        </h1>
                    </div>
                </div>
            </div>
            <div className="max-w-wrapper-6xl py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-10">
                <div className="w-full flex flex-col justify-center items-center gap-5">
                    <Phone SrcImg='/images/gallery.jpg' />
                    <h2 className="font-semibold text-2xl">Pimpri-Chinchwad</h2>
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-5">
                    <Phone SrcImg='/images/gallery.jpg' />
                    <h2 className="font-semibold text-2xl">Pune</h2>
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-5">
                    <Phone SrcImg='/images/gallery.jpg' />
                    <h2 className="font-semibold text-2xl">Mumbai</h2>
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-5">
                    <Phone SrcImg='/images/gallery.jpg' />
                    <h2 className="font-semibold text-2xl">Lonavla, Maharashtra</h2>
                </div>

            </div>
        </div>
    )
}

export default Reach