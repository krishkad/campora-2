"use client";
import Sidebar from '@/components/private/sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AlignCenter } from 'lucide-react';
import React, { ReactNode } from 'react'

const AdminLayout = ({ children }: { children: ReactNode }) => {

    return (
        <div className="w-full flex">
            <div className="w-[350px]">
                <Sidebar />
            </div>
            <main className="w-full bg-slate-100 p-5">
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center justify-center gap-3">
                        <Button
                            size={'icon'}
                            variant={"outline"}
                            className='rounded-full'
                        >
                            <AlignCenter className='w-5 h-5 inline' />
                        </Button>
                        <h4 className="text-base font-semibold">
                            Dashboard
                        </h4>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <Input
                            placeholder='Search Here'
                            type='text'
                            className='bg-white'
                        />
                    </div>
                </div>
                <div className="w-full mt-6">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default AdminLayout;