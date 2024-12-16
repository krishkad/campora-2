"use client";
import React, { useEffect, useRef } from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function refreshListener() {
    if (document.body.getAttribute("style") === "") {
        document.body.removeAttribute("style");
    };
};

ScrollTrigger.addEventListener('refresh', refreshListener);

const TentBox = ({ img, title, description, buttonTitle }: { img: string, title: string, description: string, buttonTitle: string }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        if (!containerRef.current) return;
        const ctx = gsap.context(() => {
            const animation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: `${containerRef.current?.offsetHeight} bottom`,
                    end: 'bottom bottom',
                    toggleActions: 'play none none reverse'
                }
            });

            const borderAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: `${containerRef.current?.offsetHeight} bottom`,
                    end: 'bottom bottom',
                    toggleActions: 'play none none reverse'
                }
            });


            borderAnimation.to(containerRef.current, {
                opacity: 1,
            });

            animation.to('.box-item', {
                y: 0,
                opacity: 1,
                ease: 'power2.inOut',
                stagger: 0.15
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
        <div className="w-full pb-4 border opacity-0" ref={containerRef}>
            <div className="relative w-full aspect-[3/2] box-item">
                <Image fill src={img} sizes='100%' className='object-cover' alt='images' />
            </div>
            <div className="w-full flex flex-col items-center justify-between px-4 space-y-4 text-center">
                <h2 className="font-semibold text-xl pt-3 box-item">
                    {title}
                </h2>
                <p className="text-balance font-medium box-item">
                    {description}
                </p>
                <Button className='px-5 box-item'>
                    {buttonTitle}
                </Button>
            </div>
        </div>
    )
}

export default TentBox