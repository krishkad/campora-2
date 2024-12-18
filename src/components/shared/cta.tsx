"use client"
import React, { useEffect, useRef } from 'react'
import AnimatedTitle from './animated-title'
import Image from 'next/image'
import { Button } from '../ui/button'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function refreshListener() {
    if (document.body.getAttribute("style") === "") {
        document.body.removeAttribute("style");
    };
};

ScrollTrigger.addEventListener("refresh", refreshListener);

const Cta = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const animation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "150px bottom",
                    end: "center bottom",
                    toggleActions: "play none none reverse"
                }
            });

            animation.to('.cta-item', {
                y: 0,
                opacity: 1,
                ease: "power2.inOut",
                stagger: 0.02
            });

        }, containerRef)

        const observer = new ResizeObserver(() => {
            ScrollTrigger.refresh();
        });

        observer.observe(document.body);


        return () => {
            ctx.revert();
            observer.disconnect();
        };
    }, []);

    return (
        <div className="w-full">
            <div className="max-w-wrapper-6xl pb-16 pt-16">
                {/* <h1 className="text-center text-4xl font-medium">
                    Ready to
                    {' '}
                    <span className=" text-primary">Plan</span>
                    {' '}
                    Your <br className="hidden sm:block" /> Stay?
                </h1> */}
                <div className="relative w-full min-h-max h-[420px] flex items-center justify-center px-4 rounded-xl overflow-hidden ">
                    <div className="absolute inset-0">
                        <Image src={'/images/cta-image.jpg'} sizes='100%' fill style={{
                            objectFit: "cover"
                        }}
                            alt='cta-image' />
                    </div>
                    <div className="absolute inset-0 bg-black/65" />

                    <div className="space-y-4 z-10 flex flex-col items-center justify-center" ref={containerRef}>
                        <AnimatedTitle containerClass='text-white' title='Ready to <span>Plan</span><br />Your Stay?' />
                        <p className="max-w-[650px] text-center font-medium text-balance text-gray-300 cta-item">
                            Book your stay now and enjoy unforgettable moments under the stars at our serene camping resort. 🏕️✨ Don&apos;t miss out—spots fill fast!
                        </p>
                        <Button className='rounded-full px-6 cta-item'>
                            Book a Stay
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cta