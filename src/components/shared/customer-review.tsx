"use client"
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { campingResortReviews } from '@/constants/index.c';
import { ArrowLeft, ArrowRight, QuoteIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from 'react';
import AnimatedTitle from "./animated-title";
import ReviewBox from "./review-box";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function refreshListener() {
    if (document.body.getAttribute("style") === "") {
        document.body.removeAttribute("style");
    };
};

ScrollTrigger.addEventListener('refresh', refreshListener);


const CustomerReview = () => {
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const ctx = gsap.context(() => {
            const animation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: `${containerRef.current?.offsetHeight} bottom`,
                    end: "bottom 200px",
                    toggleActions: 'play none none reverse'
                }
            });

            animation.to('.reviews-button', {
                y: 0,
                opacity: 1,
                ease: 'power2.inOut'
            });


        }, containerRef);

        const observer = new ResizeObserver(() => {
            ScrollTrigger.refresh();
        });

        observer.observe(document.body);

        return () => {
            observer.disconnect();
            ctx.revert();
        };
    }, []);


    return (
        <div className="w-full">
            <div className="max-w-wrapper-6xl pt-16 pb-16">
                <AnimatedTitle title="What Our <span>Guests</span><br />Are Saying" />
                <div className="w-full mt-14">
                    <div className="w-[90%] sm:w-[70%] mx-auto" ref={containerRef}>
                        <Carousel className="w-full">
                            <CarouselContent>
                                {campingResortReviews.map((review, reviewIndex) => (

                                    <CarouselItem key={reviewIndex}>
                                        <ReviewBox review={review} reviewIndex={reviewIndex} />

                                        {/* <div className="w-full">
                                            <div className="w-full flex items-center gap-4">
                                                <div className="relative w-12 aspect-square">
                                                    <Image src={review.imageUrl} className="object-cover rounded-full" sizes="100%" fill priority alt="user-image" />
                                                </div>
                                                <div className="space-y">
                                                    <p className="font-semibold">{review.name}</p>
                                                    <div className="flex items-center justify-start gap-0.5">
                                                        <StarIcon className="w-3 h-3 shrink-0 text-yellow-400 fill-yellow-400" />
                                                        <StarIcon className="w-3 h-3 shrink-0 text-yellow-400 fill-yellow-400" />
                                                        <StarIcon className="w-3 h-3 shrink-0 text-yellow-400 fill-yellow-400" />
                                                        <StarIcon className="w-3 h-3 shrink-0 text-yellow-400 fill-yellow-400" />
                                                        <StarIcon className="w-3 h-3 shrink-0 text-yellow-400 fill-yellow-400" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative w-full mt-5">
                                                <QuoteIcon className="w-6 h-6 shrink-0 scale-x-[-1]" />
                                                <p className="font-medium pl-10">
                                                    {review.review}

                                                </p>
                                            </div>
                                        </div> */}
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious ref={prevRef} className='hidden' />
                            <CarouselNext ref={nextRef} className='hidden' />
                        </Carousel>
                        <div className="flex items-center gap-3 mt-5 reviews-button">
                            <Button size={'icon'} variant={'outline'} className="rounded-full"
                                onClick={() => {
                                    prevRef.current?.click()
                                }}
                            >
                                <ArrowLeft />
                            </Button>
                            <Button size={'icon'} variant={'outline'} className="rounded-full"
                                onClick={() => {
                                    nextRef.current?.click()
                                }}
                            >
                                <ArrowRight />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerReview