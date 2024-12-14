"use client";
import React from 'react'
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { AirVent, Armchair, Bed, PencilRuler, Star, TentIcon } from 'lucide-react';
import AnimatedTitle from './animated-title';
import { CampingPackage, campingPackages } from '@/constants/index.c';



const Tent = () => {







    return (
        <div className="w-full">
            <div className=" pt-32 pb-16">
                {/* <h1 className="text-4xl font-medium text-center">
                    Find Your <span className="text-primary">Perfect</span> Stay
                </h1> */}
                <div className="max-w-wrapper-6xl">
                    <AnimatedTitle title='Find Your<br /><span>Perfect</span> Stay' />
                </div>
                <div className="max-w-wrapper-6xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                    {campingPackages.map((campingItem: CampingPackage, i) => {
                        return <div className="w-full pb-4 border" key={i}>
                            <div className="relative w-full aspect-[3/2]">
                                <Image fill src={campingItem.img} sizes='100%' className='object-cover' alt='images' />
                            </div>
                            <div className="w-full px-4 space-y-4 text-center">
                                <h2 className="font-semibold text-xl pt-3">
                                    {campingItem.title}
                                </h2>
                                <p className="text-balance font-medium">
                                    {campingItem.description}
                                </p>
                                <Button className='px-5'>
                                    {campingItem.buttonTitle}
                                </Button>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}

export default Tent