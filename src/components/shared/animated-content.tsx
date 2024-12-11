"use client";
import React, { HTMLAttributes, useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedContent = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
    const { children } = props;

    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const animation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: '300 bottom',
                    end: 'center bottom',
                    toggleActions: 'play none none reverse'
                }
            });

            animation.to('.animation-container', {
                y: 0,
                opacity: 1,
                ease: 'power2.inOut'
            });
        }, containerRef);

        return () => ctx.revert();
    }, [])

    return (
        <>
            <div className="w-full" ref={containerRef} {...props}>
                <div className="animation-container">
                    {children}
                </div>
            </div>
        </>
    )
}

export default AnimatedContent;