"use client";
import React from 'react'
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { AirVent, Armchair, Bed, PencilRuler, Star, TentIcon } from 'lucide-react';
import AnimatedTitle from './animated-title';
import { CampingPackage, campingPackages } from '@/constants/index.c';
import TentBox from './tent-box';



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
                        return <TentBox
                            title={campingItem.title}
                            description={campingItem.description}
                            img={campingItem.img}
                            buttonTitle={campingItem.buttonTitle}
                            key={i}
                        />
                    })}

                </div>
            </div>
        </div>
    )
}

export default Tent