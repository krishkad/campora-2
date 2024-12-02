"use client";

import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



const NumberSelect = () => {
    const [guest, setGuest] = useState(2)

    return (
        <div className="grid w-full max-w-40 items-center gap-1.5">
            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="2" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2 ">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                </SelectContent>
            </Select>

        </div>
    )
}

export default NumberSelect