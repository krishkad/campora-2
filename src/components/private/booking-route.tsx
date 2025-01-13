"use client";
import {
  Booking,
  BookingStatus,
  campingBookings,
  PaymentStatus,
} from "@/constants/index.c";
import { ColumnDef } from "@tanstack/react-table";
import React, { useEffect, useMemo, useState } from "react";
import { Button } from "../ui/button";
import {
  ArrowDownUpIcon,
  CircleCheckIcon,
  CircleMinusIcon,
  CircleXIcon,
  EllipsisVertical,
  SquareDotIcon,
} from "lucide-react";
import SortableTable from "./sortable-table";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
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
} from "@/components/ui/dropdown-menu";
import CreateBooking from "./create-booking";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { useBookings } from "@/hooks/use-bookings";
import { createBooking } from "@/hooks/create-booking";
import { updateBooking } from "@/hooks/update-booking";
import { v4 as uuidv4 } from "uuid";

const BookingRoute = () => {
  const [bookings, setBookings] = useState<Booking[]>([
    {
      _id: uuidv4(),
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "1234567890",
      address: "123 Main St, Springfield, USA",
      checkInAndOutDate: {
        form: new Date("2024-01-15"),
        to: new Date("2024-01-20"),
      },
      paymentStatus: "Paid",
      foodPreference: "Non-Veg",
      numberOfGuests: 4,
      numberOfKids: 2,
      message: "Please prepare a barbecue on the last night.",
      specialRequests: "Need an extra blanket.",
      bookingStatus: "Confirmed",
      createdAt: "2023-12-25T10:00:00Z",
      amount: 800,
    },
  ]);
  const { toast } = useToast();
  const { bookings: bookingData, error, isLoading } = useBookings();

  useEffect(() => {
    if (bookingData !== null) {
      if (JSON.stringify(bookingData) !== JSON.stringify(bookings)) {
        setBookings(bookingData);
        console.log({ bookingData });
      }
    }
    if (!isLoading && typeof error === "string") {
      toast({
        title: "failed to fetch bookings",
        description: error,
        variant: "destructive",
      });
    }
  }, [bookingData]);

  const handleBookingStatus = async (
    status: BookingStatus,
    bookingId: string
  ) => {
    const bookIndex = bookings.findIndex((book) => book._id === bookingId);
    if (bookIndex > -1) {
      const { data, error } = await updateBooking({
        _id: bookings[bookIndex]._id,
        bookingStatus: status,
      });
      if (data && error === null) {
        bookings[bookIndex].bookingStatus = status;
        setBookings(bookings);
        console.log({ data });
        toast({
          title: `Booking Status Changed to ${status}`,
          description: `${bookings[bookIndex].name} booking updated`,
        });
      } else {
        toast({
          title: `Something went wrong`,
          description: error,
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: `Something went wrong ${bookIndex}`,
      });
    }
  };

  const handlePaymentStatus = async (
    status: PaymentStatus,
    bookingId: string
  ) => {
    const bookIndex = bookings.findIndex((book) => book._id === bookingId);

    if (bookIndex > -1) {
      const { data, error } = await updateBooking({
        _id: bookings[bookIndex]._id,
        paymentStatus: status,
      });

      if (data && error === null) {
        bookings[bookIndex].paymentStatus = status;
        setBookings(bookings);
        toast({
          title: `Booking Status Changed to ${status}`,
          description: `${bookings[bookIndex].name} booking updated`,
        });
      } else {
        toast({
          title: "Something went wrong",
          description: error,
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Something went wrong",
      });
    }
  };

  const handleCreateBooking = async (bookingProp: Partial<Booking>) => {
    if (!bookingProp) return;

    const { booking: newBooking, error } = await createBooking(bookingProp);

    if (error === null && newBooking) {
      setBookings((bookings) => [...bookings, newBooking]);
      toast({
        title: "Booking Created",
      });
    }
  };

  const column: ColumnDef<Booking>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "email",
      header: ({ column }) => {
        return (
          <Button
            variant={"ghost"}
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Emali
            <ArrowDownUpIcon className={"w-5 h-5 shrink-0 inline"} />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue("email")}</div>
      ),
    },
    {
      accessorKey: "checkInDate",
      header: "Check-In",
      cell: ({ row }) => {
        const checkInDate = row.original.checkInAndOutDate?.form;
        return (
          <div className="font-medium whitespace-nowrap">
            {checkInDate ? format(new Date(checkInDate), "LLL dd, y") : "N/A"}
          </div>
        );
      },
    },
    {
      accessorKey: "checkOutDate",
      header: "Check-Out",
      cell: ({ row }) => {
        const checkOutDate = row.original.checkInAndOutDate?.to;
        return (
          <div className="font-medium whitespace-nowrap">
            {checkOutDate ? format(new Date(checkOutDate), "LLL dd, y") : "N/A"}
          </div>
        );
      },
    },
    {
      accessorKey: "foodPreference",
      header: "Food",
      cell: ({ row }) => (
        <div className="flex items-center gap-1 font-medium">
          <SquareDotIcon
            className={cn(
              "w-4 h-4 shrink-0",
              row.getValue("foodPreference") === "Veg"
                ? "text-green-600"
                : "text-red-600"
            )}
          />
          {row.getValue("foodPreference")}
        </div>
      ),
    },
    {
      accessorKey: "numberOfGuests",
      header: "No. of Guest",
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue("numberOfGuests")}</div>
      ),
    },
    {
      accessorKey: "numberOfKids",
      header: "No. of Kids",
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue("numberOfKids")}</div>
      ),
    },
    {
      accessorKey: "bookingStatus",
      header: "Booking Status",
      cell: ({ row }) => {
        const status: "Confirmed" | "Pending" | "Cancelled" =
          row.getValue("bookingStatus");
        return (
          <Badge
            variant={
              status === "Confirmed"
                ? "confirmed"
                : status === "Pending"
                ? "pending"
                : status === "Cancelled"
                ? "destructive"
                : "default"
            }
          >
            {row.getValue("bookingStatus")}
          </Badge>
        );
      },
    },
    {
      accessorKey: "phone",
      header: "Phone",
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue("phone")}</div>
      ),
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ row }) => {
        return <p className="font-medium">{row.getValue("amount")}</p>;
      },
    },
    {
      accessorKey: "message",
      header: "Message",
      cell: ({ row }) => {
        return (
          <p className="font-medium w-[350px]">{row.getValue("message")}</p>
        );
      },
    },
    {
      accessorKey: "specialRequests",
      header: "Special Requests",
      cell: ({ row }) => {
        return (
          <p className="font-medium w-[350px]">
            {row.getValue("specialRequests")}
          </p>
        );
      },
    },
    {
      accessorKey: "paymentStatus",
      header: "Payment Status",
      cell: ({ row }) => {
        const status: "Paid" | "Pending" | "Failed" =
          row.getValue("paymentStatus");
        return (
          <Badge
            variant={
              status === "Paid"
                ? "confirmed"
                : status === "Pending"
                ? "pending"
                : status === "Failed"
                ? "destructive"
                : "default"
            }
          >
            {row.getValue("paymentStatus")}
          </Badge>
        );
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size={"icon"}>
                <EllipsisVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mr-2">
              <DropdownMenuLabel>
                <div className="w-full flex flex-col gap-px">
                  <span className="font-semibold text-base">
                    {row.original.name}
                  </span>
                  <span className="font-medium text-muted-foreground text-sm">
                    {row.original.email}
                  </span>
                </div>
              </DropdownMenuLabel>
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
                  <DropdownMenuSubTrigger>
                    Booking Status
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="space-y-1">
                      <DropdownMenuItem
                        onClick={() => {
                          handleBookingStatus(
                            "Confirmed",
                            typeof row.original._id === "string"
                              ? row.original._id
                              : ""
                          );
                        }}
                      >
                        Confirmed{" "}
                        <CircleCheckIcon className="w-5 h-5 inline shrink-0 fill-green-600 text-white" />
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => {
                          handleBookingStatus(
                            "Pending",
                            typeof row.original._id === "string"
                              ? row.original._id
                              : ""
                          );
                        }}
                      >
                        Pending{" "}
                        <CircleMinusIcon className="w-5 h-5 shrink-0 inline fill-yellow-500 text-white" />
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => {
                          handleBookingStatus(
                            "Cancelled",
                            typeof row.original._id === "string"
                              ? row.original._id
                              : ""
                          );
                        }}
                      >
                        Cancelled{" "}
                        <CircleXIcon className="w-5 h-5 shrink-0 inline fill-red-500 text-white" />
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    Payment Status
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem
                        onClick={() => {
                          handlePaymentStatus(
                            "Paid",
                            typeof row.original._id === "string"
                              ? row.original._id
                              : ""
                          );
                        }}
                      >
                        Paid
                        <CircleCheckIcon className="w-5 h-5 inline shrink-0 fill-green-600 text-white" />
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => {
                          handlePaymentStatus(
                            "Pending",
                            typeof row.original._id === "string"
                              ? row.original._id
                              : ""
                          );
                        }}
                      >
                        Pending
                        <CircleMinusIcon className="w-5 h-5 shrink-0 inline fill-yellow-500 text-white" />
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => {
                          handlePaymentStatus(
                            "Failed",
                            typeof row.original._id === "string"
                              ? row.original._id
                              : ""
                          );
                        }}
                      >
                        Failed{" "}
                        <CircleXIcon className="w-5 h-5 shrink-0 inline fill-red-500 text-white" />
                      </DropdownMenuItem>
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
        );
      },
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <Card>
        <CardContent>
          <SortableTable
            key={JSON.stringify(bookings)}
            data={bookings}
            columns={column}
            isLoading={isLoading}
            model={<CreateBooking handleCreateBooking={handleCreateBooking} />}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingRoute;
