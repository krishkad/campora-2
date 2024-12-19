"use client";
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from "framer-motion";
import { Button, buttonVariants } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedTitle from './animated-title';
import Link from 'next/link';



const IMAGES = [
    '/images/gallery/1.jpg',
    '/images/gallery/2.jpg',
    '/images/gallery/3.jpg',
    '/images/gallery/4.jpg',
    '/images/gallery/5.jpg',
    '/images/gallery/6.jpg',
    '/images/gallery/7.jpg',
    '/images/gallery/8.jpg',
    '/images/gallery/9.jpg',
    '/images/gallery/10.jpg',
    '/images/gallery/11.jpg',
    '/images/gallery/12.jpg',
];

function splitArray<T>(array: Array<T>, numParts: number) {
    const result: Array<Array<T>> = []

    for (let i = 0; i < array.length; i++) {
        const index = i % numParts
        if (!result[index]) {
            result[index] = []
        }
        result[index].push(array[i])
    }

    return result
}



function GalleryColumn({ images, className, imageClassName, msPerPixel }: { images: string[], className?: string, imageClassName?: (value: number) => string, msPerPixel: number }) {
    const columnRef = useRef<HTMLDivElement | null>(null);
    const [columnHeight, setColumnHeight] = useState(0);
    const duration = `${columnHeight * msPerPixel}ms`

    useEffect(() => {
        if (!columnRef.current) return;

        const resizeObserver = new window.ResizeObserver(() => {
            setColumnHeight(columnRef.current?.offsetHeight ?? 0)
        });


        resizeObserver.observe(columnRef.current);

        return () => {
            resizeObserver.disconnect();
        }

    }, [])

    const POSSIBLE_ANIMATION_DELAYS = [
        '0s',
        '0.1s',
        '0.2s',
        '0.3s',
        '0.4s',
        '0.5s',
    ]



    const animationDelay = POSSIBLE_ANIMATION_DELAYS[Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)]


    return (


        <div
            ref={columnRef}
            className={cn("animate-marquee size-full space-y-10 ", className)}
            style={{ '--marquee-duration': duration } as React.CSSProperties}
        >
            {images.concat(images).map((image, imageIndex) => {

                return <div


                    className={cn("animate-fade-in relative w-full h-[400px] p-3 rounded-md", imageClassName?.(imageIndex % images.length))}
                    style={{ animationDelay }}
                    key={imageIndex}
                >
                    <Image src={image} fill sizes='100%' priority loading="eager" style={{ objectFit: 'cover' }} className={cn('rounded-xl')} alt='images' />
                </div>
            })}
        </div>
    )
}



const GalleryComponent = () => {
    const galleryRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(galleryRef, { once: true, amount: 0.4 });
    const columns = splitArray(IMAGES, 3);
    const column1 = columns[0];
    const column2 = columns[1];
    const column3 = splitArray(columns[2], 2);

    return (
        <div className="w-full h-max">
            <div className="max-w-wrapper-6xl pt-16 pb-16">
                {/* <h1 className="text-center text-4xl font-medium">
                    Snapshots of
                    {" "}
                    <span className="px-2 text-primary">Adventure</span>
                    {" "}
                </h1> */}
                <AnimatedTitle title=' Snapshots of <span>Adventure</span>' />
                <div className="relative w-full h-[80vh] mt-14">
                    <div className="absolute -top-1 inset-x-0 w-full h-32 bg-gradient-top-bottom z-10" />
                    <div className="absolute -bottom-1 inset-x-0 w-full h-32 bg-gradient-bottom-top z-10" />
                    <div ref={galleryRef} className="size-full grid grid-cols-1 md:grid-cols-3 gap-5 overflow-hidden">
                        {isInView ? <>
                            <GalleryColumn
                                images={[...column1, ...column3.flat(), ...column2]}
                                imageClassName={(imageIndex) =>
                                    cn({
                                        "md:hidden": imageIndex >= column1.length + column3[0].length,
                                        "lg:hidden": imageIndex >= column1.length
                                    })

                                }
                                msPerPixel={15}

                            />
                            <GalleryColumn
                                images={[...column2, ...column3[1]]}
                                imageClassName={(imageIndex) =>
                                    cn({
                                        "lg:hidden": imageIndex >= column2.length
                                    })

                                }
                                msPerPixel={10}

                            />
                            <GalleryColumn
                                images={column3.flat()}
                                className={cn("hidden md:block")}
                                msPerPixel={15}

                            />
                        </> : null}
                    </div>
                </div>

                <div className="w-full pt-14 flex justify-center">
                    <Link href={'/gallery'} className={cn(buttonVariants({ variant: 'default', size: 'lg' }), 'rounded-full')}>
                        See More
                        <ArrowRight className="inline w-4 h-4 ml-0.5 text-white" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GalleryComponent;