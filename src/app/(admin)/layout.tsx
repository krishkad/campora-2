"use client";
import AppSidebar from '@/components/private/sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AlignJustifyIcon } from 'lucide-react';
import React, { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils';
// import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import SidebarDropdown from '@/components/private/sidebar-dropdown';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import { ADMINROUTE } from '@/constants/index.c';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar";

const inter = Inter({ subsets: ['latin'] })





const AdminLayout = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();

    const title = ADMINROUTE.find((route) => route.href === pathname);

    return (
        <SidebarProvider>

            <div className={cn("w-full flex", inter.className)}>
                {/* <div className="hidden md:block w-[260px]"> */}
                <AppSidebar />
                {/* </div> */}
                <main className="w-full h-svh overflow-y-scroll bg-gray-100   p-5">


                    <div className="max-w-7xl mx-auto flex items-center justify-between gap-5">
                        <div className="flex items-center justify-center gap-3">
                            <SidebarTrigger />
                            <h4 className="text-base font-semibold whitespace-nowrap text-ellipsis">
                                {title ? title.label : "Dashboard"}
                            </h4>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                    <div className="w-full mt-6">
                        {children}
                    </div>

                </main>
            </div >
        </SidebarProvider>
    )
}

export default AdminLayout;