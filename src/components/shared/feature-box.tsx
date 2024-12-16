"use client";
import { Feature } from '@/constants/index.c'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);

function refreshListener() {
    if (document.body.getAttribute("style") === "") {
        document.body.removeAttribute("style");
    };
};

ScrollTrigger.addEventListener("refresh", refreshListener);

const FeatureBox = ({ feature }: { feature: Feature }) => {

    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const ctx = gsap.context(() => {
            const animation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: '150 bottom',
                    end: 'bottom bottom',
                    toggleActions: 'play none none reverse'
                }
            });

            animation.to(containerRef.current, {
                y: 0,
                opacity: 1,
                ease: 'power2.inOut',
            });


        }, containerRef);

        const observer = new ResizeObserver(() => {
            ScrollTrigger.refresh();
        })

        observer.observe(document.body);


        return () => {
            ctx.revert();
            observer.disconnect();
        };
    }, []);


    return (
        <div
            ref={containerRef}
            className="w-full space-y-3 aspect-square border rounded-md flex flex-col items-center justify-center feature-box"
        >
            {feature.icon ? (
                <feature.icon className="w-12 h-12 shrink-0 mx-auto" />
            ) : feature.imageSrc ? (
                <div className="relative w-12 h-12">
                    {/* <img
                        src={feature.imageSrc}
                        alt={feature.alt || "feature"}
                        className="object-contain"
                    /> */}
                    <Image fill src={feature.imageSrc} sizes="100%" className=" object-contain" alt={feature.alt || "feature"} />
                </div>
            ) : null}
            <p className="font-medium text-sm text-center">{feature.label}</p>
        </div>
    )
}

export default FeatureBox