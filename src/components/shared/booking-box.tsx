"use client"
import { useEffect } from 'react';

import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import DatePicker from './date-picker';
import NumberSelect from './number-select';


const BookingBox = () => {

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to('#booking-box', { y: 0, opacity: 1, duration: 0.75, ease: 'power3.inOut' });
        })

        return () => ctx.revert();
    }, [])

    return (
        <div className="absolute -bottom-16 md:-bottom-8 inset-x-0 max-w-4xl mx-auto px-5 z-20 translate-y-full opacity-0" id='booking-box'>

            <div
                className=" bg-white rounded-3xl md:rounded-full h-32 md:h-16 p-4 grid grid-cols-2 md:flex md:items-center md:justify-bwtween gap-5 border"
            >
                <div className="col-span-2 w-full">
                    <DatePicker />
                </div>

                <NumberSelect />
                <Button className='max-w-[200px] rounded-full'>
                    Check Availability
                    <ArrowRight className='w-4 h-4 inline ml-0.5 max-md:hidden' />
                </Button>
            </div>
        </div>

    )
}

export default BookingBox