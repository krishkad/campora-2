"use client";
import { Booking, campingBookings } from '@/constants/index.c';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react'
import { Button } from '../ui/button';
import { ArrowDownUpIcon, EllipsisVertical, SquareDotIcon } from 'lucide-react';
import SortableTable from './sortable-table';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import CreateBooking from './create-booking';

const BookingRoute = () => {
  const column: ColumnDef<Booking>[] = [
    {
      accessorKey: 'name',
      header: 'Name',
      cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>
    },
    {
      accessorKey: 'email',
      header: ({ column }) => {
        return <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Emali
          <ArrowDownUpIcon className={"w-5 h-5 shrink-0 inline"} />
        </Button>
      },
      cell: ({ row }) => <div className="font-medium">{row.getValue("email")}</div>
    },
    {
      accessorKey: "checkInDate",
      header: ({ column }) => {
        return <Button
          variant={"ghost"}
          onClick={() => { }}
        >
          Check In
        </Button>
      },
      cell: ({ row }) => <div className="font-medium">{row.getValue("checkInDate")}</div>
    },
    {
      accessorKey: "checkOutDate",
      header: ({ column }) => {
        return <Button
          variant={"ghost"}
          onClick={() => { }}
        >
          Check Out
        </Button>
      },
      cell: ({ row }) => <div className="font-medium">{row.getValue("checkOutDate")}</div>
    },
    {
      accessorKey: 'foodPreference',
      header: "Food",
      cell: ({ row }) => <div className="flex items-center gap-1 font-medium">
        <SquareDotIcon
          className={cn('w-4 h-4 shrink-0', row.getValue("foodPreference") === "Veg" ? "text-green-600" : "text-red-600")}
        />
        {row.getValue("foodPreference")}
      </div>
    },
    {
      accessorKey: "numberOfGuests",
      header: "No. of Guest",
      cell: ({ row }) => <div className="font-medium">{row.getValue("numberOfGuests")}</div>
    },
    {
      accessorKey: 'bookingStatus',
      header: "Booking Status",
      cell: ({ row }) => {
        const status: "Confirmed" | "Pending" | "Cancelled" = row.getValue("bookingStatus");
        return <Badge
          variant={status === "Confirmed" ? "confirmed" : status === "Pending" ? "pending" : status === "Cancelled" ? "destructive" : "default"}
        >
          {row.getValue("bookingStatus")}
        </Badge>
      }
    },
    {
      accessorKey: "phone",
      header: "Phone",
      cell: ({ row }) => <div className="font-medium">{row.getValue("phone")}</div>
    },
    {
      accessorKey: "tentType",
      header: "Tent Type",
      cell: ({ row }) => <div className="font-medium">{row.getValue("tentType")}</div>
    },
    {
      accessorKey: 'paymentStatus',
      header: "Payment Status",
      cell: ({ row }) => {
        const status: "Paid" | "Pending" | "Failed" = row.getValue("paymentStatus");
        return <Badge
          variant={status === "Paid" ? "confirmed" : status === "Pending" ? "pending" : status === "Failed" ? "destructive" : "default"}
        >
          {row.getValue("paymentStatus")}
        </Badge>
      }
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        return <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size={"icon"}>
              <EllipsisVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mr-2">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Keyboard shortcuts
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Booking Status</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Complete</DropdownMenuItem>
                    <DropdownMenuItem>Pending</DropdownMenuItem>
                    <DropdownMenuItem>Canceled</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>More...</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                New Team
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>GitHub</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuItem disabled>API</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-1">
      <Card>
        <CardContent>
          <SortableTable data={campingBookings} columns={column} model={<CreateBooking />} />
        </CardContent>
      </Card>

    </div>
  )
}

export default BookingRoute