"use client";
import { Review } from '@/constants/index.c';
import { QuoteIcon, StarIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

function refreshListener() {
    if (document.body.getAttribute("style") === "") {
        document.body.removeAttribute("style");
    }
}

ScrollTrigger.addEventListener("refresh", refreshListener);

const ReviewBox = ({ review, reviewIndex }: { review: Review, reviewIndex: number }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const animation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: '200 bottom',
                    end: 'bottom bottom',
                    toggleActions: 'play none none reverse'
                }
            });

            animation.to(['.review-client', '.review-description'], {
                x: 0,
                opacity: 1,
                ease: 'power2.inOut',
                stagger: 0.02
            });

            // animation.to('.review-description', {
            //     x: 0,
            //     opacity: 1,
            //     ease: 'power2.inOut',
            // });



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
        <div className="w-full" ref={containerRef} >
            <div className={cn("w-full flex items-center gap-4", reviewIndex === 0 && 'review-client')}>
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
            <div className={cn("relative w-full mt-5", reviewIndex === 0 && 'review-description')}>
                <QuoteIcon className="w-6 h-6 shrink-0 scale-x-[-1]" />
                <p className="font-medium pl-10">
                    {review.review}
                </p>
            </div>
        </div>
    )
}

export default ReviewBox