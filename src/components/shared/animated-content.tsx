"use client";
import React, { HTMLAttributes, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

// Custom Hook to handle layout effects only on the client
gsap.registerPlugin(ScrollTrigger);  // Register the plugin inside useEffect to avoid SSR issues

const refreshListener = () => {
    if (document.body.getAttribute("style") === "") {
        document.body.removeAttribute("style");
    }
};

ScrollTrigger.addEventListener("refresh", refreshListener);

interface AnimatedContentProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const AnimatedContent = ({ className = "", children }: AnimatedContentProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const animationRef = useRef<HTMLDivElement | null>(null);

    // Using the isomorphic layout effect hook to handle client-side-only logic
    useEffect(() => {

        // Register the plugin only on the client side to avoid SSR errors

        // Initialize animation only if refs are available
        if (containerRef.current && animationRef.current) {
            const ctx = gsap.context(() => {
                gsap.to(animationRef.current, {
                    y: 0, // Move element to its natural position
                    opacity: 1, // Fade it in
                    ease: "power2.inOut", // Smooth easing
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "150 bottom",  // Trigger when element enters the viewport
                        end: "bottom top",    // End when it leaves the viewport
                        toggleActions: "play none none reverse",  // Play and reverse on scroll
                    },
                });
            }, containerRef);

            // Cleanup function for GSAP context
            return () => ctx.revert();
        }
    }, []); // Empty dependency array ensures this runs once after the component is mounted

    // Hydration Fix: Ensure the component only renders after mounting on the client

    return (
        <div className={cn("w-full", className)} ref={containerRef}>
            <div ref={animationRef} className="translate-y-[50%] opacity-0">
                {children}
            </div>
        </div>
    );
};

export default AnimatedContent;
