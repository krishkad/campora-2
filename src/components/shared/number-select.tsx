"use client";

import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const NumberSelect = () => {
    return (
        <Select>
            <SelectTrigger className="max-w-[150px]">
                <SelectValue placeholder="2" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="1" className='w-full'>1</SelectItem>
                <SelectItem value="2" className='w-full'>2</SelectItem>
                <SelectItem value="3" className='w-full'>3</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default NumberSelect