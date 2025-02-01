"use client";
import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button, buttonVariants } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { addDays, format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, PlusIcon, SquareDotIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Booking } from "@/constants/index.c";
import { v4 as uuidv4 } from "uuid";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    to: z.date(),
  }),
  numberOfGuests: z.number().min(1, "At least one guest required").default(2),
  numberOfKids: z.number().optional().default(0),
  message: z.string().optional(),
  specialRequests: z.string().optional(),
  amount: z.number().min(1, "amount is required"),
  food: z.enum(["Veg", "Non-Veg"]),
  paymentStatus: z.enum(["Paid", "Pending", "Failed"]),
  bookingStatus: z.enum(["Confirmed", "Pending", "Cancelled"]),
});

const UpdateBooking = ({
  handleUpdateBooking,
  booking,
  open,
  onOpenChange,
}: {
  handleUpdateBooking: (value: Partial<Booking>) => void;
  booking: Booking;
  open: boolean;
  onOpenChange: (value: boolean) => void;
}) => {
  const form = useForm<z.infer<typeof BookingSchema>>({
    resolver: zodResolver(BookingSchema),
    defaultValues: {
      name: booking.name,
      email: booking.email,
      phone: booking.phone,
      address: booking.address,
      checkInAndOutDate: {
        from: new Date(booking.checkInAndOutDate.form),
        to: new Date(booking.checkInAndOutDate?.to),
      },
      numberOfGuests: booking.numberOfGuests,
      numberOfKids: booking.numberOfKids,
      message: booking.message,
      specialRequests: booking.specialRequests,
      amount: booking.amount,
      food: booking.foodPreference,
      paymentStatus: booking.paymentStatus,
      bookingStatus: booking.bookingStatus,
    },
  });

  useEffect(() => {
    form.reset({
      name: booking.name,
      email: booking.email,
      phone: booking.phone,
      address: booking.address,
      checkInAndOutDate: {
        from: new Date(booking.checkInAndOutDate.form),
        to: new Date(booking.checkInAndOutDate?.to),
      },
      numberOfGuests: booking.numberOfGuests,
      numberOfKids: booking.numberOfKids || 0,
      message: booking.message,
      specialRequests: booking.specialRequests,
      amount: booking.amount,
      food: booking.foodPreference,
      paymentStatus: booking.paymentStatus,
      bookingStatus: booking.bookingStatus,
    });
  }, [booking]);

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        onOpenChange(open);
        form.reset();
      }}
    >
      <DialogContent className="max-sm:max-w-[90%] h-max max-w-2xl">
        <div
          className="w-full max-h-[92svh] overflow-y-auto   [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          <div className="w-full h-max">
            <DialogHeader>
              <DialogTitle className="focus:border-none focus-visible:ring-0">
                Update Booking
              </DialogTitle>
              <DialogDescription>
                Fill Guest Information and Book on behave of Your Guest
              </DialogDescription>
            </DialogHeader>
            <div className="w-full mt-4">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit((data) => {
                    handleUpdateBooking({
                      _id: booking._id,
                      name: data.name,
                      email: data.email,
                      phone: data.phone,
                      address: data.address,
                      checkInAndOutDate: {
                        form: data.checkInAndOutDate.from,
                        to: data.checkInAndOutDate.to,
                      },
                      numberOfGuests: data.numberOfGuests,
                      numberOfKids: data.numberOfKids,
                      message: data.message,
                      specialRequests: data.specialRequests,
                      amount: data.amount,
                      foodPreference: data.food,
                      paymentStatus: data.paymentStatus,
                      bookingStatus: data.bookingStatus,
                    });
                    onOpenChange(false);
                  })}
                  className="space-y-5 mx-auto"
                >
                  <div className="w-full space-y-5">
                    <FormField
                      control={form.control}
                      name="checkInAndOutDate"
                      render={({ field }) => {
                        return (
                          <FormItem className="flex flex-col gap-1">
                            <FormLabel>Check In and Out Date</FormLabel>
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
                                          {format(
                                            field.value.from,
                                            "LLL dd, y"
                                          )}{" "}
                                          -{" "}
                                          {format(field.value.to, "LLL dd, y")}
                                        </>
                                      ) : (
                                        format(
                                          new Date(field.value.from),
                                          "LLL dd, y"
                                        )
                                      )
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent
                                className="z-60 w-auto p-0 pointer-events-auto"
                                align="start"
                              >
                                <Calendar
                                  className="z-60"
                                  initialFocus
                                  mode="range"
                                  defaultMonth={field.value?.from}
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  numberOfMonths={2}
                                  disabled={(date) => {
                                    const today = new Date();
                                    today.setHours(0, 0, 0, 0);
                                    return date < today;
                                  }}
                                />
                              </PopoverContent>
                            </Popover>
                          </FormItem>
                        );
                      }}
                    />
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter Guest Name"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter Guest Email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter Guest Phone No."
                                  {...field}
                                  type="number"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Address</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter Guest Address"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="numberOfGuests"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>No. of Guest</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter No. of Guest"
                                  type="number"
                                  value={field.value || ""}
                                  onChange={(e) => {
                                    // Convert the value to a number before updating the form state
                                    const value = e.target.value
                                      ? parseInt(e.target.value, 10)
                                      : "";
                                    field.onChange(value);
                                  }}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="numberOfKids"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>No. of Kids</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter No. of Kids"
                                  type="string"
                                  value={field.value.toString() || ""}
                                  onChange={(e) => {
                                    // Convert the value to a number before updating the form state
                                    const value = e.target.value
                                      ? parseInt(e.target.value, 10)
                                      : 0;
                                    field.onChange(value);
                                  }}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="bookingStatus"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Booking Status</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Booking Status" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Confirmed">
                                    Confirmed
                                  </SelectItem>
                                  <SelectItem value="Pending">
                                    Pending
                                  </SelectItem>
                                  <SelectItem value="Cancelled">
                                    Cancelled
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="paymentStatus"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Payment Status</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Payment Status" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Paid">Paid</SelectItem>
                                  <SelectItem value="Pending">
                                    Pending
                                  </SelectItem>
                                  <SelectItem value="Failed">Failed</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                    </div>
                    <div className="w-full space-y-5 grid-cols-1 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="food"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Food</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="w-3/4 md:w-1/2 grid grid-cols-2 gap-4"
                                >
                                  <div>
                                    <RadioGroupItem
                                      value="Veg"
                                      id="Veg"
                                      className="peer sr-only"
                                    />
                                    <Label
                                      htmlFor="Veg"
                                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    >
                                      <SquareDotIcon className="mb-3 h-6 w-6 text-green-600" />
                                      Veg
                                    </Label>
                                  </div>
                                  <div>
                                    <RadioGroupItem
                                      value="Non-Veg"
                                      id="Non-Veg"
                                      className="peer sr-only"
                                    />
                                    <Label
                                      htmlFor="Non-Veg"
                                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    >
                                      <SquareDotIcon className="mb-3 h-6 w-6 text-red-500" />
                                      Non-Veg
                                    </Label>
                                  </div>
                                </RadioGroup>
                              </FormControl>
                              <FormDescription>
                                Update amount manually if food is changed.
                              </FormDescription>
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Amount</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Amount"
                                  value={field.value || ""}
                                  onChange={(e) => {
                                    const value = parseInt(e.target.value, 10);
                                    field.onChange(value);
                                  }}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Message"
                                  className="resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="specialRequests"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Special Reguests</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Eg. Birthday decoration, Cake, etc"
                                  className="resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-full flex max-sm:flex-col items-center justify-between gap-3">
                    <Button
                      type="reset"
                      variant={"outline"}
                      onClick={() => form.reset()}
                      className="max-sm:w-full"
                    >
                      Reset
                    </Button>
                    <Button type="submit" className="max-sm:w-full">
                      Update
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateBooking;
