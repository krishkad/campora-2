"use client"
import Gallery from '@/components/shared/gallery'
import Reach from '@/components/shared/reach'
import Videos from '@/components/shared/videos'
import React from 'react'

const RoutePage = ({ params: { route } }: { params: { route: "gallery" | "videos" | "how-to-reach" | "booking" | "contact-us" } }) => {
    return (
        <div>
            {route === "gallery" ? <Gallery /> : route === "videos" ? <Videos /> : route === "how-to-reach" ? <Reach /> :
                "RoutePage"
            }
        </div>
    )
}

export default RoutePage