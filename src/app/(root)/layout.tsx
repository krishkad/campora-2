"use client";
import React from "react";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { Toaster } from "@/components/ui/toaster";

const RootLayout = ({ children }: { children: string }) => {
  return (
    <div className="w-full root">
      <Navbar />
      <main className="w-full">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default RootLayout;
