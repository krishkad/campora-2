"use client"
import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import DatePicker from './date-picker';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import dayjs from 'dayjs';


const BookingBox = () => {
    return (
        <div className="absolute -bottom-16 md:-bottom-8 inset-x-0 max-w-4xl mx-auto px-5 z-20 ">

            <div
                className=" bg-white rounded-3xl md:rounded-full h-32 md:h-16 p-4 grid grid-cols-2 md:flex md:items-center md:justify-bwtween gap-5 border"
            >
                <DatePicker />
                <DatePicker defaultDate={dayjs().month()} />
                {/* <div className="w-full">date picker disable</div> */}
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="2" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1" className='w-full'>1</SelectItem>
                        <SelectItem value="2" className='w-full'>2</SelectItem>
                        <SelectItem value="3" className='w-full'>3</SelectItem>
                    </SelectContent>
                </Select>
                <Button className='w-full rounded-full'>
                    Check Availability
                    <ArrowRight className='w-4 h-4 inline ml-0.5 max-md:hidden' />
                </Button>
            </div>
        </div>

    )
}

export default BookingBox