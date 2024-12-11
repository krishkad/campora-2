"use client";
import React from 'react'
import AnimatedTitle from './animated-title'

const BestChoice = () => {
    return (
        <div className="w-full bg-gradient-2">
            <div className="max-w-wrapper-6xl pt-16 pb-16">
                {/* <h1 className="text-center text-4xl font-medium">
                    What Makes Us The
                    {" "}
                    <span className="px-2 text-primary">Best</span>
                    {" "}
                    <br className="hidden md:block" />Choice
                </h1> */}
                <AnimatedTitle title='What Makes Us The <br /><span>Best</span> Choice' />
                <div className="relative w-full mt-14">
                    <div className="w-full sm:w-[450px] mx-auto space-y-4">
                        <div className="w-full py-3 px-5 border border-orange-400 rounded-md mx-auto text-center">
                            <span className="text-center">
                                Unique Luxury Swiss tents
                            </span>
                        </div>
                        <div className="w-full py-3 px-5 border border-orange-400 rounded-md mx-auto text-center">
                            <span className="text-center">
                                Area surrounded by nature
                            </span>
                        </div>
                        <div className="w-full py-3 px-5 border border-orange-400 rounded-md mx-auto text-center">
                            <span className="text-center">
                                DJ Music

                            </span>
                        </div>
                        <div className="w-full py-3 px-5 border border-orange-400 rounded-md mx-auto text-center">
                            <span className="text-center">
                                Private Bonfire

                            </span>
                        </div>
                        <div className="w-full py-3 px-5 border border-orange-400 rounded-md mx-auto text-center">
                            <span className="text-center">
                                Private Stargazing Lawn

                            </span>
                        </div>
                        <div className="w-full py-3 px-5 border border-orange-400 rounded-md mx-auto text-center">
                            <span className="text-center">
                                Riverfront tent view


                            </span>
                        </div>
                        <div className="w-full py-3 px-5 border border-orange-400 rounded-md mx-auto text-center">
                            <span className="text-center">
                                Beautiful sunset view

                            </span>
                        </div>
                        <div className="w-full py-3 px-5 border border-orange-400 rounded-md mx-auto text-center">
                            <span className="text-center">
                                Best Food
                            </span>
                        </div>
                        <div className="w-full py-3 px-5 border border-orange-400 rounded-md mx-auto text-center">
                            <span className="text-center">
                                Network available

                            </span>
                        </div>
                        <div className="w-full py-3 px-5 border border-orange-400 rounded-md mx-auto text-center">
                            <span className="text-center">
                                Attached Washroom Inside tent
                            </span>
                        </div>
                        <div className="w-full py-3 px-5 border border-orange-400 rounded-md mx-auto text-center">
                            <span className="text-center">
                                Availability of private parking space
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestChoice