"use client"
import Booking from '@/components/shared/booking'
import ContactUs from '@/components/shared/contact-us'
import Gallery from '@/components/shared/gallery'
import Reach from '@/components/shared/reach'
import Videos from '@/components/shared/videos'
import React from 'react'

const RoutePage = ({ params: { route } }: { params: { route: "gallery" | "videos" | "how-to-reach" | "booking" | "contact-us" } }) => {
    return (
        <div>
            {route === "gallery" ? <Gallery /> : route === "videos" ? <Videos /> : route === "how-to-reach" ? <Reach /> : route === "contact-us" ? <ContactUs /> : route === "booking" ? <Booking /> :
                "RoutePage"
            }
        </div>
    )
}

export default RoutePage