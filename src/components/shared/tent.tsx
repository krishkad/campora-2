"use client";
import React from 'react'
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { AirVent, Armchair, Bed, PencilRuler, Star, TentIcon } from 'lucide-react';
import AnimatedTitle from './animated-title';


const Tent = () => {
    return (
        <div className="w-full bg-gradient-2">
            <div className=" pt-20 pb-16">
                {/* <h1 className="text-4xl font-medium text-center">
                    Find Your <span className="text-primary">Perfect</span> Stay
                </h1> */}
                <div className="max-w-wrapper-6xl">
                    <AnimatedTitle title='Find Your<br /><span>Perfect</span> Stay' />
                </div>
                <div className="w-full sm:max-w-wrapper-6xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    <div className="w-full h-max space-y-3">
                        <div className="relative w-full aspect-[3/2]">
                            <Image src={'/images/rooms/camping-2.jpg'} fill priority className="size-full object-cover" alt="images" />
                        </div>
                        <div className="space-y-3 px-4">

                            <h2 className="text-xl font-semibold">
                                Camping Tent
                            </h2>
                            <div className="w-full">
                                <div className="w-full flex items-center justify-between gap-6">
                                    <p className="w-[70%] font-medium text-wrap">
                                        Stay in cozy tents surrounded by serene landscapes, perfect for a peaceful getaway.
                                    </p>
                                    <div className="w-[90px] h-[90px] flex items-center justify-center bg-primary rounded-full">
                                        <TentIcon className='w-6 h-6 text-white' />
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <p className="font-medium text-wrap">
                                        Enjoy a night under the stars with our comfortable and nature-filled tent experience.
                                    </p>
                                </div>
                                <div className="w-full h-12 rounded-full bg-green-700 flex items-center mt-5">
                                    <div className="h-full w-[70%] flex items-center justify-center rounded-full bg-primary text-white">
                                        Check Availability
                                    </div>
                                    <div className="w-[30%] h-full text-white flex items-center justify-center">
                                        Book Now
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex items-center justify-center">
                                <Button className="min-w-[180px] mx-auto rounded-full mt-5">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-max space-y-3">
                        <div className="relative w-full aspect-[3/2]">
                            <Image src={'/images/cabin/cabin-1.jpg'} fill priority className="size-full object-cover" alt="images" />
                        </div>
                        <div className="space-y-3 px-4">

                            <h2 className="text-xl font-semibold">
                                Cottage Stay
                            </h2>
                            <div className="w-full">
                                <div className="w-full flex items-center justify-between gap-6">
                                    <p className="w-[70%] font-medium text-wrap">
                                        Relax in charming cottages blending natural vibes with modern amenities.


                                    </p>
                                    <div className="w-[90px] h-[90px] flex items-center justify-center bg-primary rounded-full">
                                        <TentIcon className='w-6 h-6 text-white' />
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <p className="font-medium text-wrap">
                                        Unwind in serene cottages, your perfect home in nature.
                                    </p>
                                </div>
                                <div className="w-full h-12 rounded-full bg-green-700 flex items-center mt-5">
                                    <div className="h-full w-[70%] flex items-center justify-center rounded-full bg-primary text-white">
                                        Check Availability
                                    </div>
                                    <div className="w-[30%] h-full text-white flex items-center justify-center">
                                        Book Now
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex items-center justify-center">
                                <Button className="min-w-[180px] mx-auto rounded-full mt-5">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Tent