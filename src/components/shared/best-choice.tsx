"use client";
import React from 'react'
import AnimatedTitle from './animated-title'
import { TentIcon } from 'lucide-react';
import best_choice from '@/constants/index.c';
import BestBox from './best-box';

const BestChoice = () => {
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
                    <div className="w-full sm:w-[450px] mx-auto border-collapse">
                        {best_choice.map((item, itemIndex) => (
                            <BestBox key={itemIndex} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestChoice