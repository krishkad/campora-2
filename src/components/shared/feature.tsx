"use client";
import React from 'react';
import AnimatedTitle from './animated-title';
import { features } from '@/constants/index.c';
import FeatureBox from './feature-box';



const Feature = () => {


    return (
        <div className="w-full ">
            <div className="max-w-wrapper-6xl mt-16 pb-16">
                {/* <h1 className="text-center text-4xl font-medium">
                    Everything You Need for a <br className="hidden md:block" />
                    {' '}
                    <span className="px-2 text-primary">Memorable</span>
                    {' '}
                    Stay
                </h1> */}
                <AnimatedTitle title='Everything You Need for a<br /><span>Memorable</span> Stay' />
                <div className="w-full">
                    <div
                        className="w-full grid grid-cols-2 md:grid-cols-5 gap-5 mt-16"
                    >
                        {features.map((feature, index: number) => (
                            <FeatureBox key={index} feature={feature} />
                        ))}
                        {/* <div className="w-full space-y-3 aspect-square border rounded-md flex flex-col items-center justify-center feature-box">
                            <IoMdFootball className="w-12 h-12 shrink-0 mx-auto" />
                            <p className="font-medium text-sm text-center">Football</p>
                        </div>
                        <div className="w-full space-y-3 aspect-square border rounded-md flex flex-col items-center justify-center feature-box">
                            <MdSportsCricket className="w-12 h-12 shrink-0 mx-auto" />
                            <p className="font-medium text-sm text-center">Cricket</p>
                        </div>
                        <div className="w-full space-y-3 aspect-square border rounded-md flex flex-col items-center justify-center feature-box">
                            <FaChess className="w-12 h-12 shrink-0 mx-auto" />
                            <p className="font-medium text-sm text-center">Chess</p>
                        </div>
                        <div className="w-full space-y-3 aspect-square border rounded-md flex flex-col items-center justify-center feature-box">
                            <div className="relative w-12 h-12">
                                <Image fill src={'/images/games/board-game.png'} sizes="100%" className=" object-contain" alt="carrom" />
                            </div>
                            <p className="font-medium text-sm text-center">Carrom</p>
                        </div>
                        <div className="w-full space-y-3 aspect-square border rounded-md flex flex-col items-center justify-center feature-box">
                            <GiArcheryTarget className="w-12 h-12 shrink-0 mx-auto" />
                            <p className="font-medium text-sm text-center">Soft Archery</p>
                        </div>
                        <div className="w-full space-y-3 aspect-square border rounded-md flex flex-col items-center justify-center feature-box">
                            <div className="relative w-12 h-12">
                                <Image fill src={'/images/games/badminton.png'} sizes="100%" className="object-contain" alt="badminton" />
                            </div>
                            <p className="font-medium text-sm text-center">Badminton</p>
                        </div>
                        <div className="w-full space-y-3 aspect-square border rounded-md flex flex-col items-center justify-center feature-box">
                            <GiDart className="w-12 h-12 shrink-0 mx-auto" />
                            <p className="font-medium text-sm text-center">Dart Game</p>
                        </div>
                        <div className="w-full space-y-3 aspect-square border rounded-md flex flex-col items-center justify-center feature-box">
                            <GiBullHorns className="w-12 h-12 shrink-0 mx-auto" />
                            <p className="font-medium text-sm text-center">Bullock Cart</p>
                        </div>
                        <div className="w-full space-y-3 aspect-square border rounded-md flex flex-col items-center justify-center feature-box">
                            <CgCardSpades className="w-12 h-12 shrink-0 mx-auto" />
                            <p className="font-medium text-sm text-center">Cards</p>
                        </div>
                        <div className="w-full space-y-3 aspect-square border rounded-md flex flex-col items-center justify-center feature-box">
                            <div className="relative w-12 h-12">
                                <Image fill src={'/images/games/monopoly.png'} sizes="100%" className="object-contain" alt="monopoly" />
                            </div>
                            <p className="font-medium text-sm text-center">Monopoly</p>
                        </div> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature