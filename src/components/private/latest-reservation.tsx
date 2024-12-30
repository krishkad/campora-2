"use client";
import { Booking, campingBookings } from '@/constants/index.c'
import { ColumnDef } from '@tanstack/react-table';
import React from 'react'
import { Button } from '../ui/button';
import { ArrowUpDown } from 'lucide-react';
import SortableTable from './sortable-table';
import { ScrollArea } from '../ui/scroll-area';

const LatestReservations = () => {

    const column: ColumnDef<Booking>[] = [
        {
            accessorKey: 'name',
            header: "Name",
            cell: ({ row }) => {
                return <div className="font-semibold">{row.getValue("name")}</div>
            }
        },
        {
            accessorKey: 'checkInDate',
            header: "Check-In",
            cell: ({ row }) => <div className="lowercase">{row.getValue('checkInDate')}</div>
        },
        {
            accessorKey: "checkOutDate",
            header: "Check-Out",
            cell: ({ row }) => <div className="lowercase">{row.getValue("checkOutDate")}</div>
        },
    ];

    return (
        <div className='w-full'>
            <SortableTable data={campingBookings} columns={column} filter={false} />
        </div>
    )
}

export default LatestReservations