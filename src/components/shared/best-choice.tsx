"use client";
import React, { useEffect, useState } from 'react'
import AnimatedTitle from './animated-title'
import { TentIcon } from 'lucide-react';
import BestBox from './best-box';
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { best_choice } from '@/constants/index.c';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay'


const BestChoice = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % best_choice.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [best_choice.length]);

    return (
        <div className="w-full">
            <div className="max-w-wrapper-6xl pt-16 pb-16">
                {/* <h1 className="text-center text-4xl font-medium">
                    What Makes Us The
                    {" "}
                    <span className="px-2 text-primary">Best</span>
                    {" "}
                    <br className="hidden md:block" />Choice
                </h1> */}
                <AnimatedTitle title='What Makes Us The<br /><span>Best</span> Choice' />
                <div className="relative w-full mt-14">
                    {/* <div className="w-full sm:w-[450px] mx-auto border-collapse">
                        {best_choice.map((item, itemIndex) => (
                            <BestBox key={itemIndex} item={item} itemIndex={itemIndex} />
                        ))}
                    </div> */}
                    <Carousel
                        
                        opts={{
                            align: "center",
                            loop: true
                        }}

                        plugins={[
                            Autoplay({
                                delay: 3000,
                                // Infinity: true,
                                stopOnFocusIn: false,
                                stopOnInteraction: false,
                                stopOnMouseEnter: false,
                            })
                        ]}

                        className="relative w-full"
                    >
                        <CarouselContent>
                            {best_choice.map((best, index) => (
                                <CarouselItem key={index} className="basis-[75%] md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className='overflow-hidden'>
                                            <CardContent className="flex flex-col items-center justify-center p-0 ">
                                                <div className="relative w-full aspect-[9/12]">
                                                    <Image src={best.img} fill sizes='100%' className='object-cover select-none' alt={'images'} />
                                                </div>
                                                <div className="w-full mt-4 px-5 pb-5">
                                                    <p className="text-sm md:text-lg font-semibold">
                                                        {best.description}
                                                    </p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className='hidden md:flex' />
                        <CarouselNext className='hidden md:flex' />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default BestChoice