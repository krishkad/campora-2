"use client";
import Sidebar from '@/components/private/sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AlignJustifyIcon } from 'lucide-react';
import React, { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import SidebarDropdown from '@/components/private/sidebar-dropdown';

const inter = Inter({ subsets: ['latin'] })





const AdminLayout = ({ children }: { children: ReactNode }) => {

    return (
        <div className={cn("w-full flex", inter.className)}>
            <div className="hidden md:block w-[350px]">
                <Sidebar />
            </div>
            <main className="w-full h-svh bg-gray-100">
                <ScrollArea className='size-full p-5'>

                    <>
                        <div className="max-w-6xl mx-auto flex items-center justify-between gap-5">
                            <div className="flex items-center justify-center gap-3">
                                <SidebarDropdown />
                                <h4 className="text-base font-semibold">
                                    Dashboard
                                </h4>
                            </div>
                            <div className="flex items-center justify-center gap-3">
                                <Input
                                    placeholder='Search Here'
                                    type='text'
                                    className='bg-white w-32'
                                />
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            {children}
                        </div>
                    </>
                </ScrollArea>
            </main>
        </div>
    )
}

export default AdminLayout;