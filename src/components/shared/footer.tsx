import React from 'react'
import Logo from './logo';
import { NAVLINKS, socialLinks } from '@/constants/index.c';
import { Button, buttonVariants } from '../ui/button';
import { CiLocationArrow1 } from "react-icons/ci";
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Footer = () => {
    return (
        <div className="w-full bg-black">
            <div className='max-w-wrapper-6xl py-14'>
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-500 pb-5">
                    <div className="w-full">
                        <div className="w-full flex justify-start">
                            <Logo className='!text-white' />
                        </div>
                        <div className="w-full pt-5 !text-gray-400">
                            <p className="text-wrap font-medium text-sm">
                                123 Green Valley Road, <br />
                                Near Mulshi Lake, <br />
                                Pune, Maharashtra, 412108, India <br />
                            </p>
                        </div>
                        <div className="w-full flex items-center-justify-center gap-3 py-5">
                            {socialLinks.map((social, i) => (
                                <Link href={social.url} target='__blank' className={cn(buttonVariants({ variant: "outline", size: "icon" }), 'dark rounded-full')} key={i}>
                                    <social.reactIcon className='w-5 h-5 shrink-0 text-white' />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="w-full">
                            <h3 className="text-xl font-semibold text-white">
                                Quick Links
                            </h3>
                            <div className='w-8 h-px bg-primary mt-4' />
                        </div>
                        <div className="w-full space-y-5 mt-6">
                            {NAVLINKS.map((nav, i) => (
                                <Link href={nav.href} className="flex items-center justify-start gap-3 hover:!text-white text-gray-300" key={i}>
                                    <CiLocationArrow1 className='w-4 h-4 shrink-0 rotate-45 hover:!fill-white' />
                                    <span className="text-sm">
                                        {nav.label}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="w-full">
                            <h3 className="text-xl font-semibold text-white">
                                Connect With Us
                            </h3>
                            <div className='w-8 h-px bg-primary mt-4' />
                        </div>
                        <div className="w-full space-y-5 mt-6">
                            <div className="w-full flex items-center justify-start text-sm text-gray-300">
                                <span className="text-sm font-bold text-gray-100 pr-1">Phone:</span> {" "}
                                +91 98765 43210
                            </div>
                            <div className="w-full flex items-center justify-start text-sm text-gray-300">
                                <span className="text-sm font-bold text-gray-100 pr-1">Email:</span> {" "}
                                info@campora.com
                            </div>
                            <div className="w-full flex items-center justify-start text-sm text-gray-300">
                                <span className="text-sm font-bold text-gray-100 pr-1">Working Hours:</span>{" "}

                                9:00 AM - 7:00 PM (Mon-Sun)
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;