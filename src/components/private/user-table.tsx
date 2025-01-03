"use client";
import React from 'react'
import { User, users } from '@/constants/index.c'
import { ColumnDef } from '@tanstack/react-table'
import SortableTable from './sortable-table';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import { EllipsisVerticalIcon } from 'lucide-react';


const UserTable = () => {
   

    const columns: ColumnDef<User>[] = [
        {
            accessorKey: 'name',
            header: "Name",
            cell: ({ row }) => {
                return (

                    < div className="font-medium" > {row.getValue("name")}</div >
                )
            }
        },
        {
            accessorKey: 'email',
            header: "Email",
            cell: ({ row }) => <div className="font-medium">{row.getValue("email")}</div>
        },
        {
            accessorKey: "phone",
            header: "Phone",
            cell: ({ row }) => <p className="font-medium whitespace-nowrap">{row.getValue("phone")}</p>
        },
        {
            accessorKey: "address",
            header: "Address",
            cell: ({ row }) => <div className="font-medium">{row.getValue("address")}</div>
        },
        {
            accessorKey: "joinedDate",
            header: "Joining Date",
            cell: ({ row }) => {
                const dataString: string = row.getValue("joinedDate");
                const date = new Date(dataString);
                const formatedDate = date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                });
                return <div className="font-medium">{formatedDate}</div>
            }
        },
        {
            accessorKey: "role",
            header: "Role",
            cell: ({ row }) => <div className="font-medium">{row.getValue("role")}</div>
        },
        {
            id: 'actions',
            cell: ({ row }) => {
                return <DropdownMenu>
                    <DropdownMenuTrigger className={cn(buttonVariants({ size: "icon", variant: "ghost" }))}>
                        <EllipsisVerticalIcon className='w-4 h-4 shrink-0 ' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem
                            className='bg-red-500 text-white focus:bg-red-400 focus:text-white'
                        >
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            }
        }
    ];

    return (
        <div className='w-full'>
            <SortableTable data={users} columns={columns} />
        </div>
    )
}

export default UserTable



