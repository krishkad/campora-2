"use client";
import { BestChoice } from '@/constants/index.c';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

function refreshListener() {
    if (document.body.getAttribute("style") === "") {
        document.body.removeAttribute("style");
    };
};

ScrollTrigger.addEventListener('refresh', refreshListener);

const BestBox = ({ item, itemIndex }: { item: BestChoice, itemIndex: number }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const animation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: '100 bottom',
                    end: 'bottom bottom',
                    toggleActions: 'play none none reverse'
                }
            });

            animation.to(containerRef.current, {
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
        <div className={cn("w-full h-[60px] px-5 border border-collapse border-orange-400  mx-auto flex items-center gap-6 text-center translate-y-48 opacity-0", (itemIndex + 1) % 3 === 0 && "bg-primary !text-white")} ref={containerRef}>
            <item.icon className='w-10 h-10' />
            <div className="h-full w-px bg-primary" />
            <div className="w-full text-start">
                <span className="text-center">
                    {item.description}
                </span>
            </div>
        </div>
    )
}

export default BestBox;