"use client";

import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from '@/lib/utils';



const NumberSelect = ({ placeHolder, selectValueClassName }: { placeHolder?: string, selectValueClassName?: string }) => {
    const [guest, setGuest] = useState(2)

    return (
        <div className="grid w-full max-w-40 items-center gap-1.5 bg-white">
            <Select>
                <SelectTrigger className={cn("w-full", selectValueClassName)}>
                    <SelectValue placeholder={placeHolder ? placeHolder : "2"} className={cn('bg-white')} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                </SelectContent>
            </Select>

        </div>
    )
}

export default NumberSelect