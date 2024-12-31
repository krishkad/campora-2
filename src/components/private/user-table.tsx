"use client";
import React from 'react'
import { User, users } from '@/constants/index.c'
import { ColumnDef } from '@tanstack/react-table'
import SortableTable from './sortable-table';

const UserTable = () => {
    const columns: ColumnDef<User>[] = [
        {
            accessorKey: 'name',
            header: "Name",
            cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>
        },
        {
            accessorKey: 'email',
            header: "Email",
            cell: ({ row }) => <div className="font-medium">{row.getValue("email")}</div>
        },
        {
            accessorKey: "phone",
            header: "Phone",
            cell: ({ row }) => <div className="font-medium">{row.getValue("phone")}</div>
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
        }
    ];

    return (
        <div className='w-full'>
            <SortableTable data={users} columns={columns} />
        </div>
    )
}

export default UserTable