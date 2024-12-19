import { imageUrls } from '@/constants/index.c'
import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'


function splitArrayInChunks<T>(array: T[], chunkSize: number): T[][] {
    const result: T[][] = [];

    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }

    return result;
}

const Gallery = () => {



    const galleryDoubleArray = splitArrayInChunks(imageUrls, 6);

    return (
        <div className='w-full'>
            <div className="w-full">
                <div className="relative w-full h-[400px]">
                    <Image src={'/images/gallery.jpg'} fill sizes='100%' className='object-cover' alt='gallery' />
                    <div className="absolute inset-0 bg-black/45 z-[5]" />
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <h1 className="text-6xl font-semibold text-gray-200">
                            Gallery
                        </h1>
                    </div>
                </div>
            </div>
            <div className="max-w-wrapper-6xl pt-5 pb-5 space-y-5">
                {galleryDoubleArray.map((imgArray, imgArrayIndex) => {
                    if (imgArray.length < 6) return;

                    return <div className="w-full grid grid-cols-1 md:grid-cols-3 grid-rows-1 md:grid-rows-3 gap-5" key={imgArrayIndex}>
                        {imgArray.map((img, imgIndex) => {

                            const index = imgIndex + 1;
                            let isLong = false;
                            if (index === 2 || index === 4 || index === 5) {
                                isLong = true
                            }
                            return <div className={cn("relative w-full bg-yellow-50 aspect-[3/2]", isLong ? "h-full row-span-2" : "")} key={imgIndex}>
                                <Image src={img} fill sizes='100%' className={"object-cover"} alt='image' />
                            </div>
                        })}

                    </div>
                })}
              
                {/* <div className="w-full grid grid-cols-1 md:grid-cols-3 grid-rows-1 md:grid-rows-3 gap-5">
                    <div className="w-full aspect-[3/2] bg-yellow-50" />
                    <div className="w-full h-full row-span-2  bg-green-50" />
                    <div className="w-full aspect-[3/2] bg-red-50" />
                    <div className="w-full h-full row-span-2  bg-orange-50" />
                    <div className="w-full h-full row-span-2  bg-gray-50" />
                    <div className="w-full aspect-[3/2] bg-blue-50" />
                </div> */}
            </div>
        </div>
    )
}

export default Gallery