"use client";
import React from 'react'
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { AirVent, Armchair, Bed, PencilRuler, Star } from 'lucide-react';
import AnimatedTitle from './animated-title';


const Tent = () => {
    return (
        <div className="w-full bg-gradient-2">
            <div className="max-w-wrapper-6xl pt-20 pb-16">
                {/* <h1 className="text-4xl font-medium text-center">
                    Find Your <span className="text-primary">Perfect</span> Stay
                </h1> */}
                <AnimatedTitle title='Find Your <span>Perfect</span><br /> Stay' />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    <div className="w-full h-max space-y-3">
                        <div className="relative w-full aspect-video">
                            <Image src={'/images/rooms/camping-2.jpg'} fill priority className="size-full object-cover rounded-md" alt="images" />
                        </div>
                        <h2 className="text-xl font-semibold">
                            Camping Tent
                        </h2>
                        <div className="w-full">
                            <p className="text-sm"><PencilRuler className="inline mr-2 w-4 h-4" />8x8 ft tent for 2 adults</p>
                            <p className="text-sm"><Bed className="inline mr-2 w-4 h-4" />Includes sleeping bags and pads</p>
                            <p className="text-sm"><Armchair className="inline mr-2 w-4 h-4" />Chairs, table, lantern, fire pit</p>
                            <p className="text-sm"><Star className="inline mr-2 w-4 h-4" />Lakefront, pre-pitched</p>
                        </div>
                        <Button className="min-w-[240px]">Check Availibility</Button>
                    </div>

                    <div className="w-full h-max space-y-3">
                        <div className="relative w-full aspect-video">
                            <Image src={'/images/cabin/cabin-1.jpg'} fill priority className="size-full object-cover rounded-md" alt="images" />
                        </div>
                        <h2 className="text-xl font-semibold">
                            Cottage Stay
                        </h2>
                        <div className="w-full">
                            <p className="text-sm"><PencilRuler className="inline mr-2 w-4 h-4" />20x15 ft cottage for 4</p>
                            <p className="text-sm"><Bed className="inline mr-2 w-4 h-4" /> 1 queen bed, 1 sofa bed</p>
                            <p className="text-sm"><AirVent className="inline mr-2 w-4 h-4" />Kitchenette, bathroom, AC</p>
                            <p className="text-sm"><Star className="inline mr-2 w-4 h-4" />Lakefront with private patio</p>
                        </div>
                        <Button className="min-w-[240px]">Check Availibility</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Tent