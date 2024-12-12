"use client"
import React from 'react'
import AnimatedTitle from './animated-title'

const Cta = () => {
    return (
        <div className="w-full  bg-gradient-2">
            <div className="max-w-wrapper-6xl pb-16 pt-16">
                {/* <h1 className="text-center text-4xl font-medium">
                    Ready to
                    {' '}
                    <span className=" text-primary">Plan</span>
                    {' '}
                    Your <br className="hidden sm:block" /> Stay?
                </h1> */}
                <AnimatedTitle title='Ready to <span>Plan</span><br />Your Stay?' />
                <div className="w-full mt-14">

                </div>
            </div>
        </div>
    )
}

export default Cta