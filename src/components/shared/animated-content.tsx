"use client";
import React, { HTMLAttributes, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedContentProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const AnimatedContent = ({ className = "", children }: AnimatedContentProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const animationRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current || !animationRef.current) return;

        const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "300 bottom",
                    end: "center bottom",
                    toggleActions: "play none none reverse",
                },
            }).to(animationRef.current, {
                y: 0,
                opacity: 1,
                ease: "power2.inOut",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className={cn("w-full", className)} ref={containerRef}>
            <div
                ref={animationRef}
                className="translate-y-[100%] opacity-0"
            >
                {children}
            </div>
        </div>
    );
};

export default AnimatedContent;
