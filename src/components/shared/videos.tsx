import Image from 'next/image'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import { best_choice } from '@/constants/index.c'

const Videos = () => {
  return (
    <div className='w-full'>
      <div className="w-full">
        <div className="relative w-full h-[400px]">
          <Image src={'/images/videos.jpg'} fill sizes='100%' className='object-cover' alt='gallery' />
          <div className="absolute inset-0 bg-black/45 z-[5]" />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-semibold text-center text-gray-200">
              Videos
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-wrapper-6xl py-10">
        <Carousel

          opts={{
            align: "center",
            loop: true
          }}

          plugins={[
            Autoplay({
              delay: 3000,
              // Infinity: true,
              stopOnFocusIn: false,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            })
          ]}

          className="relative w-full"
        >
          <CarouselContent>
            {best_choice.map((best, index) => (
              <CarouselItem className="basis-[80%] " key={index}>
                <div className="p-1">
                  <Card className='overflow-hidden'>
                    <CardContent className="flex flex-col items-center justify-center p-0 ">
                      <div className="relative w-full aspect-video">
                        <Image src={best.img} fill sizes='100%' className='object-cover select-none hover-shinny' alt={'images'} />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='hidden md:flex' />
          <CarouselNext className='hidden md:flex' />
        </Carousel>
      </div>
    </div>
  )
}

export default Videos