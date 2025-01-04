"use client";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ADMINROUTE } from "@/constants/index.c"
import Link from 'next/link';
import Logo from "../shared/logo";
import { useEffect, useState } from "react";
import { MOBILE_BREAKPOINT, useIsMobile } from "@/hooks/use-mobile";
import { SheetClose } from "../ui/sheet";



export default function AppSidebar() {

    const isMobile = useIsMobile();

   
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="pt-5">
                        <Logo IconClassName="!text-black" />
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="pt-10">
                            {ADMINROUTE.map((item, i) => (
                                <SidebarMenuItem key={i} className="h-14 border-none">
                                    <SidebarMenuButton asChild className="h-full border-none focus:border-none focus-visible:ring-0">
                                        {!isMobile ? (
                                            <Link href={item.href} className="size-full">
                                                <item.icon className="w-5 h-6 " />
                                                <span className="text-base">{item.label}</span>
                                            </Link>
                                        ) : (

                                            <SheetClose asChild>
                                                <Link href={item.href} className="size-full">
                                                    <item.icon className="w-5 h-6 " />
                                                    <span className="text-base">{item.label}</span>
                                                </Link>
                                            </SheetClose>

                                        )}

                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
