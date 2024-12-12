"use client";
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }: { title: string, containerClass?: string }) => {


    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const textAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "150 bottom",
                    end: "center bottom",
                    toggleActions: "play none none reverse",
                }
            })

            textAnimation.to('.animated-word', {
                y: 0,
                opacity: 1,
                ease: 'power2.inOut',
                stagger: 0.02
            })
        }, containerRef)

        return () => ctx.revert();
    }, [])


    return (
        <div ref={containerRef} className={cn("", containerClass)}>
            {title.split("<br />").map((line, lineIndex) => (
                <div
                    key={lineIndex}
                    className="flex justify-center items-center max-w-full flex-wrap gap-2 px-10 md:gap-3 text-center text-4xl font-medium text-balance"
                >
                    {line.split(" ").map((word, wordIndex: number) => {
                        // Check if the word contains a span element
                        const isSpanWord = word.includes("<span>");
                        return (
                            <React.Fragment key={wordIndex}>
                                <span
                                    className={`animated-word`}
                                >
                                    {isSpanWord
                                        ?
                                        <span className="text-primary">
                                            {
                                                word.match(/<span.*?>(.*?)<\/span>/)?.[1]
                                            }
                                        </span>

                                        : word
                                    }
                                </span>
                            </React.Fragment>
                        );
                    })}
                </div>
            ))}
        </div>

    )
}

export default AnimatedTitle