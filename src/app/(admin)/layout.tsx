"use client";
import AppSidebar from "@/components/private/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlignJustifyIcon } from "lucide-react";
import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
// import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import SidebarDropdown from "@/components/private/sidebar-dropdown";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { ADMINROUTE } from "@/constants/index.c";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Toaster } from "@/components/ui/toaster";
import { Separator } from "@/components/ui/separator";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const inter = Inter({ subsets: ["latin"] });

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  const title = ADMINROUTE.find((route) => route.href === pathname);

  return (
    <>
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
                <Popover>
                  <PopoverTrigger asChild>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent className="mr-4">
                    <p className="text-base font-semibold">Emma White</p>
                    <p className="text-sm font-medium">emmawhite@gmail.com</p>
                    <Separator className={"w-full my-2"} />
                    <Button variant={"ghost"} className="w-full flex justify-start">Log out</Button>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="w-full mt-6">{children}</div>
          </main>
        </div>
      </SidebarProvider>
      <Toaster />
    </>
  );
};

export default AdminLayout;
