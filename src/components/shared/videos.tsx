import Image from 'next/image'
import React from 'react'

const Videos = () => {
  return (
    <div className='w-full'>
      <div className="w-full">
        <div className="relative w-full h-[400px]">
          <Image src={'/images/videos.jpg'} fill sizes='100%' className='object-cover' alt='gallery' />
          <div className="absolute inset-0 bg-black/45 z-[5]" />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
            <h1 className="text-6xl font-semibold text-center text-gray-200">
              Videos
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-wrapper-6xl py-5">

      </div>
    </div>
  )
}

export default Videos