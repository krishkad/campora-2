"use client";
import React from 'react'
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { AirVent, Armchair, Bed, PencilRuler, Star, TentIcon } from 'lucide-react';
import AnimatedTitle from './animated-title';


const Tent = () => {
    return (
        <div className="w-full">
            <div className=" pt-20 pb-16">
                {/* <h1 className="text-4xl font-medium text-center">
                    Find Your <span className="text-primary">Perfect</span> Stay
                </h1> */}
                <div className="max-w-wrapper-6xl">
                    <AnimatedTitle title='Find Your<br /><span>Perfect</span> Stay' />
                </div>
                <div className="w-full sm:max-w-wrapper-6xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    <div className="w-full pb-4 border">
                        <div className="relative w-full aspect-[3/2]">
                            <Image fill src={'/images/rooms/camping-1.jpg'} sizes='100%' className='object-cover' alt='images' />
                            {/* <div className="absolute bottom-0 inset-x-0 w-full h-[70px]">
                                <div className="relative w-full h-full">
                                    <Image fill src={'/wave.svg'} sizes='100%' className='object-cover' alt='images' />
                                </div>
                            </div> */}

                        </div>
                        <div className="w-full px-4 space-y-4 text-center">
                            <h2 className="font-semibold text-xl pt-3">
                                Scenic Campsites
                            </h2>
                            <p className="text-balance font-medium">
                                Pitch your tent in stunning natural settings with amenities like clean washrooms, fire pits, and drinking water.
                            </p>
                            <Button className='rounded-full'>
                                Check Availibilty
                            </Button>
                        </div>
                    </div>
                    <div className="w-full pb-4 border">
                        <div className="relative w-full aspect-[3/2]">
                            <Image fill src={'/images/rooms/camping-4.jpg'} sizes='100%' className='object-cover' alt='images' />
                        </div>
                        <div className="w-full px-4 space-y-4 text-center">
                            <h2 className="font-semibold text-xl pt-3">
                                Cozy Cottages
                            </h2>
                            <p className="text-balance font-medium">
                                Relax in fully furnished cottages with private decks and modern comforts, surrounded by breathtaking nature.
                            </p>
                            <Button className='rounded-full'>
                                Check Availibilty
                            </Button>
                        </div>
                    </div>
                    <div className="w-full pb-4 border">
                        <div className="relative w-full aspect-[3/2]">
                            <Image fill src={'/images/rooms/camping-3.jpg'} sizes='100%' className='object-cover' alt='images' />
                        </div>
                        <div className="w-full px-4 space-y-4 text-center">
                            <h2 className="font-semibold text-xl pt-3">
                                Luxurious Glamping
                            </h2>
                            <p className="text-balance font-medium">
                                Enjoy plush bedding, ambient lighting, and en-suite bathrooms in our luxury tents. Nature meets comfort for a perfect retreat.
                            </p>
                            <Button className='rounded-full'>
                                Check Availibilty
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Tent