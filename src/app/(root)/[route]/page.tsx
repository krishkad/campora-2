"use client"
import Gallery from '@/components/shared/gallery'
import React from 'react'

const RoutePage = ({ params: { route } }: { params: { route: "gallery" | "videos" | "how-to-reach" | "booking" | "contact-us" } }) => {
    return (
        <div>
            {route === "gallery" ? <Gallery /> :
                "RoutePage"
            }
        </div>
    )
}

export default RoutePage