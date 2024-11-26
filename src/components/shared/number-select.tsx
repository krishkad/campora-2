"use client";

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"


const NumberSelect = () => {
    const [guest, setGuest] = useState(2)

    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Input datatype='integer' value={guest} onChange={(event) => setGuest(Number(event.target.value))} id="guest" placeholder="No. of people" />
        </div>
    )
}

export default NumberSelect