"use client";
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useForm } from "react-hook-form"
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button, buttonVariants } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { addDays, format } from "date-fns"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon, PlusIcon } from 'lucide-react';
import { cn } from '@/lib/utils';


// export interface Booking {
//     id: number;
//     name: string;
//     email: string;
//     phone: string;
//     address: string;
//     checkInDate: string; // ISO format: YYYY-MM-DD
//     checkOutDate: string; // ISO format: YYYY-MM-DD
//     paymentStatus: "Paid" | "Pending" | "Failed";
//     foodPreference: "Veg" | "Non-Veg";
//     numberOfGuests: number;
//     tentType: "Single" | "Double" | "Family";
//     message?: string;
//     specialRequests?: string;
//     bookingStatus: "Confirmed" | "Pending" | "Cancelled";
//     createdAt: string; // ISO format: YYYY-MM-DDTHH:mm:ssZ
// };

const BookingSchema = z.object({
    name: z.string().min(2, "Name must have at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must have at least 10 digits"),
    address: z.string().min(2, "Address must have at least 2 characters"),
    checkInAndOutDate: z.object({
        from: z.date(),
        to: z.date()
    }),
    numberOfGuests: z.number().min(1, "At least one guest required"),
    message: z.string().optional(),
    specialRequests: z.string().optional(),
})

const CreateBooking = () => {

    const form = useForm<z.infer<typeof BookingSchema>>({
        resolver: zodResolver(BookingSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            address: "",
            checkInAndOutDate: { from: new Date(), to: addDays(new Date(), 1) },
            numberOfGuests: 1,
            message: "",
            specialRequests: ""
        }
    })


    return (
        <Dialog >
            <DialogTrigger className={cn(buttonVariants({ variant: 'default' }))}>
                <PlusIcon className='w-4 h-4 shrink-0 inilne mr-0.5' />
                <span className="max-sm:hidden"> Create Booking</span>
            </DialogTrigger>
            <DialogContent className='max-sm:max-w-[90%] max-w-2xl'>
                <DialogHeader>
                    <DialogTitle className='focus:border-none focus-visible:ring-0'>Create Booking</DialogTitle>
                    <DialogDescription>
                        Fill Guest Information and Book on behave of Your Guest
                    </DialogDescription>
                </DialogHeader>
                <div className="w-full mt-4">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit((data) => { console.log(data) })}
                            className='space-y-5 mx-auto'
                        >


                            <div className="w-full space-y-5">
                                <FormField
                                    control={form.control}
                                    name='checkInAndOutDate'
                                    render={({ field }) => {
                                        return <FormItem className='flex flex-col gap-1'>
                                            <FormLabel>
                                                Check In and Out Date
                                            </FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            id="date"
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-full justify-start text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            <CalendarIcon />
                                                            {field.value?.from ? (
                                                                field.value.to ? (
                                                                    <>
                                                                        {format(field.value.from, "LLL dd, y")} -{" "}
                                                                        {format(field.value.to, "LLL dd, y")}
                                                                    </>
                                                                ) : (
                                                                    format(new Date(field.value.from), "LLL dd, y")
                                                                )
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="z-60 w-auto p-0 pointer-events-auto" align="start">
                                                    <Calendar
                                                        className="z-60"
                                                        initialFocus
                                                        mode="range"
                                                        defaultMonth={field.value?.from}
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        numberOfMonths={2}
                                                    // {...field}
                                                    />
                                                </PopoverContent>
                                            </Popover>

                                        </FormItem>
                                    }}
                                />
                                <div className="w-full grid grid-cols-2 gap-2 sm:gap-5">

                                    <FormField
                                        control={form.control}
                                        name='name'
                                        render={({ field }) => {
                                            return <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder='Enter Guest Name'{...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        }}
                                    />
                                    <FormField
                                        control={form.control}
                                        name='email'
                                        render={({ field }) => {
                                            return <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder='Enter Guest Email'{...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        }}
                                    />
                                    <FormField
                                        control={form.control}
                                        name='phone'
                                        render={({ field }) => {
                                            return <FormItem>
                                                <FormLabel>Phone</FormLabel>
                                                <FormControl>
                                                    <Input placeholder='Enter Guest Phone No.'{...field} type='number' />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        }}
                                    />
                                    <FormField
                                        control={form.control}
                                        name='address'
                                        render={({ field }) => {
                                            return <FormItem>
                                                <FormLabel>Address</FormLabel>
                                                <FormControl>
                                                    <Input placeholder='Enter Guest Address'{...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        }}
                                    />
                                    <FormField
                                        control={form.control}
                                        name='numberOfGuests'
                                        render={({ field }) => {
                                            return <FormItem>
                                                <FormLabel>No. of Guest</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder='Enter No. of Guest'
                                                        type='number'
                                                        value={field.value || ""}
                                                        onChange={(e) => {
                                                            // Convert the value to a number before updating the form state
                                                            const value = e.target.value ? parseInt(e.target.value, 10) : '';
                                                            field.onChange(value);
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        }}
                                    />

                                </div>
                                <div className="w-full space-y-5 grid-cols-1 md:grid-cols-2">
                                    <FormField
                                        control={form.control}
                                        name='message'
                                        render={({ field }) => {
                                            return <FormItem>
                                                <FormLabel>Message</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder='Message' className='resize-none' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        }}
                                    />
                                    <FormField
                                        control={form.control}
                                        name='specialRequests'
                                        render={({ field }) => {
                                            return <FormItem>
                                                <FormLabel>Special Reguests</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder='Eg. Birthday decoration, Proposal, etc' className='resize-none' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        }}
                                    />
                                </div>

                            </div>
                            <div className="w-full flex max-sm:flex-col items-center justify-between gap-3">
                                <Button type='reset' variant={"outline"} onClick={() => form.reset()} className='max-sm:w-full'>
                                    Reset
                                </Button>
                                <Button type='submit' className='max-sm:w-full'>
                                    Book
                                </Button>
                            </div>

                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog >

    )
}

export default CreateBooking